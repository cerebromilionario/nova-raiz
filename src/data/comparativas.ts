export type ComparativaCity = { name: string; uf: string };
export type ComparativaSources = { ibge_a?: string; ibge_b?: string; inep?: string; datasus?: string; ssp?: string };
export type Comparativa = { slug: string; a: ComparativaCity; b: ComparativaCity; title: string; description: string; updated: string; sources?: ComparativaSources; tags?: string[] };

export const COMPARATIVAS: Comparativa[] = [
  {
    "slug": "jundiai-vs-indaiatuba-2026",
    "a": {
      "name": "Jundiaí",
      "uf": "SP"
    },
    "b": {
      "name": "Indaiatuba",
      "uf": "SP"
    },
    "title": "Jundiaí vs Indaiatuba (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Jundiaí e Indaiatuba: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "sorocaba-vs-campinas-2026",
    "a": {
      "name": "Sorocaba",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Sorocaba vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Sorocaba e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "campinas-vs-sao-jose-dos-campos-2026",
    "a": {
      "name": "Campinas",
      "uf": "SP"
    },
    "b": {
      "name": "São José dos Campos",
      "uf": "SP"
    },
    "title": "Campinas vs São José dos Campos (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Campinas e São José dos Campos: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "jundiai-vs-campinas-2026",
    "a": {
      "name": "Jundiaí",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Jundiaí vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Jundiaí e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "indaiatuba-vs-itu-2026",
    "a": {
      "name": "Indaiatuba",
      "uf": "SP"
    },
    "b": {
      "name": "Itu",
      "uf": "SP"
    },
    "title": "Indaiatuba vs Itu (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Indaiatuba e Itu: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "sorocaba-vs-jundiai-2026",
    "a": {
      "name": "Sorocaba",
      "uf": "SP"
    },
    "b": {
      "name": "Jundiaí",
      "uf": "SP"
    },
    "title": "Sorocaba vs Jundiaí (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Sorocaba e Jundiaí: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "sao-carlos-vs-campinas-2026",
    "a": {
      "name": "São Carlos",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "São Carlos vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre São Carlos e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "ribeirao-preto-vs-campinas-2026",
    "a": {
      "name": "Ribeirão Preto",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Ribeirão Preto vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Ribeirão Preto e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "santos-vs-campinas-2026",
    "a": {
      "name": "Santos",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Santos vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Santos e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "sao-jose-do-rio-preto-vs-ribeirao-preto-2026",
    "a": {
      "name": "São José do Rio Preto",
      "uf": "SP"
    },
    "b": {
      "name": "Ribeirão Preto",
      "uf": "SP"
    },
    "title": "São José do Rio Preto vs Ribeirão Preto (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre São José do Rio Preto e Ribeirão Preto: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "piracicaba-vs-campinas-2026",
    "a": {
      "name": "Piracicaba",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Piracicaba vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Piracicaba e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "limeira-vs-campinas-2026",
    "a": {
      "name": "Limeira",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Limeira vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Limeira e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "taubate-vs-sao-jose-dos-campos-2026",
    "a": {
      "name": "Taubaté",
      "uf": "SP"
    },
    "b": {
      "name": "São José dos Campos",
      "uf": "SP"
    },
    "title": "Taubaté vs São José dos Campos (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Taubaté e São José dos Campos: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "braganca-paulista-vs-jundiai-2026",
    "a": {
      "name": "Bragança Paulista",
      "uf": "SP"
    },
    "b": {
      "name": "Jundiaí",
      "uf": "SP"
    },
    "title": "Bragança Paulista vs Jundiaí (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Bragança Paulista e Jundiaí: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "atibaia-vs-jundiai-2026",
    "a": {
      "name": "Atibaia",
      "uf": "SP"
    },
    "b": {
      "name": "Jundiaí",
      "uf": "SP"
    },
    "title": "Atibaia vs Jundiaí (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Atibaia e Jundiaí: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "vinhedo-vs-valinhos-2026",
    "a": {
      "name": "Vinhedo",
      "uf": "SP"
    },
    "b": {
      "name": "Valinhos",
      "uf": "SP"
    },
    "title": "Vinhedo vs Valinhos (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Vinhedo e Valinhos: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "valinhos-vs-campinas-2026",
    "a": {
      "name": "Valinhos",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Valinhos vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Valinhos e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "vinhedo-vs-campinas-2026",
    "a": {
      "name": "Vinhedo",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "Vinhedo vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Vinhedo e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "americana-vs-santa-barbara-doeste-2026",
    "a": {
      "name": "Americana",
      "uf": "SP"
    },
    "b": {
      "name": "Santa Bárbara d’Oeste",
      "uf": "SP"
    },
    "title": "Americana vs Santa Bárbara d’Oeste (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Americana e Santa Bárbara d’Oeste: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "sao-jose-dos-campos-vs-campinas-2026",
    "a": {
      "name": "São José dos Campos",
      "uf": "SP"
    },
    "b": {
      "name": "Campinas",
      "uf": "SP"
    },
    "title": "São José dos Campos vs Campinas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre São José dos Campos e Campinas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "curitiba-vs-florianopolis-2026",
    "a": {
      "name": "Curitiba",
      "uf": "PR"
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC"
    },
    "title": "Curitiba vs Florianópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Curitiba e Florianópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "maringa-vs-londrina-2026",
    "a": {
      "name": "Maringá",
      "uf": "PR"
    },
    "b": {
      "name": "Londrina",
      "uf": "PR"
    },
    "title": "Maringá vs Londrina (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Maringá e Londrina: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "maringa-vs-curitiba-2026",
    "a": {
      "name": "Maringá",
      "uf": "PR"
    },
    "b": {
      "name": "Curitiba",
      "uf": "PR"
    },
    "title": "Maringá vs Curitiba (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Maringá e Curitiba: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "joinville-vs-florianopolis-2026",
    "a": {
      "name": "Joinville",
      "uf": "SC"
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC"
    },
    "title": "Joinville vs Florianópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Joinville e Florianópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "blumenau-vs-joinville-2026",
    "a": {
      "name": "Blumenau",
      "uf": "SC"
    },
    "b": {
      "name": "Joinville",
      "uf": "SC"
    },
    "title": "Blumenau vs Joinville (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Blumenau e Joinville: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "balneario-camboriu-vs-florianopolis-2026",
    "a": {
      "name": "Balneário Camboriú",
      "uf": "SC"
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC"
    },
    "title": "Balneário Camboriú vs Florianópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Balneário Camboriú e Florianópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "itajai-vs-balneario-camboriu-2026",
    "a": {
      "name": "Itajaí",
      "uf": "SC"
    },
    "b": {
      "name": "Balneário Camboriú",
      "uf": "SC"
    },
    "title": "Itajaí vs Balneário Camboriú (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Itajaí e Balneário Camboriú: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "chapeco-vs-joinville-2026",
    "a": {
      "name": "Chapecó",
      "uf": "SC"
    },
    "b": {
      "name": "Joinville",
      "uf": "SC"
    },
    "title": "Chapecó vs Joinville (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Chapecó e Joinville: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "criciuma-vs-florianopolis-2026",
    "a": {
      "name": "Criciúma",
      "uf": "SC"
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC"
    },
    "title": "Criciúma vs Florianópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Criciúma e Florianópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "jaragua-do-sul-vs-joinville-2026",
    "a": {
      "name": "Jaraguá do Sul",
      "uf": "SC"
    },
    "b": {
      "name": "Joinville",
      "uf": "SC"
    },
    "title": "Jaraguá do Sul vs Joinville (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Jaraguá do Sul e Joinville: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "porto-alegre-vs-florianopolis-2026",
    "a": {
      "name": "Porto Alegre",
      "uf": "RS"
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC"
    },
    "title": "Porto Alegre vs Florianópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Porto Alegre e Florianópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "caxias-do-sul-vs-joinville-2026",
    "a": {
      "name": "Caxias do Sul",
      "uf": "RS"
    },
    "b": {
      "name": "Joinville",
      "uf": "SC"
    },
    "title": "Caxias do Sul vs Joinville (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Caxias do Sul e Joinville: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "caxias-do-sul-vs-porto-alegre-2026",
    "a": {
      "name": "Caxias do Sul",
      "uf": "RS"
    },
    "b": {
      "name": "Porto Alegre",
      "uf": "RS"
    },
    "title": "Caxias do Sul vs Porto Alegre (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Caxias do Sul e Porto Alegre: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "bento-goncalves-vs-caxias-do-sul-2026",
    "a": {
      "name": "Bento Gonçalves",
      "uf": "RS"
    },
    "b": {
      "name": "Caxias do Sul",
      "uf": "RS"
    },
    "title": "Bento Gonçalves vs Caxias do Sul (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Bento Gonçalves e Caxias do Sul: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "gramado-vs-canela-2026",
    "a": {
      "name": "Gramado",
      "uf": "RS"
    },
    "b": {
      "name": "Canela",
      "uf": "RS"
    },
    "title": "Gramado vs Canela (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Gramado e Canela: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "pelotas-vs-porto-alegre-2026",
    "a": {
      "name": "Pelotas",
      "uf": "RS"
    },
    "b": {
      "name": "Porto Alegre",
      "uf": "RS"
    },
    "title": "Pelotas vs Porto Alegre (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Pelotas e Porto Alegre: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "santa-maria-vs-porto-alegre-2026",
    "a": {
      "name": "Santa Maria",
      "uf": "RS"
    },
    "b": {
      "name": "Porto Alegre",
      "uf": "RS"
    },
    "title": "Santa Maria vs Porto Alegre (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Santa Maria e Porto Alegre: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "novo-hamburgo-vs-sao-leopoldo-2026",
    "a": {
      "name": "Novo Hamburgo",
      "uf": "RS"
    },
    "b": {
      "name": "São Leopoldo",
      "uf": "RS"
    },
    "title": "Novo Hamburgo vs São Leopoldo (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Novo Hamburgo e São Leopoldo: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "passo-fundo-vs-caxias-do-sul-2026",
    "a": {
      "name": "Passo Fundo",
      "uf": "RS"
    },
    "b": {
      "name": "Caxias do Sul",
      "uf": "RS"
    },
    "title": "Passo Fundo vs Caxias do Sul (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Passo Fundo e Caxias do Sul: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "rio-grande-vs-pelotas-2026",
    "a": {
      "name": "Rio Grande",
      "uf": "RS"
    },
    "b": {
      "name": "Pelotas",
      "uf": "RS"
    },
    "title": "Rio Grande vs Pelotas (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Rio Grande e Pelotas: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "juiz-de-fora-vs-belo-horizonte-2026",
    "a": {
      "name": "Juiz de Fora",
      "uf": "MG"
    },
    "b": {
      "name": "Belo Horizonte",
      "uf": "MG"
    },
    "title": "Juiz de Fora vs Belo Horizonte (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Juiz de Fora e Belo Horizonte: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "uberlandia-vs-ribeirao-preto-2026",
    "a": {
      "name": "Uberlândia",
      "uf": "MG"
    },
    "b": {
      "name": "Ribeirão Preto",
      "uf": "SP"
    },
    "title": "Uberlândia vs Ribeirão Preto (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Uberlândia e Ribeirão Preto: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "uberaba-vs-uberlandia-2026",
    "a": {
      "name": "Uberaba",
      "uf": "MG"
    },
    "b": {
      "name": "Uberlândia",
      "uf": "MG"
    },
    "title": "Uberaba vs Uberlândia (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Uberaba e Uberlândia: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "pocos-de-caldas-vs-pouso-alegre-2026",
    "a": {
      "name": "Poços de Caldas",
      "uf": "MG"
    },
    "b": {
      "name": "Pouso Alegre",
      "uf": "MG"
    },
    "title": "Poços de Caldas vs Pouso Alegre (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Poços de Caldas e Pouso Alegre: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "divinopolis-vs-belo-horizonte-2026",
    "a": {
      "name": "Divinópolis",
      "uf": "MG"
    },
    "b": {
      "name": "Belo Horizonte",
      "uf": "MG"
    },
    "title": "Divinópolis vs Belo Horizonte (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Divinópolis e Belo Horizonte: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "niteroi-vs-petropolis-2026",
    "a": {
      "name": "Niterói",
      "uf": "RJ"
    },
    "b": {
      "name": "Petrópolis",
      "uf": "RJ"
    },
    "title": "Niterói vs Petrópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Niterói e Petrópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "petropolis-vs-teresopolis-2026",
    "a": {
      "name": "Petrópolis",
      "uf": "RJ"
    },
    "b": {
      "name": "Teresópolis",
      "uf": "RJ"
    },
    "title": "Petrópolis vs Teresópolis (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Petrópolis e Teresópolis: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "volta-redonda-vs-resende-2026",
    "a": {
      "name": "Volta Redonda",
      "uf": "RJ"
    },
    "b": {
      "name": "Resende",
      "uf": "RJ"
    },
    "title": "Volta Redonda vs Resende (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Volta Redonda e Resende: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "cabo-frio-vs-arraial-do-cabo-2026",
    "a": {
      "name": "Cabo Frio",
      "uf": "RJ"
    },
    "b": {
      "name": "Arraial do Cabo",
      "uf": "RJ"
    },
    "title": "Cabo Frio vs Arraial do Cabo (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Cabo Frio e Arraial do Cabo: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  },
  {
    "slug": "vitoria-vs-vila-velha-2026",
    "a": {
      "name": "Vitória",
      "uf": "ES"
    },
    "b": {
      "name": "Vila Velha",
      "uf": "ES"
    },
    "title": "Vitória vs Vila Velha (2026): qual é melhor para morar, trabalhar e ter qualidade de vida?",
    "description": "Comparativo estruturado entre Vitória e Vila Velha: custo de vida, bairros, internet, trabalho, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "sources": {
      "ibge_a": "",
      "ibge_b": "",
      "inep": "",
      "datasus": "",
      "ssp": ""
    },
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "2026"
    ]
  }
] as const;
