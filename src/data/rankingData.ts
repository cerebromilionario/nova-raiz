export type CityMetric = {
  slug: string;
  city: string;
  state: string; // UF
  region: "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";
  year: 2026 | 2027;

  // métricas base (algumas podem ser aproximadas; índices 0..100 são normalizados)
  population?: number; // habitantes (aprox.)
  gdpPerCapitaBRL?: number; // R$ (aprox.)
  idh?: number; // 0..1 (quando disponível)

  // índices normalizados 0..100
  costOfLivingIndex?: number; // 0..100 (menor é melhor)
  safetyIndex?: number; // 0..100
  healthIndex?: number; // 0..100
  educationIndex?: number; // 0..100
  internetIndex?: number; // 0..100
  jobsIndex?: number; // 0..100
  mobilityIndex?: number; // 0..100
  climateComfortIndex?: number; // 0..100

  notes?: string;
};

export type Weights = {
  safety: number;
  cost: number;
  internet: number;
  education: number;
  health: number;
  jobs: number;
  mobility: number;
  climate: number;
};

export const DEFAULT_WEIGHTS: Weights = {
  safety: 18,
  cost: 14,
  internet: 12,
  education: 12,
  health: 12,
  jobs: 14,
  mobility: 10,
  climate: 8,
};

// dataset base (2026). Para 2027: replique e ajuste (ou troque por dados novos).
export const CITY_METRICS_2026: CityMetric[] = [
  // Sudeste
  { slug:"vinhedo-sp", city:"Vinhedo", state:"SP", region:"Sudeste", year:2026, population: 82000, gdpPerCapitaBRL: 78000, idh: 0.817, costOfLivingIndex: 68, safetyIndex: 76, healthIndex: 74, educationIndex: 78, internetIndex: 86, jobsIndex: 73, mobilityIndex: 70, climateComfortIndex: 72, notes:"Eixo Anhanguera/Bandeirantes; forte perfil residencial." },
  { slug:"valinhos-sp", city:"Valinhos", state:"SP", region:"Sudeste", year:2026, population: 132000, gdpPerCapitaBRL: 72000, idh: 0.819, costOfLivingIndex: 66, safetyIndex: 70, healthIndex: 76, educationIndex: 78, internetIndex: 84, jobsIndex: 74, mobilityIndex: 70, climateComfortIndex: 72 },
  { slug:"jundiai-sp", city:"Jundiaí", state:"SP", region:"Sudeste", year:2026, population: 430000, gdpPerCapitaBRL: 69000, idh: 0.822, costOfLivingIndex: 64, safetyIndex: 67, healthIndex: 78, educationIndex: 79, internetIndex: 85, jobsIndex: 80, mobilityIndex: 72, climateComfortIndex: 71 },
  { slug:"indaiatuba-sp", city:"Indaiatuba", state:"SP", region:"Sudeste", year:2026, population: 270000, gdpPerCapitaBRL: 82000, idh: 0.788, costOfLivingIndex: 62, safetyIndex: 69, healthIndex: 74, educationIndex: 76, internetIndex: 84, jobsIndex: 78, mobilityIndex: 69, climateComfortIndex: 71 },
  { slug:"campinas-sp", city:"Campinas", state:"SP", region:"Sudeste", year:2026, population: 1220000, gdpPerCapitaBRL: 68000, idh: 0.805, costOfLivingIndex: 70, safetyIndex: 58, healthIndex: 82, educationIndex: 83, internetIndex: 88, jobsIndex: 88, mobilityIndex: 60, climateComfortIndex: 70 },

  { slug:"pocos-de-caldas-mg", city:"Poços de Caldas", state:"MG", region:"Sudeste", year:2026, population: 170000, gdpPerCapitaBRL: 54000, idh: 0.779, costOfLivingIndex: 54, safetyIndex: 66, healthIndex: 72, educationIndex: 71, internetIndex: 78, jobsIndex: 64, mobilityIndex: 68, climateComfortIndex: 82, notes:"Clima mais ameno; turismo + serviços." },
  { slug:"pouso-alegre-mg", city:"Pouso Alegre", state:"MG", region:"Sudeste", year:2026, population: 160000, gdpPerCapitaBRL: 61000, idh: 0.774, costOfLivingIndex: 52, safetyIndex: 62, healthIndex: 70, educationIndex: 70, internetIndex: 76, jobsIndex: 70, mobilityIndex: 67, climateComfortIndex: 78 },
  { slug:"juiz-de-fora-mg", city:"Juiz de Fora", state:"MG", region:"Sudeste", year:2026, population: 580000, gdpPerCapitaBRL: 52000, idh: 0.778, costOfLivingIndex: 56, safetyIndex: 58, healthIndex: 76, educationIndex: 74, internetIndex: 80, jobsIndex: 68, mobilityIndex: 62, climateComfortIndex: 74 },

  { slug:"teresopolis-rj", city:"Teresópolis", state:"RJ", region:"Sudeste", year:2026, population: 185000, gdpPerCapitaBRL: 43000, idh: 0.730, costOfLivingIndex: 58, safetyIndex: 60, healthIndex: 66, educationIndex: 66, internetIndex: 74, jobsIndex: 55, mobilityIndex: 60, climateComfortIndex: 80 },

  // Sul
  { slug:"gramado-rs", city:"Gramado", state:"RS", region:"Sul", year:2026, population: 40000, gdpPerCapitaBRL: 96000, idh: 0.827, costOfLivingIndex: 72, safetyIndex: 74, healthIndex: 70, educationIndex: 75, internetIndex: 82, jobsIndex: 70, mobilityIndex: 66, climateComfortIndex: 78, notes:"Turismo forte; sazonalidade." },
  { slug:"bento-goncalves-rs", city:"Bento Gonçalves", state:"RS", region:"Sul", year:2026, population: 123000, gdpPerCapitaBRL: 68000, idh: 0.778, costOfLivingIndex: 58, safetyIndex: 66, healthIndex: 68, educationIndex: 70, internetIndex: 76, jobsIndex: 68, mobilityIndex: 66, climateComfortIndex: 76 },
  { slug:"caxias-do-sul-rs", city:"Caxias do Sul", state:"RS", region:"Sul", year:2026, population: 520000, gdpPerCapitaBRL: 74000, idh: 0.782, costOfLivingIndex: 60, safetyIndex: 58, healthIndex: 76, educationIndex: 74, internetIndex: 82, jobsIndex: 78, mobilityIndex: 62, climateComfortIndex: 74 },
  { slug:"joinville-sc", city:"Joinville", state:"SC", region:"Sul", year:2026, population: 610000, gdpPerCapitaBRL: 65000, idh: 0.809, costOfLivingIndex: 62, safetyIndex: 62, healthIndex: 76, educationIndex: 74, internetIndex: 84, jobsIndex: 80, mobilityIndex: 62, climateComfortIndex: 70 },
  { slug:"florianopolis-sc", city:"Florianópolis", state:"SC", region:"Sul", year:2026, population: 540000, gdpPerCapitaBRL: 70000, idh: 0.847, costOfLivingIndex: 78, safetyIndex: 63, healthIndex: 80, educationIndex: 80, internetIndex: 86, jobsIndex: 78, mobilityIndex: 55, climateComfortIndex: 76 },

  // Centro-Oeste
  { slug:"brasilia-df", city:"Brasília", state:"DF", region:"Centro-Oeste", year:2026, population: 3100000, gdpPerCapitaBRL: 92000, idh: 0.824, costOfLivingIndex: 74, safetyIndex: 58, healthIndex: 78, educationIndex: 80, internetIndex: 86, jobsIndex: 82, mobilityIndex: 58, climateComfortIndex: 63 },
  { slug:"goiania-go", city:"Goiânia", state:"GO", region:"Centro-Oeste", year:2026, population: 1550000, gdpPerCapitaBRL: 56000, idh: 0.799, costOfLivingIndex: 58, safetyIndex: 55, healthIndex: 74, educationIndex: 72, internetIndex: 82, jobsIndex: 76, mobilityIndex: 60, climateComfortIndex: 65 },

  // Nordeste
  { slug:"joao-pessoa-pb", city:"João Pessoa", state:"PB", region:"Nordeste", year:2026, population: 840000, gdpPerCapitaBRL: 33000, idh: 0.763, costOfLivingIndex: 52, safetyIndex: 52, healthIndex: 70, educationIndex: 68, internetIndex: 78, jobsIndex: 62, mobilityIndex: 58, climateComfortIndex: 66 },
  { slug:"fortaleza-ce", city:"Fortaleza", state:"CE", region:"Nordeste", year:2026, population: 2700000, gdpPerCapitaBRL: 31000, idh: 0.754, costOfLivingIndex: 58, safetyIndex: 40, healthIndex: 72, educationIndex: 70, internetIndex: 80, jobsIndex: 70, mobilityIndex: 48, climateComfortIndex: 68 },

  // Norte
  { slug:"manaus-am", city:"Manaus", state:"AM", region:"Norte", year:2026, population: 2250000, gdpPerCapitaBRL: 52000, idh: 0.737, costOfLivingIndex: 62, safetyIndex: 43, healthIndex: 68, educationIndex: 66, internetIndex: 74, jobsIndex: 72, mobilityIndex: 50, climateComfortIndex: 45, notes:"Zona Franca + logística fluvial/rodoviária limitada." },
  { slug:"belem-pa", city:"Belém", state:"PA", region:"Norte", year:2026, population: 1500000, gdpPerCapitaBRL: 36000, idh: 0.746, costOfLivingIndex: 60, safetyIndex: 44, healthIndex: 70, educationIndex: 68, internetIndex: 72, jobsIndex: 66, mobilityIndex: 48, climateComfortIndex: 46, notes:"Economia portuária; clima úmido; mobilidade complexa." },
];

