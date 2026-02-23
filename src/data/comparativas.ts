export type RateBlock = { homicidios_100k?: string; roubo_100k?: string; furto_100k?: string };
export type SaudeBlock = { leitos_1000?: string; ubs_100k?: string; hospitais_ref?: string };
export type EducacaoBlock = { ideb?: string; taxa_aprovacao?: string };
export type InternetBlock = { fibra_cobertura?: string; vel_media?: string; cincoG?: string; coworkings?: string; observacao?: string };
export type BairrosBlock = { premium: string[]; custo_beneficio: string[]; familia: string[]; condominios: string[]; evitar: string[] };
export type PerfilBlock = { pro: string[]; contra: string[] };
export type FontesBlock = { ibge?: string; atlas?: string; inep?: string; datasus?: string; ssp?: string; anatel?: string };
export type City = {
  name: string;
  uf: string;
  idh?: string;
  pop?: string;
  pib_per_capita?: string;
  renda_media?: string;
  criminalidade?: RateBlock;
  saude?: SaudeBlock;
  educacao?: EducacaoBlock;
  internet?: InternetBlock;
  bairros?: BairrosBlock;
  perfil?: PerfilBlock;
  fontes?: FontesBlock;
};
export type Comparativa = {
  slug: string;
  a: City;
  b: City;
  title: string;
  description: string;
  updated: string;
  tags?: string[];
};

