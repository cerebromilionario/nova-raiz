/**
 * Nova Raiz — buildCityStats.mjs
 * Gera src/generated/city-stats.json com dados oficiais (IBGE/SIDRA + best-effort IBGE Cidades)
 * - População (Censo 2022) via SIDRA t9514 v93 p2022
 * - PIB per capita (último ano) via SIDRA t5938 v37 p(last)
 * - Indicadores complementares via página IBGE Cidades e Estados (best-effort scraping)
 *
 * IMPORTANT: este script NÃO quebra o build se algum dado falhar — ele preenche null e segue.
 */
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "src", "generated");
const OUT_FILE = path.join(OUT_DIR, "city-stats.json");

// ---------- utils ----------
function normalize(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
function stripTags(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function parseNumberPt(s) {
  if (s == null) return null;
  const t = String(s).trim();
  if (!t) return null;
  const cleaned = t.replace(/\./g, "").replace(",", ".");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}
function parseNumberGeneric(s) {
  if (s == null) return null;
  const t = String(s).trim();
  if (!t) return null;
  const cleaned = t.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}
function toSlugIbge(name) {
  return normalize(name).replace(/\s+/g, "-");
}
async function safeJson(url) {
  const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.json();
}
async function safeText(url) {
  const res = await fetch(url, { headers: { "user-agent": "nova-raiz-build/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.text();
}

// ---------- sources ----------
async function fetchMunicipiosByUF(uf) {
  // IBGE Localidades
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
  return safeJson(url);
}

async function fetchPop2022(munCode) {
  // SIDRA: tabela 9514 / variável 93 / período 2022
  const url = `https://apisidra.ibge.gov.br/values/t/9514/v/93/p/2022/n6/${munCode}`;
  const j = await safeJson(url);
  // j[1].V should be numeric string
  const v = j?.[1]?.V;
  const n = Number(String(v).replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

async function fetchPibPerCapitaLast(munCode) {
  // SIDRA: tabela 5938 / variável 37 / período "last"
  const url = `https://apisidra.ibge.gov.br/values/t/5938/v/37/p/last/n6/${munCode}`;
  const j = await safeJson(url);
  const v = j?.[1]?.V;
  const n = Number(String(v).replace(/\./g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

async function fetchIbgeCidadesIndicators({ uf, name }) {
  const slug = toSlugIbge(name);
  const url = `https://www.ibge.gov.br/cidades-e-estados/${uf.toLowerCase()}/${slug}.html`;
  try {
    const html = await safeText(url);
    const text = stripTags(html);

    const pick = (re) => {
      const m = text.match(re);
      return m ? m[1] : null;
    };

    // Common metrics visible on IBGE Cidades page (best effort)
    const idhm = parseNumberPt(pick(/IDHM\s*\(2010\)[^0-9]*([0-9],[0-9]{3})/i));
    const salario_sm = parseNumberPt(
      pick(/Sal[aá]rio m[eé]dio mensal dos trabalhadores formais[^0-9]*([0-9],[0-9]{1,3})/i)
    );
    const escolarizacao_6a14 = parseNumberPt(
      pick(/Taxa de escolariza[cç][aã]o de 6 a 14 anos[^0-9]*([0-9],[0-9]{1,2})/i)
    );
    const internet_pct = parseNumberPt(
      pick(/Domic[ií]lios com acesso [aà] Internet[^0-9]*([0-9],[0-9]{1,2})/i)
    );
    const esgoto_pct = parseNumberPt(
      pick(/Esgotamento sanit[aá]rio adequado[^0-9]*([0-9],[0-9]{1,2})/i)
    );
    const arborizacao_pct = parseNumberPt(
      pick(/Arboriza[cç][aã]o de vias p[uú]blicas[^0-9]*([0-9],[0-9]{1,2})/i)
    );

    const area_km2 = parseNumberGeneric(pick(/\b[AÁ]rea territorial[^0-9]*([0-9\.,\s]+)/i));
    const densidade = parseNumberGeneric(pick(/Densidade demogr[aá]fica[^0-9]*([0-9\.,\s]+)/i));
    const mortalidade_infantil = parseNumberGeneric(pick(/Mortalidade infantil[^0-9]*([0-9\.,\s]+)/i));
    const estab_sus = parseNumberGeneric(pick(/Estabelecimentos de sa[uú]de SUS[^0-9]*([0-9\.,\s]+)/i));

    return {
      ok: true,
      url,
      idhm_ibge_2010: idhm ?? null,
      salario_medio_sm: salario_sm ?? null,
      escolarizacao_6a14_pct: escolarizacao_6a14 ?? null,
      domicilios_internet_pct: internet_pct ?? null,
      esgoto_adequado_pct: esgoto_pct ?? null,
      arborizacao_pct: arborizacao_pct ?? null,
      area_km2: area_km2 ?? null,
      densidade_demo: densidade ?? null,
      mortalidade_infantil_por_mil: mortalidade_infantil ?? null,
      estab_saude_sus_total: estab_sus ?? null,
    };
  } catch {
    return { ok: false, url };
  }
}

// ---------- main ----------
async function main() {
  // City list is read from src/data/comparativas.ts (simple regex, no TS import in build)
  const comparativasPath = path.join(ROOT, "src", "data", "comparativas.ts");
  const comparativasTs = await fs.readFile(comparativasPath, "utf-8");

  // Extract pairs: name/uf within a: {...} and b: {...}
  const cityMatches = [...comparativasTs.matchAll(/name:\s*"([^"]+)"\s*,\s*uf:\s*"([A-Z]{2})"/g)];
  const cities = new Map(); // key => {name, uf}
  for (const m of cityMatches) {
    const name = m[1];
    const uf = m[2];
    const key = `${normalize(name)}|${uf}`;
    if (!cities.has(key)) cities.set(key, { name, uf });
  }

  // Build municipios index for all UFs present
  const ufs = [...new Set([...cities.values()].map((c) => c.uf))].sort();
  const munIndex = new Map(); // normalize(name)|uf -> code
  for (const uf of ufs) {
    console.log(`• IBGE municipios ${uf}...`);
    try {
      const list = await fetchMunicipiosByUF(uf);
      for (const m of list) {
        const key = `${normalize(m.nome)}|${uf}`;
        munIndex.set(key, m.id);
      }
    } catch (e) {
      console.log(`  ! falha UF ${uf}: ${e.message}`);
    }
  }

  // Generate stats
  const stats = {}; // key: normalize(name)|uf
  for (const c of cities.values()) {
    const key = `${normalize(c.name)}|${c.uf}`;
    const code = munIndex.get(key) ?? null;

    // SIDRA (stable)
    let pop = null;
    let pib_pc = null;
    if (code) {
      try { pop = await fetchPop2022(code); } catch {}
      try { pib_pc = await fetchPibPerCapitaLast(code); } catch {}
    }

    // IBGE Cidades (best effort)
    const ibgeCidades = await fetchIbgeCidadesIndicators({ uf: c.uf, name: c.name });

    stats[key] = {
      name: c.name,
      uf: c.uf,
      ibge: code,
      pop_2022: pop,
      pib_pc,
      idhm_2010: ibgeCidades.ok ? ibgeCidades.idhm_ibge_2010 : null,
      salario_medio_sm: ibgeCidades.ok ? ibgeCidades.salario_medio_sm : null,
      escolarizacao_6a14_pct: ibgeCidades.ok ? ibgeCidades.escolarizacao_6a14_pct : null,
      domicilios_internet_pct: ibgeCidades.ok ? ibgeCidades.domicilios_internet_pct : null,
      esgoto_adequado_pct: ibgeCidades.ok ? ibgeCidades.esgoto_adequado_pct : null,
      arborizacao_pct: ibgeCidades.ok ? ibgeCidades.arborizacao_pct : null,
      area_km2: ibgeCidades.ok ? ibgeCidades.area_km2 : null,
      densidade_demo: ibgeCidades.ok ? ibgeCidades.densidade_demo : null,
      mortalidade_infantil_por_mil: ibgeCidades.ok ? ibgeCidades.mortalidade_infantil_por_mil : null,
      estab_saude_sus_100k: (() => {
        const total = ibgeCidades.ok ? ibgeCidades.estab_saude_sus_total : null;
        if (!total || !pop) return null;
        return Number(((Number(total) / pop) * 100000).toFixed(2));
      })(),
      sources: {
        ibge_cidades: ibgeCidades.url,
      },
    };

    // progress occasionally
    if (Math.random() < 0.05) console.log(`• Dados oficiais: ${c.name}/${c.uf} (${code ?? "sem código"})...`);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify({ generated_at: new Date().toISOString(), stats }, null, 2), "utf-8");
  console.log(`✓ Gerado: ${path.relative(ROOT, OUT_FILE)} (${Object.keys(stats).length} cidades)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