export const CITY_METRICS_2027: CityMetric[] = CITY_METRICS_2026.map((c) => ({
  ...c,
  year: 2027,
  notes: c.notes ? `${c.notes} (base 2026 replicada para 2027 — atualize quando tiver novos dados)` : "Base 2026 replicada para 2027 — atualize quando tiver novos dados",
}));

export const CITY_METRICS: CityMetric[] = [...CITY_METRICS_2026, ...CITY_METRICS_2027];

export function scoreCity(metric: CityMetric, weights: Weights) {
  const safe = (n: number | undefined, fallback = 50) => (typeof n === "number" && Number.isFinite(n) ? n : fallback);

  // custo: menor é melhor => converte para "score" (0..100) invertendo
  const costScore = 100 - safe(metric.costOfLivingIndex, 60);

  const parts = [
    { k: "safety", w: weights.safety, v: safe(metric.safetyIndex) },
    { k: "cost", w: weights.cost, v: costScore },
    { k: "internet", w: weights.internet, v: safe(metric.internetIndex) },
    { k: "education", w: weights.education, v: safe(metric.educationIndex) },
    { k: "health", w: weights.health, v: safe(metric.healthIndex) },
    { k: "jobs", w: weights.jobs, v: safe(metric.jobsIndex) },
    { k: "mobility", w: weights.mobility, v: safe(metric.mobilityIndex) },
    { k: "climate", w: weights.climate, v: safe(metric.climateComfortIndex) },
  ];

  const totalW = parts.reduce((acc, p) => acc + p.w, 0) || 1;
  const weighted = parts.reduce((acc, p) => acc + p.v * p.w, 0);
  const score = weighted / totalW;

  return { score, parts };
}

export const STATE_NAMES: Record<string, string> = {
  AC:"Acre", AL:"Alagoas", AP:"Amapá", AM:"Amazonas", BA:"Bahia", CE:"Ceará", DF:"Distrito Federal", ES:"Espírito Santo", GO:"Goiás",
  MA:"Maranhão", MT:"Mato Grosso", MS:"Mato Grosso do Sul", MG:"Minas Gerais", PA:"Pará", PB:"Paraíba", PR:"Paraná", PE:"Pernambuco",
  PI:"Piauí", RJ:"Rio de Janeiro", RN:"Rio Grande do Norte", RS:"Rio Grande do Sul", RO:"Rondônia", RR:"Roraima", SC:"Santa Catarina",
  SP:"São Paulo", SE:"Sergipe", TO:"Tocantins",
};