export const COMPARATIVAS: Comparativa[] = [
  {
    "slug": "sorocaba-vs-campinas-2026",
    "a": {
      "name": "Sorocaba",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campinas",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Sorocaba vs Campinas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Sorocaba vs Campinas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "jundiai-vs-campinas-2026",
    "a": {
      "name": "Jundiaí",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campinas",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Jundiaí vs Campinas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Jundiaí vs Campinas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "vinhedo-vs-campinas-2026",
    "a": {
      "name": "Vinhedo",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campinas",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Vinhedo vs Campinas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Vinhedo vs Campinas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "sao-jose-dos-campos-vs-taubate-2026",
    "a": {
      "name": "São José dos Campos",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Taubaté",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "São José dos Campos vs Taubaté (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo São José dos Campos vs Taubaté: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "ribeirao-preto-vs-sao-jose-do-rio-preto-2026",
    "a": {
      "name": "Ribeirão Preto",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "São José do Rio Preto",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Ribeirão Preto vs São José do Rio Preto (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Ribeirão Preto vs São José do Rio Preto: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "piracicaba-vs-campinas-2026",
    "a": {
      "name": "Piracicaba",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campinas",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Piracicaba vs Campinas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Piracicaba vs Campinas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "santos-vs-campinas-2026",
    "a": {
      "name": "Santos",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campinas",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Santos vs Campinas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Santos vs Campinas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "indaiatuba-vs-itu-2026",
    "a": {
      "name": "Indaiatuba",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Itu",
      "uf": "SP",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Indaiatuba vs Itu (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Indaiatuba vs Itu: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "belo-horizonte-vs-juiz-de-fora-2026",
    "a": {
      "name": "Belo Horizonte",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Juiz de Fora",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Belo Horizonte vs Juiz de Fora (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Belo Horizonte vs Juiz de Fora: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "uberlandia-vs-uberaba-2026",
    "a": {
      "name": "Uberlândia",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Uberaba",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Uberlândia vs Uberaba (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Uberlândia vs Uberaba: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "pocos-de-caldas-vs-pouso-alegre-2026",
    "a": {
      "name": "Poços de Caldas",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Pouso Alegre",
      "uf": "MG",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Poços de Caldas vs Pouso Alegre (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Poços de Caldas vs Pouso Alegre: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "niteroi-vs-petropolis-2026",
    "a": {
      "name": "Niterói",
      "uf": "RJ",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Petrópolis",
      "uf": "RJ",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Niterói vs Petrópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Niterói vs Petrópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "petropolis-vs-teresopolis-2026",
    "a": {
      "name": "Petrópolis",
      "uf": "RJ",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Teresópolis",
      "uf": "RJ",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Petrópolis vs Teresópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Petrópolis vs Teresópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "vitoria-vs-vila-velha-2026",
    "a": {
      "name": "Vitória",
      "uf": "ES",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Vila Velha",
      "uf": "ES",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Vitória vs Vila Velha (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Vitória vs Vila Velha: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "curitiba-vs-florianopolis-2026",
    "a": {
      "name": "Curitiba",
      "uf": "PR",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Curitiba vs Florianópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Curitiba vs Florianópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "maringa-vs-londrina-2026",
    "a": {
      "name": "Maringá",
      "uf": "PR",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Londrina",
      "uf": "PR",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Maringá vs Londrina (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Maringá vs Londrina: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "joinville-vs-florianopolis-2026",
    "a": {
      "name": "Joinville",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Joinville vs Florianópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Joinville vs Florianópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "blumenau-vs-joinville-2026",
    "a": {
      "name": "Blumenau",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Joinville",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Blumenau vs Joinville (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Blumenau vs Joinville: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "balneario-camboriu-vs-florianopolis-2026",
    "a": {
      "name": "Balneário Camboriú",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Balneário Camboriú vs Florianópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Balneário Camboriú vs Florianópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "porto-alegre-vs-florianopolis-2026",
    "a": {
      "name": "Porto Alegre",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Florianópolis",
      "uf": "SC",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Porto Alegre vs Florianópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Porto Alegre vs Florianópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "caxias-do-sul-vs-porto-alegre-2026",
    "a": {
      "name": "Caxias do Sul",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Porto Alegre",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Caxias do Sul vs Porto Alegre (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Caxias do Sul vs Porto Alegre: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "gramado-vs-canela-2026",
    "a": {
      "name": "Gramado",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Canela",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Gramado vs Canela (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Gramado vs Canela: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "novo-hamburgo-vs-sao-leopoldo-2026",
    "a": {
      "name": "Novo Hamburgo",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "São Leopoldo",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Novo Hamburgo vs São Leopoldo (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Novo Hamburgo vs São Leopoldo: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "brasilia-vs-goiania-2026",
    "a": {
      "name": "Brasília",
      "uf": "DF",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Goiânia",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Brasília vs Goiânia (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Brasília vs Goiânia: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "goiania-vs-anapolis-2026",
    "a": {
      "name": "Goiânia",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Anápolis",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Goiânia vs Anápolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Goiânia vs Anápolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "campo-grande-vs-dourados-2026",
    "a": {
      "name": "Campo Grande",
      "uf": "MS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Dourados",
      "uf": "MS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Campo Grande vs Dourados (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Campo Grande vs Dourados: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "cuiaba-vs-varzea-grande-2026",
    "a": {
      "name": "Cuiabá",
      "uf": "MT",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Várzea Grande",
      "uf": "MT",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Cuiabá vs Várzea Grande (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Cuiabá vs Várzea Grande: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "cuiaba-vs-rondonopolis-2026",
    "a": {
      "name": "Cuiabá",
      "uf": "MT",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Rondonópolis",
      "uf": "MT",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Cuiabá vs Rondonópolis (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Cuiabá vs Rondonópolis: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "goiania-vs-rio-verde-2026",
    "a": {
      "name": "Goiânia",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Rio Verde",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Goiânia vs Rio Verde (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Goiânia vs Rio Verde: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "brasilia-vs-aguas-claras-2026",
    "a": {
      "name": "Brasília",
      "uf": "DF",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Águas Claras",
      "uf": "DF",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Brasília vs Águas Claras (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Brasília vs Águas Claras: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "brasilia-vs-taguatinga-2026",
    "a": {
      "name": "Brasília",
      "uf": "DF",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Taguatinga",
      "uf": "DF",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Brasília vs Taguatinga (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Brasília vs Taguatinga: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "salvador-vs-feira-de-santana-2026",
    "a": {
      "name": "Salvador",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Feira de Santana",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Salvador vs Feira de Santana (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Salvador vs Feira de Santana: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "salvador-vs-lauro-de-freitas-2026",
    "a": {
      "name": "Salvador",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Lauro de Freitas",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Salvador vs Lauro de Freitas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Salvador vs Lauro de Freitas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "fortaleza-vs-caucaia-2026",
    "a": {
      "name": "Fortaleza",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Caucaia",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Fortaleza vs Caucaia (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Fortaleza vs Caucaia: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "fortaleza-vs-eusebio-2026",
    "a": {
      "name": "Fortaleza",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Eusébio",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Fortaleza vs Eusébio (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Fortaleza vs Eusébio: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "recife-vs-olinda-2026",
    "a": {
      "name": "Recife",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Olinda",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Recife vs Olinda (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Recife vs Olinda: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "recife-vs-jaboatao-dos-guararapes-2026",
    "a": {
      "name": "Recife",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Jaboatão dos Guararapes",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Recife vs Jaboatão dos Guararapes (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Recife vs Jaboatão dos Guararapes: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "joao-pessoa-vs-campina-grande-2026",
    "a": {
      "name": "João Pessoa",
      "uf": "PB",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Campina Grande",
      "uf": "PB",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "João Pessoa vs Campina Grande (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo João Pessoa vs Campina Grande: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "natal-vs-parnamirim-2026",
    "a": {
      "name": "Natal",
      "uf": "RN",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Parnamirim",
      "uf": "RN",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Natal vs Parnamirim (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Natal vs Parnamirim: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "maceio-vs-arapiraca-2026",
    "a": {
      "name": "Maceió",
      "uf": "AL",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Arapiraca",
      "uf": "AL",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Maceió vs Arapiraca (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Maceió vs Arapiraca: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "aracaju-vs-itabaiana-2026",
    "a": {
      "name": "Aracaju",
      "uf": "SE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Itabaiana",
      "uf": "SE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Aracaju vs Itabaiana (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Aracaju vs Itabaiana: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "sao-luis-vs-imperatriz-2026",
    "a": {
      "name": "São Luís",
      "uf": "MA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Imperatriz",
      "uf": "MA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "São Luís vs Imperatriz (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo São Luís vs Imperatriz: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "teresina-vs-parnaiba-2026",
    "a": {
      "name": "Teresina",
      "uf": "PI",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Parnaíba",
      "uf": "PI",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Teresina vs Parnaíba (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Teresina vs Parnaíba: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "manaus-vs-belem-2026",
    "a": {
      "name": "Manaus",
      "uf": "AM",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Belém",
      "uf": "PA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Manaus vs Belém (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Manaus vs Belém: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "fortaleza-vs-aquiraz-2026",
    "a": {
      "name": "Fortaleza",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Aquiraz",
      "uf": "CE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Fortaleza vs Aquiraz (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Fortaleza vs Aquiraz: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "recife-vs-paulista-2026",
    "a": {
      "name": "Recife",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Paulista",
      "uf": "PE",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Recife vs Paulista (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Recife vs Paulista: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "salvador-vs-camacari-2026",
    "a": {
      "name": "Salvador",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Camaçari",
      "uf": "BA",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Salvador vs Camaçari (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Salvador vs Camaçari: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "goiania-vs-aparecida-de-goiania-2026",
    "a": {
      "name": "Goiânia",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Aparecida de Goiânia",
      "uf": "GO",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Goiânia vs Aparecida de Goiânia (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Goiânia vs Aparecida de Goiânia: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "curitiba-vs-ponta-grossa-2026",
    "a": {
      "name": "Curitiba",
      "uf": "PR",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Ponta Grossa",
      "uf": "PR",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Curitiba vs Ponta Grossa (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Curitiba vs Ponta Grossa: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  },
  {
    "slug": "porto-alegre-vs-canoas-2026",
    "a": {
      "name": "Porto Alegre",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "b": {
      "name": "Canoas",
      "uf": "RS",
      "idh": "",
      "pop": "",
      "pib_per_capita": "",
      "renda_media": "",
      "criminalidade": {
        "homicidios_100k": "",
        "roubo_100k": "",
        "furto_100k": ""
      },
      "saude": {
        "leitos_1000": "",
        "ubs_100k": "",
        "hospitais_ref": ""
      },
      "educacao": {
        "ideb": "",
        "taxa_aprovacao": ""
      },
      "internet": {
        "fibra_cobertura": "",
        "vel_media": "",
        "cincoG": "",
        "coworkings": "",
        "observacao": ""
      },
      "bairros": {
        "premium": [],
        "custo_beneficio": [],
        "familia": [],
        "condominios": [],
        "evitar": []
      },
      "perfil": {
        "pro": [],
        "contra": []
      },
      "fontes": {
        "ibge": "",
        "atlas": "",
        "inep": "",
        "datasus": "",
        "ssp": "",
        "anatel": ""
      }
    },
    "title": "Porto Alegre vs Canoas (2026): custo de vida, bairros, internet e qualidade de vida — comparativo definitivo",
    "description": "Comparativo completo Porto Alegre vs Canoas: bairros por perfil, custo total, internet para trabalho remoto, segurança, saúde, educação e checklist de decisão.",
    "updated": "2026-02-20",
    "tags": [
      "comparativa",
      "cidades",
      "interior",
      "brasil",
      "2026"
    ]
  }
] as const;
