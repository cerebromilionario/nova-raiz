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

const slugify = (s) =>
  normalize(s)
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

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
  const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/2.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/2.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
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
  if (!Array.isArray(json) || json.length < 2) return null;
  const row = json[1];
  const v = row?.V ?? row?.Valor ?? row?.valor ?? null;
  if (v == null) return null;
  const cleaned = String(v).replace(/\./g, "").replace(",", ".");
  return cleaned;
}

async function getPopulation2022(ibgeCode) {
  // Table 9514, variable 93 (População residente) - Census 2022
  try {
    return await getSidraValue({ table: 9514, geoN: "n6", geoCode: ibgeCode, variable: 93, period: "2022" });
  } catch {
    return null;
  }
}

async function getPibPerCapitaLast(ibgeCode) {
  // Table 5938, variable 37 - PIB per capita (preços correntes)
  try {
    return await getSidraValue({ table: 5938, geoN: "n6", geoCode: ibgeCode, variable: 37, period: "last 1" });
  } catch {
    return null;
  }
}

function pickPtNumber(text) {
  // matches 0,805 or 123,45 etc
  const m = text.match(/(\d{1,3}(?:\.\d{3})*,\d{2,3})/);
  return m ? m[1] : null;
}

function parsePtFloat(s) {
  if (!s) return null;
  const cleaned = String(s).replace(/\./g, "").replace(",", ".");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parsePtInt(s) {
  if (!s) return null;
  const cleaned = String(s).replace(/\./g, "").replace(/[^0-9]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

async function scrapeIBGECidades({ uf, name }) {
  // Scrape stable IBGE "Cidades e Estados" page which contains IDHM and some indicators.
  // Example: https://www.ibge.gov.br/cidades-e-estados/sp/jundiai.html
  const slug = slugify(name);
  const url = `https://www.ibge.gov.br/cidades-e-estados/${uf.toLowerCase()}/${slug}.html`;

  try {
    const html = await fetchText(url);

    // IDHM: usually appears near "IDHM Índice de desenvolvimento humano municipal"
    let idhm = null;
    const idhmBlock = html.match(/IDHM[^<]{0,120}municipal[\s\S]{0,500}?\[2010\]/i);
    if (idhmBlock) {
      const n = pickPtNumber(idhmBlock[0]);
      idhm = parsePtFloat(n);
    } else {
      // fallback: first occurrence like "IDHM ... 0,805"
      const m = html.match(/IDHM[\s\S]{0,300}?(\d,\d{3})[\s\S]{0,80}?\[2010\]/i);
      if (m) idhm = parsePtFloat(m[1]);
    }

    // Salário médio mensal dos trabalhadores formais (in salários mínimos)
    let salario_sm = null;
    const salBlock = html.match(/Sal[aá]rio m[eé]dio mensal[\s\S]{0,300}?sal[aá]rios m[ií]nimos/i);
    if (salBlock) {
      const n = pickPtNumber(salBlock[0]);
      salario_sm = parsePtFloat(n);
    }

    // Densidade demográfica (hab/km²) [2022]
    let densidade = null;
    const densBlock = html.match(/hab\/km²[\s\S]{0,120}?\[2022\]/i);
    if (densBlock) {
      const n = pickPtNumber(densBlock[0]);
      densidade = parsePtFloat(n);
    }

    // Escolarização 6 a 14 anos [%] [2022] (sometimes)
    let escolarizacao_6_14 = null;
    const escBlock = html.match(/Escolariza[cç][aã]o[\s\S]{0,250}?6 a 14 anos[\s\S]{0,200}?\[2022\]/i);
    if (escBlock) {
      const n = pickPtNumber(escBlock[0]);
      escolarizacao_6_14 = parsePtFloat(n);
    }

    return { url, idhm, salario_sm, densidade_2022: densidade, escolarizacao_6_14_2022: escolarizacao_6_14 };
  } catch {
    return { url: null, idhm: null, salario_sm: null, densidade_2022: null, escolarizacao_6_14_2022: null };
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

  const ufs = Array.from(new Set(cities.map((c) => c.uf))).sort();
  const municipiosByUF = new Map();

  for (const uf of ufs) {
    process.stdout.write(`• IBGE municipios ${uf}...\n`);
    const list = await getMunicipiosByUF(uf);
    const map = new Map(list.map((m) => [normalize(m.nome), String(m.id)]));
    municipiosByUF.set(uf, map);
  }

  const stats = {};
  for (const c of cities) {
    const map = municipiosByUF.get(c.uf);
    const code = map?.get(normalize(c.name)) ?? null;

    process.stdout.write(`• Dados oficiais: ${c.name}/${c.uf}...\n`);

    const [pop, pibpc, ibgeExtra] = await Promise.all([
      code ? getPopulation2022(code) : Promise.resolve(null),
      code ? getPibPerCapitaLast(code) : Promise.resolve(null),
      scrapeIBGECidades({ uf: c.uf, name: c.name }),
    ]);

    stats[c.key] = {
      name: c.name,
      uf: c.uf,
      ibge: code,
      pop_2022: pop ? Number(pop) : null,
      pib_pc: pibpc ? Number(pibpc) : null,
      idhm_2010: ibgeExtra?.idhm ?? null,
      salario_medio_mensal_sm: ibgeExtra?.salario_sm ?? null,
      densidade_2022: ibgeExtra?.densidade_2022 ?? null,
      escolarizacao_6_14_2022: ibgeExtra?.escolarizacao_6_14_2022 ?? null,
      sources: {
        pop: pop ? "IBGE/SIDRA t9514 v93 p2022" : null,
        pib_pc: pibpc ? "IBGE/SIDRA t5938 v37 plast1" : null,
        idhm_2010: ibgeExtra?.idhm != null ? "IBGE Cidades (fonte PNUD) [2010]" : null,
        salario_medio_mensal_sm: ibgeExtra?.salario_sm != null ? "IBGE Cidades (trabalhadores formais)" : null,
        densidade_2022: ibgeExtra?.densidade_2022 != null ? "IBGE Cidades (Censo 2022)" : null,
        escolarizacao_6_14_2022: ibgeExtra?.escolarizacao_6_14_2022 != null ? "IBGE Cidades" : null,
        ibge_cidades_url: ibgeExtra?.url ?? null,
      },
    };
  }

  const outDir = path.join(ROOT, "src", "generated");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "city-stats.json");
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), stats }, null, 2), "utf8");
  process.stdout.write(`✓ Gerado: ${path.relative(ROOT, outPath)}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
