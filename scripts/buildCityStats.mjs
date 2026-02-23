import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const uniqByKey = (arr) => {
  const m = new Map();
  for (const x of arr) m.set(x.key, x);
  return Array.from(m.values());
};

function extractCitiesFromComparativasTS(tsText) {
  const out = [];
  const reCity = /"name"\s*:\s*"([^"]+)"\s*,\s*"uf"\s*:\s*"([A-Z]{2})"/g;
  let m;
  while ((m = reCity.exec(tsText)) !== null) {
    const name = m[1];
    const uf = m[2];
    out.push({ name, uf, key: `${normalize(name)}-${uf}` });
  }
  return uniqByKey(out);
}

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.json();
}

// IBGE localities: list municipios for UF (includes id)
async function getMunicipiosByUF(uf) {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
  return await fetchJSON(url);
}

// SIDRA values helper (returns numeric string or null)
async function getSidraValue({ table, geoN, geoCode, variable, period }) {
  const url = `https://apisidra.ibge.gov.br/values/t/${table}/${geoN}/${geoCode}/v/${variable}/p/${encodeURIComponent(period)}`;
  const json = await fetchJSON(url);
  // SIDRA returns [{...header}, { V: "123", ... }]
  if (!Array.isArray(json) || json.length < 2) return null;
  const row = json[1];
  const v = row?.V ?? row?.Valor ?? row?.valor ?? null;
  if (v == null) return null;
  // Normalize decimal comma etc
  const cleaned = String(v).replace(/\./g, "").replace(",", ".");
  return cleaned;
}

async function getPopulation2022(ibgeCode) {
  // Table 9514, variable 93 (População residente) - Census 2022
  // Period 2022
  try {
    return await getSidraValue({ table: 9514, geoN: "n6", geoCode: ibgeCode, variable: 93, period: "2022" });
  } catch {
    return null;
  }
}

async function getPibPerCapitaLast(ibgeCode) {
  // Table 5938, variable 37 widely used for PIB per capita (preços correntes)
  // Use "last 1" to avoid hardcoding year
  try {
    return await getSidraValue({ table: 5938, geoN: "n6", geoCode: ibgeCode, variable: 37, period: "last 1" });
  } catch {
    return null;
  }
}

async function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtmlEntities(str) {
  // Minimal entity decoding for the UNDP page
  return str
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseNumberPt(s) {
  if (s == null) return null;
  const t = String(s).trim().replace(",", ".");
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

async function fetchIDHM2010FromUNDPTable() {
  // UNDP page contains the full ranking table with IDHM + components (Renda, Longevidade, Educação).
  // Source: https://www.undp.org/pt/brazil/idhm-municipios-2010
  const url = "https://www.undp.org/pt/brazil/idhm-municipios-2010";
  try {
    const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/1.0" } });
    if (!res.ok) return new Map();
    const html = await res.text();

    const map = new Map();

    // Extract <tr> rows then <td> cells
    const trs = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    for (const tr of trs) {
      const tds = tr.match(/<t[dh][\s\S]*?<\/t[dh]>/gi);
      if (!tds || tds.length < 5) continue;

      const cells = tds.map((td) => {
        const inner = td.replace(/<\/?t[dh][^>]*>/gi, "");
        return decodeHtmlEntities(stripTags(inner));
      });

      // Expected: [rank, "Município (UF)", idhm, renda, longevidade, educacao]
      const muni = cells[1] || "";
      const mm = muni.match(/^(.*)\((..)\)\s*$/);
      if (!mm) continue;
      const name = mm[1].trim();
      const uf = mm[2].trim();

      const idhm = parseNumberPt(cells[2]);
      const renda = parseNumberPt(cells[3]);
      const longevidade = parseNumberPt(cells[4]);
      const educacao = parseNumberPt(cells[5]);

      if (!idhm || !name || !uf) continue;

      const key = `${normalize(name)}__${uf}`;
      map.set(key, { idhm, renda, longevidade, educacao });
    }

    return map;
  } catch {
    return new Map();
  }
}

async function main() {
  const compPath = path.join(ROOT, "src", "data", "comparativas.ts");
  if (!fs.existsSync(compPath)) {
    console.error("comparativas.ts not found:", compPath);
    process.exit(1);
  }
  const tsText = fs.readFileSync(compPath, "utf8");
  const cities = extractCitiesFromComparativasTS(tsText);

  // Group by UF to minimize IBGE calls
  const ufs = Array.from(new Set(cities.map((c) => c.uf))).sort();
  const municipiosByUF = new Map();

  for (const uf of ufs) {
    process.stdout.write(`• IBGE municipios ${uf}...\n`);
    const list = await getMunicipiosByUF(uf);
    const map = new Map(list.map((m) => [normalize(m.nome), String(m.id)]));
    municipiosByUF.set(uf, map);
  }

    process.stdout.write("• IDHM (UNDP/Atlas) tabela completa...\n");
  const idhmByCity = await fetchIDHM2010FromUNDPTable();

const stats = {};
  for (const c of cities) {
    const map = municipiosByUF.get(c.uf);
    const code = map?.get(normalize(c.name)) ?? null;

    if (!code) {
      stats[c.key] = { name: c.name, uf: c.uf, ibge: null, pop_2022: null, pib_pc: null, idhm_2010: null, idhm_renda_2010: null, idhm_longevidade_2010: null, idhm_educacao_2010: null };
      continue;
    }

    process.stdout.write(`• Dados oficiais: ${c.name}/${c.uf} (${code})...\n`);

        const [pop, pibpc] = await Promise.all([
      getPopulation2022(code),
      getPibPerCapitaLast(code),
    ]);

    const idhmEntry = idhmByCity.get(`${normalize(c.name)}__${c.uf}`) ?? null;


    stats[c.key] = {
      name: c.name,
      uf: c.uf,
      ibge: code,
      pop_2022: pop ? Number(pop) : null,
      pib_pc: pibpc ? Number(pibpc) : null,
      idhm_2010: idhmEntry?.idhm ?? null,
      idhm_renda_2010: idhmEntry?.renda ?? null,
      idhm_longevidade_2010: idhmEntry?.longevidade ?? null,
      idhm_educacao_2010: idhmEntry?.educacao ?? null,
      sources: {
        pop: pop ? "IBGE/SIDRA t9514 v93 p2022" : null,
        pib_pc: pibpc ? "IBGE/SIDRA t5938 v37 plast1" : null,
        idhm_2010: idhmEntry ? "UNDP/Atlas Brasil (Censos 2010)" : null,
        idhm_componentes_2010: idhmEntry ? "UNDP/Atlas Brasil (Censos 2010)" : null,
      },
    };
  }

  const outDir = path.join(ROOT, "src", "generated");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "city-stats.json");
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), stats }, null, 2), "utf8");
  process.stdout.write(`\n✓ Gerado: ${outPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
