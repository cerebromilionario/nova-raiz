/**
 * Nova Raiz — buildCityStats.mjs (offline-first)
 *
 * Objetivo:
 * - Gerar `src/generated/city-stats.json` para o comparador.
 * - NO Netlify (CI), roda em modo OFFLINE: NÃO faz requisições externas.
 *   Ele lê o cache versionado `src/data/city-stats-cache.json` e gera a saída.
 * - Para atualizar dados oficiais: rode LOCALMENTE `npm run citystats:refresh`
 *   e commite `src/data/city-stats-cache.json`.
 */

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const CACHE_FILE = path.join(ROOT, "src", "data", "city-stats-cache.json");
const OUT_DIR = path.join(ROOT, "src", "generated");
const OUT_FILE = path.join(OUT_DIR, "city-stats.json");

const args = new Set(process.argv.slice(2));
const REFRESH = args.has("--refresh"); // local manual

// ---------------- utils ----------------
function normalize(s) {
  return String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function safeParseJson(txt) {
  try { return JSON.parse(txt); } catch { return null; }
}

async function fileExists(p) {
  try { await fs.stat(p); return true; } catch { return false; }
}

// --------------- extract city list ---------------
async function extractCityKeysFromComparativas() {
  const p = path.join(ROOT, "src", "data", "comparativas.ts");
  const ts = await fs.readFile(p, "utf-8");

  // Captura `"name": "..."` e `"uf": "SP"` (formato JSON dentro do TS)
  const rx = /"name"\s*:\s*"([^"]+)"\s*,\s*"uf"\s*:\s*"([A-Z]{2})"/g;
  const m = [...ts.matchAll(rx)];

  const keys = new Map(); // key => {name, uf}
  for (const x of m) {
    const name = x[1];
    const uf = x[2];
    const key = `${normalize(name)}|${uf}`;
    if (!keys.has(key)) keys.set(key, { name, uf });
  }
  return keys;
}

// --------------- OFFLINE path ---------------
async function buildFromCache() {
  const keys = await extractCityKeysFromComparativas();

  const cacheExists = await fileExists(CACHE_FILE);
  const cache = cacheExists ? safeParseJson(await fs.readFile(CACHE_FILE, "utf-8")) : null;

  const cacheStats = cache?.stats && typeof cache.stats === "object" ? cache.stats : {};
  const outStats = {};

  for (const [key, c] of keys.entries()) {
    outStats[key] = cacheStats[key] ?? {
      name: c.name,
      uf: c.uf,
      ibge: null,
      pop_2022: null,
      pib_pc: null,
      idhm_2010: null,
      salario_medio_sm: null,
      escolarizacao_6a14_pct: null,
      domicilios_internet_pct: null,
      esgoto_adequado_pct: null,
      arborizacao_pct: null,
      area_km2: null,
      densidade_demo: null,
      mortalidade_infantil_por_mil: null,
      estab_saude_sus_100k: null,
      ideb_anos_iniciais: null,
      ideb_anos_finais: null,
      sources: {}
    };
  }

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(
    OUT_FILE,
    JSON.stringify({ generated_at: new Date().toISOString(), mode: "offline-cache", stats: outStats }, null, 2),
    "utf-8"
  );

  console.log(`✓ Gerado: src/generated/city-stats.json (${Object.keys(outStats).length} cidades) [OFFLINE]`);
}

// --------------- REFRESH (LOCAL) ---------------
async function refreshCacheOnline() {
  const keys = await extractCityKeysFromComparativas();

  const cacheExists = await fileExists(CACHE_FILE);
  const cache = cacheExists ? safeParseJson(await fs.readFile(CACHE_FILE, "utf-8")) : null;
  const cacheStats = cache?.stats && typeof cache.stats === "object" ? cache.stats : {};

  const safeJson = async (url) => {
    const res = await fetch(url, { headers: { "user-agent": "nova-raiz-refresh/1.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
    return res.json();
  };

  const fetchMunicipiosByUF = async (uf) =>
    safeJson(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);

  const fetchPop2022 = async (munCode) => {
    const j = await safeJson(`https://apisidra.ibge.gov.br/values/t/9514/v/93/p/2022/n6/${munCode}`);
    const v = j?.[1]?.V;
    const n = Number(String(v).replace(/\./g, "").replace(",", "."));
    return Number.isFinite(n) ? n : null;
  };

  const fetchPibPerCapitaLast = async (munCode) => {
    const j = await safeJson(`https://apisidra.ibge.gov.br/values/t/5938/v/37/p/last/n6/${munCode}`);
    const v = j?.[1]?.V;
    const n = Number(String(v).replace(/\./g, "").replace(",", "."));
    return Number.isFinite(n) ? n : null;
  };

  const ufs = [...new Set([...keys.values()].map((c) => c.uf))].sort();
  const munIndex = new Map();
  for (const uf of ufs) {
    console.log(`• IBGE municipios ${uf}...`);
    const list = await fetchMunicipiosByUF(uf);
    for (const m of list) munIndex.set(`${normalize(m.nome)}|${uf}`, m.id);
  }

  let count = 0;
  for (const [key, c] of keys.entries()) {
    const code = munIndex.get(key) ?? null;
    let pop = null, pib_pc = null;
    if (code) {
      try { pop = await fetchPop2022(code); } catch {}
      try { pib_pc = await fetchPibPerCapitaLast(code); } catch {}
    }

    const prev = cacheStats[key] ?? { name: c.name, uf: c.uf };
    cacheStats[key] = {
      ...prev,
      name: c.name,
      uf: c.uf,
      ibge: code,
      pop_2022: pop ?? prev.pop_2022 ?? null,
      pib_pc: pib_pc ?? prev.pib_pc ?? null,
      sources: {
        ...(prev.sources || {}),
        pop: pop ? "IBGE/SIDRA t9514 v93 p2022" : (prev.sources?.pop ?? null),
        pib_pc: pib_pc ? "IBGE/SIDRA t5938 v37 plast1" : (prev.sources?.pib_pc ?? null),
      }
    };

    count++;
    if (count % 10 === 0) console.log(`• Atualizadas ${count}/${keys.size} cidades...`);
  }

  const outCache = {
    generated_at: new Date().toISOString(),
    note: "Cache offline versionado. Atualize com `npm run citystats:refresh`.",
    stats: cacheStats
  };

  await fs.writeFile(CACHE_FILE, JSON.stringify(outCache, null, 2), "utf-8");
  console.log(`✓ Cache atualizado: src/data/city-stats-cache.json (${Object.keys(cacheStats).length} cidades)`);

  await buildFromCache();
}

// ----------------- entry -----------------
if (REFRESH) {
  await refreshCacheOnline();
} else {
  await buildFromCache();
}
