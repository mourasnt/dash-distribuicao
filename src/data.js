// AUTO-GERADO - não editar manualmente
// Fonte: Torre de controle (Google Sheets) · gerado em 2026-09-03T21:43:52.261Z
export const DASH_DATA = {
  "kpis": {
    "total": 16790,
    "noShow": 186,
    "cancelados": 1201,
    "finalizadas": 15212,
    "aderenciaOrigemCount": 12992,
    "produtividadeMedia": 0.9792
  },
  "cruzada": {
    "ENTREGAS FINALIZADAS": {
      "PREMIER SP": 27,
      "PETLOVE RS": 1435,
      "VEDACIT": 495,
      "MOBLY": 219,
      "AMAZON": 3822,
      "AMAZON LM": 905,
      "AMAZON PUDOS": 3102,
      "PREMIER MG": 280,
      "AMAZON LM 8HRS": 424,
      "AMAZON LM 10HRS": 145,
      "AMAZON LM 6HRS": 23,
      "AMAZON LM 4 HRS": 3,
      "AMAZON INTERIOR": 1972,
      "AMAZON LM STO AMARO": 24,
      "AMAZON PUDOS INTERIOR": 387,
      "AMAZON MM": 1949
    },
    "CANCELADO PELO CLIENTE": {
      "PETLOVE RS": 1,
      "MOBLY": 116,
      "AMAZON": 443,
      "VEDACIT": 4,
      "BACKUP 3ZX": 6,
      "AMAZON LM": 1,
      "AMAZON LM 6HRS": 5,
      "AMAZON LM 8HRS": 20,
      "AMAZON INTERIOR": 322,
      "AMAZON LM 10HRS": 20,
      "AMAZON LM STO AMARO": 7,
      "AMAZON PUDOS": 10,
      "AMAZON MM": 246
    },
    "NO SHOW": {
      "AMAZON": 84,
      "AMAZON LM": 2,
      "PETLOVE RS": 12,
      "AMAZON LM 8HRS": 3,
      "AMAZON INTERIOR": 5,
      "AMAZON MM": 75,
      "AMAZON LM STO AMARO": 5
    },
    "BACKUP": {
      "AMAZON INTERIOR": 92,
      "AMAZON PUDOS": 20,
      "AMAZON MM": 5,
      "VEDACIT": 1,
      "AMAZON": 9
    },
    "QUEBROU": {
      "AMAZON": 1,
      "AMAZON PUDOS": 1,
      "AMAZON MM": 1
    },
    "EM TRANSITO": {
      "PREMIER MG": 1,
      "MOBLY": 2,
      "PETLOVE RS": 2
    },
    "A CAMINHO DO CD": {
      "AMAZON PUDOS": 3,
      "AMAZON": 1
    },
    "MOTORISTA AGENDADO": {
      "PREMIER MG": 1,
      "AMAZON MM": 24,
      "VEDACIT": 4,
      "AMAZON PUDOS": 15,
      "AMAZON PUDOS INTERIOR": 6,
      "MOBLY": 2
    }
  },
  "totalPorStatus": {
    "ENTREGAS FINALIZADAS": 15212,
    "CANCELADO PELO CLIENTE": 1201,
    "NO SHOW": 186,
    "BACKUP": 127,
    "QUEBROU": 3,
    "EM TRANSITO": 5,
    "A CAMINHO DO CD": 4,
    "MOTORISTA AGENDADO": 52
  },
  "totalPorCliente": {
    "PREMIER SP": 27,
    "PETLOVE RS": 1450,
    "VEDACIT": 504,
    "MOBLY": 339,
    "AMAZON": 4360,
    "AMAZON LM": 908,
    "AMAZON PUDOS": 3151,
    "PREMIER MG": 282,
    "BACKUP 3ZX": 6,
    "AMAZON LM 8HRS": 447,
    "AMAZON LM 10HRS": 165,
    "AMAZON LM 6HRS": 28,
    "AMAZON LM 4 HRS": 3,
    "AMAZON INTERIOR": 2391,
    "AMAZON LM STO AMARO": 36,
    "AMAZON PUDOS INTERIOR": 393,
    "AMAZON MM": 2300
  },
  "statusOrdem": [
    "ENTREGAS FINALIZADAS",
    "CANCELADO PELO CLIENTE",
    "NO SHOW",
    "BACKUP",
    "QUEBROU",
    "EM TRANSITO",
    "MOTORISTA AGENDADO",
    "A CAMINHO DO CD",
    "SEM STATUS"
  ],
  "clientes": [
    "AMAZON",
    "AMAZON INTERIOR",
    "AMAZON LM",
    "AMAZON LM 10HRS",
    "AMAZON LM 4 HRS",
    "AMAZON LM 6HRS",
    "AMAZON LM 8HRS",
    "AMAZON LM STO AMARO",
    "AMAZON MM",
    "AMAZON PUDOS",
    "AMAZON PUDOS INTERIOR",
    "BACKUP 3ZX",
    "MOBLY",
    "PETLOVE RS",
    "PREMIER MG",
    "PREMIER SP",
    "VEDACIT"
  ],
  "dataMin": "2026-02-09",
  "dataMax": "2026-09-04",
  "diario": {
    "2026-02-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PETLOVE RS": 6,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON": 62,
          "AMAZON LM": 19,
          "AMAZON PUDOS": 8
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 102
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PETLOVE RS": 6,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON": 62,
        "AMAZON LM": 19,
        "AMAZON PUDOS": 8
      },
      "aderOrigem": 66,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 102,
      "total": 102,
      "prod_sum": 100.8682,
      "prod_n": 102,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 14
        },
        "AMAZON LM": {
          "Trânsito": 15
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 171,
          "prod_sum": 5.9615,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 30,
          "prod_sum": 3.4286,
          "total": 4
        },
        "MOBLY": {
          "paradas": 31,
          "prod_sum": 1.9375,
          "total": 2
        },
        "AMAZON": {
          "paradas": 507,
          "prod_sum": 61.7424,
          "total": 62
        },
        "AMAZON LM": {
          "paradas": 1153,
          "prod_sum": 18.7982,
          "total": 19
        },
        "AMAZON PUDOS": {
          "paradas": 30,
          "prod_sum": 8,
          "total": 8
        }
      }
    },
    "2026-02-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 2,
          "PREMIER MG": 4,
          "PETLOVE RS": 7,
          "VEDACIT": 5,
          "AMAZON": 43,
          "AMAZON LM": 18,
          "AMAZON PUDOS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "PETLOVE RS": 1,
          "MOBLY": 2,
          "AMAZON": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 85,
        "CANCELADO PELO CLIENTE": 7
      },
      "tot_cliente": {
        "PREMIER SP": 2,
        "PREMIER MG": 4,
        "PETLOVE RS": 8,
        "VEDACIT": 5,
        "MOBLY": 2,
        "AMAZON": 47,
        "AMAZON LM": 18,
        "AMAZON PUDOS": 6
      },
      "aderOrigem": 66,
      "noShow": 0,
      "cancel": 7,
      "finalizadas": 85,
      "total": 92,
      "prod_sum": 91.5039,
      "prod_n": 92,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER SP": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 10
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 2,
          "total": 2
        },
        "PREMIER MG": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 183,
          "prod_sum": 6.9177,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 330,
          "prod_sum": 43,
          "total": 43
        },
        "AMAZON LM": {
          "paradas": 1038,
          "prod_sum": 17.586199999999998,
          "total": 18
        },
        "AMAZON PUDOS": {
          "paradas": 29,
          "prod_sum": 6,
          "total": 6
        }
      }
    },
    "2026-02-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PREMIER MG": 1,
          "PETLOVE RS": 5,
          "VEDACIT": 3,
          "MOBLY": 1,
          "AMAZON": 29,
          "AMAZON LM": 25,
          "AMAZON PUDOS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "VEDACIT": 1,
          "MOBLY": 1,
          "AMAZON": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PREMIER MG": 1,
        "PETLOVE RS": 5,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON": 36,
        "AMAZON LM": 25,
        "AMAZON PUDOS": 9
      },
      "aderOrigem": 58,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 74,
      "total": 83,
      "prod_sum": 81.1857,
      "prod_n": 83,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER SP": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 7
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 7,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 174,
          "prod_sum": 4.8332999999999995,
          "total": 5
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 2.625,
          "total": 3
        },
        "MOBLY": {
          "paradas": 25,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON": {
          "paradas": 295,
          "prod_sum": 29,
          "total": 29
        },
        "AMAZON LM": {
          "paradas": 1861,
          "prod_sum": 23.7274,
          "total": 25
        },
        "AMAZON PUDOS": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        }
      }
    },
    "2026-02-12": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PREMIER MG": 4,
          "PETLOVE RS": 7,
          "VEDACIT": 4,
          "MOBLY": 4,
          "AMAZON": 28,
          "AMAZON LM": 20,
          "AMAZON PUDOS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 9
        },
        "NO SHOW": {
          "AMAZON": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 77,
        "CANCELADO PELO CLIENTE": 9,
        "NO SHOW": 3
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PREMIER MG": 4,
        "PETLOVE RS": 7,
        "VEDACIT": 4,
        "MOBLY": 4,
        "AMAZON": 40,
        "AMAZON LM": 20,
        "AMAZON PUDOS": 9
      },
      "aderOrigem": 63,
      "noShow": 3,
      "cancel": 9,
      "finalizadas": 77,
      "total": 89,
      "prod_sum": 74.7313,
      "prod_n": 89,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 3
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 21,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 209,
          "prod_sum": 6.8824,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 2.8773,
          "total": 4
        },
        "MOBLY": {
          "paradas": 64,
          "prod_sum": 3.8083,
          "total": 4
        },
        "AMAZON": {
          "paradas": 344,
          "prod_sum": 27.3333,
          "total": 28
        },
        "AMAZON LM": {
          "paradas": 1417,
          "prod_sum": 19.83,
          "total": 20
        },
        "AMAZON PUDOS": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        }
      }
    },
    "2026-02-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 2,
          "PETLOVE RS": 7,
          "VEDACIT": 3,
          "AMAZON": 8,
          "AMAZON LM": 16,
          "AMAZON PUDOS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 27
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 45,
        "CANCELADO PELO CLIENTE": 29,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 2,
        "PETLOVE RS": 7,
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON": 36,
        "AMAZON LM": 16,
        "AMAZON PUDOS": 9
      },
      "aderOrigem": 31,
      "noShow": 1,
      "cancel": 29,
      "finalizadas": 45,
      "total": 75,
      "prod_sum": 46.097,
      "prod_n": 75,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER SP": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 3
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 4,
          "prod_sum": 1.5,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 227,
          "prod_sum": 6.822700000000001,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 23,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 122,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON LM": {
          "paradas": 1612,
          "prod_sum": 15.774300000000002,
          "total": 16
        },
        "AMAZON PUDOS": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        }
      }
    },
    "2026-02-14": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 6,
          "PREMIER SP": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 7
      },
      "tot_cliente": {
        "PETLOVE RS": 6,
        "PREMIER SP": 1
      },
      "aderOrigem": 3,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 7,
      "total": 7,
      "prod_sum": 6.7295,
      "prod_n": 7,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "PREMIER SP": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 190,
          "prod_sum": 5.7295,
          "total": 6
        },
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        }
      }
    },
    "2026-02-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 6,
          "MOBLY": 4,
          "AMAZON": 7,
          "AMAZON LM": 19,
          "AMAZON PUDOS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 4
        },
        "NO SHOW": {
          "AMAZON LM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 45,
        "CANCELADO PELO CLIENTE": 4,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PETLOVE RS": 6,
        "MOBLY": 4,
        "AMAZON": 11,
        "AMAZON LM": 20,
        "AMAZON PUDOS": 9
      },
      "aderOrigem": 37,
      "noShow": 1,
      "cancel": 4,
      "finalizadas": 45,
      "total": 50,
      "prod_sum": 43.021,
      "prod_n": 49,
      "drill_noShow": {
        "AMAZON LM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 187,
          "prod_sum": 5.787599999999999,
          "total": 6
        },
        "MOBLY": {
          "paradas": 69,
          "prod_sum": 3.4516999999999998,
          "total": 4
        },
        "AMAZON": {
          "paradas": 63,
          "prod_sum": 7,
          "total": 7
        },
        "AMAZON LM": {
          "paradas": 351,
          "prod_sum": 17.7817,
          "total": 19
        },
        "AMAZON PUDOS": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        }
      }
    },
    "2026-02-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 5,
          "AMAZON LM": 23
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 28
      },
      "tot_cliente": {
        "PETLOVE RS": 5,
        "AMAZON LM": 23
      },
      "aderOrigem": 25,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 28,
      "total": 28,
      "prod_sum": 27.3485,
      "prod_n": 28,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 161,
          "prod_sum": 4.9524,
          "total": 5
        },
        "AMAZON LM": {
          "paradas": 775,
          "prod_sum": 22.396099999999997,
          "total": 23
        }
      }
    },
    "2026-02-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "PETLOVE RS": 5,
          "AMAZON PUDOS": 10,
          "AMAZON": 11,
          "AMAZON LM": 23
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 34
        },
        "NO SHOW": {
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 53,
        "CANCELADO PELO CLIENTE": 36,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "PETLOVE RS": 5,
        "MOBLY": 2,
        "AMAZON PUDOS": 10,
        "AMAZON": 47,
        "AMAZON LM": 23
      },
      "aderOrigem": 39,
      "noShow": 2,
      "cancel": 36,
      "finalizadas": 53,
      "total": 91,
      "prod_sum": 54.2082,
      "prod_n": 91,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 33,
          "prod_sum": 3.7639,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 98,
          "prod_sum": 4.95,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 37,
          "prod_sum": 10,
          "total": 10
        },
        "AMAZON": {
          "paradas": 48,
          "prod_sum": 11,
          "total": 11
        },
        "AMAZON LM": {
          "paradas": 2267,
          "prod_sum": 22.4943,
          "total": 23
        }
      }
    },
    "2026-02-19": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "PETLOVE RS": 5,
          "MOBLY": 3,
          "AMAZON PUDOS": 10,
          "AMAZON": 55,
          "AMAZON LM": 23,
          "PREMIER SP": 1,
          "PREMIER MG": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 104
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "PETLOVE RS": 5,
        "MOBLY": 3,
        "AMAZON PUDOS": 10,
        "AMAZON": 55,
        "AMAZON LM": 23,
        "PREMIER SP": 1,
        "PREMIER MG": 3
      },
      "aderOrigem": 72,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 104,
      "total": 104,
      "prod_sum": 102.9138,
      "prod_n": 104,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 19
        },
        "AMAZON LM": {
          "Trânsito": 8
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3.8889,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 150,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 54,
          "prod_sum": 2.6539,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 42,
          "prod_sum": 10,
          "total": 10
        },
        "AMAZON": {
          "paradas": 288,
          "prod_sum": 55,
          "total": 55
        },
        "AMAZON LM": {
          "paradas": 1217,
          "prod_sum": 22.370999999999995,
          "total": 23
        },
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 3,
          "total": 3
        }
      }
    },
    "2026-02-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "PETLOVE RS": 5,
          "AMAZON LM": 23,
          "PREMIER MG": 4,
          "AMAZON": 28,
          "AMAZON PUDOS": 26
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 90,
        "CANCELADO PELO CLIENTE": 2,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "PETLOVE RS": 5,
        "MOBLY": 2,
        "AMAZON LM": 23,
        "PREMIER MG": 4,
        "AMAZON": 29,
        "AMAZON PUDOS": 26
      },
      "aderOrigem": 72,
      "noShow": 1,
      "cancel": 2,
      "finalizadas": 90,
      "total": 93,
      "prod_sum": 88.4271,
      "prod_n": 93,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 4
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 34,
          "prod_sum": 0.5972,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 161,
          "prod_sum": 4.9762,
          "total": 5
        },
        "AMAZON LM": {
          "paradas": 1790,
          "prod_sum": 22.8537,
          "total": 23
        },
        "PREMIER MG": {
          "paradas": 17,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 276,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 26,
          "total": 26
        }
      }
    },
    "2026-02-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM": 15
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 15
      },
      "tot_cliente": {
        "AMAZON LM": 15
      },
      "aderOrigem": 15,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 15,
      "total": 15,
      "prod_sum": 14.8649,
      "prod_n": 15,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON LM": {
          "paradas": 859,
          "prod_sum": 14.8649,
          "total": 15
        }
      }
    },
    "2026-02-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PETLOVE RS": 12,
          "MOBLY": 4,
          "AMAZON LM": 25,
          "AMAZON": 52,
          "VEDACIT": 4,
          "AMAZON PUDOS": 29
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 127,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PETLOVE RS": 12,
        "MOBLY": 4,
        "AMAZON LM": 25,
        "AMAZON": 53,
        "VEDACIT": 4,
        "AMAZON PUDOS": 29
      },
      "aderOrigem": 105,
      "noShow": 1,
      "cancel": 0,
      "finalizadas": 127,
      "total": 128,
      "prod_sum": 125.4939,
      "prod_n": 127,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 7
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 6
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 366,
          "prod_sum": 11.8392,
          "total": 12
        },
        "MOBLY": {
          "paradas": 72,
          "prod_sum": 3.0412,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1804,
          "prod_sum": 24.813499999999998,
          "total": 25
        },
        "AMAZON": {
          "paradas": 262,
          "prod_sum": 51.8,
          "total": 52
        },
        "VEDACIT": {
          "paradas": 26,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 122,
          "prod_sum": 29,
          "total": 29
        }
      }
    },
    "2026-02-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 31,
          "PREMIER SP": 1,
          "PREMIER MG": 5,
          "PETLOVE RS": 7,
          "VEDACIT": 4,
          "AMAZON LM": 24,
          "AMAZON": 29
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 10
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 101,
        "CANCELADO PELO CLIENTE": 12
      },
      "tot_cliente": {
        "AMAZON PUDOS": 31,
        "PREMIER SP": 1,
        "PREMIER MG": 5,
        "PETLOVE RS": 7,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM": 24,
        "AMAZON": 39
      },
      "aderOrigem": 80,
      "noShow": 0,
      "cancel": 12,
      "finalizadas": 101,
      "total": 113,
      "prod_sum": 101.949,
      "prod_n": 113,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 128,
          "prod_sum": 31,
          "total": 31
        },
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 197,
          "prod_sum": 7,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 36,
          "prod_sum": 3.4445,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1770,
          "prod_sum": 23.5954,
          "total": 24
        },
        "AMAZON": {
          "paradas": 226,
          "prod_sum": 28.9091,
          "total": 29
        }
      }
    },
    "2026-02-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "PREMIER SP": 1,
          "PETLOVE RS": 6,
          "VEDACIT": 4,
          "AMAZON LM": 26,
          "AMAZON": 32,
          "AMAZON PUDOS": 35
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 106,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "PREMIER SP": 1,
        "PETLOVE RS": 6,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM": 26,
        "AMAZON": 32,
        "AMAZON PUDOS": 35
      },
      "aderOrigem": 80,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 106,
      "total": 108,
      "prod_sum": 107.0046,
      "prod_n": 108,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 8
        },
        "AMAZON PUDOS": {
          "Trânsito": 9
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 2,
          "total": 2
        },
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 178,
          "prod_sum": 5.9155999999999995,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 3.25,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1563,
          "prod_sum": 25.839000000000002,
          "total": 26
        },
        "AMAZON": {
          "paradas": 243,
          "prod_sum": 32,
          "total": 32
        },
        "AMAZON PUDOS": {
          "paradas": 158,
          "prod_sum": 35,
          "total": 35
        }
      }
    },
    "2026-02-26": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PREMIER MG": 2,
          "PETLOVE RS": 5,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON LM": 24,
          "AMAZON": 29,
          "AMAZON PUDOS": 32
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 3
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 99,
        "CANCELADO PELO CLIENTE": 3,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PREMIER MG": 2,
        "PETLOVE RS": 5,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM": 24,
        "AMAZON": 33,
        "AMAZON PUDOS": 32
      },
      "aderOrigem": 84,
      "noShow": 1,
      "cancel": 3,
      "finalizadas": 99,
      "total": 103,
      "prod_sum": 97.5406,
      "prod_n": 103,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 4,
          "prod_sum": 0.5,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 16,
          "prod_sum": 2,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 155,
          "prod_sum": 4.9067,
          "total": 5
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 3.6667,
          "total": 4
        },
        "MOBLY": {
          "paradas": 42,
          "prod_sum": 1.7182,
          "total": 2
        },
        "AMAZON LM": {
          "paradas": 1650,
          "prod_sum": 23.8399,
          "total": 24
        },
        "AMAZON": {
          "paradas": 248,
          "prod_sum": 28.909100000000002,
          "total": 29
        },
        "AMAZON PUDOS": {
          "paradas": 151,
          "prod_sum": 32,
          "total": 32
        }
      }
    },
    "2026-02-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PETLOVE RS": 6,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON LM": 30,
          "AMAZON": 10,
          "AMAZON PUDOS": 32
        },
        "CANCELADO PELO CLIENTE": {
          "VEDACIT": 2,
          "AMAZON": 16,
          "BACKUP 3ZX": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 85,
        "CANCELADO PELO CLIENTE": 20
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PETLOVE RS": 6,
        "VEDACIT": 6,
        "MOBLY": 2,
        "AMAZON LM": 30,
        "AMAZON": 26,
        "BACKUP 3ZX": 2,
        "AMAZON PUDOS": 32
      },
      "aderOrigem": 74,
      "noShow": 0,
      "cancel": 20,
      "finalizadas": 85,
      "total": 105,
      "prod_sum": 84.2105,
      "prod_n": 105,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 170,
          "prod_sum": 6,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 34,
          "prod_sum": 1.7222,
          "total": 2
        },
        "AMAZON LM": {
          "paradas": 1643,
          "prod_sum": 29.738299999999995,
          "total": 30
        },
        "AMAZON": {
          "paradas": 92,
          "prod_sum": 9.75,
          "total": 10
        },
        "AMAZON PUDOS": {
          "paradas": 152,
          "prod_sum": 32,
          "total": 32
        }
      }
    },
    "2026-02-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 6,
          "AMAZON LM": 14
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 20
      },
      "tot_cliente": {
        "PETLOVE RS": 6,
        "AMAZON LM": 14
      },
      "aderOrigem": 18,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 20,
      "total": 20,
      "prod_sum": 19.9064,
      "prod_n": 20,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 198,
          "prod_sum": 5.9064,
          "total": 6
        },
        "AMAZON LM": {
          "paradas": 555,
          "prod_sum": 14,
          "total": 14
        }
      }
    },
    "2026-03-02": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "MOBLY": 2,
          "PREMIER SP": 1,
          "PREMIER MG": 5,
          "PETLOVE RS": 6,
          "AMAZON LM": 22,
          "AMAZON PUDOS": 33,
          "AMAZON": 56
        },
        "NO SHOW": {
          "AMAZON LM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 129,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 2,
        "PREMIER SP": 1,
        "PREMIER MG": 5,
        "PETLOVE RS": 6,
        "AMAZON LM": 23,
        "AMAZON PUDOS": 33,
        "AMAZON": 56
      },
      "aderOrigem": 117,
      "noShow": 1,
      "cancel": 0,
      "finalizadas": 129,
      "total": 130,
      "prod_sum": 128.5941,
      "prod_n": 129,
      "drill_noShow": {
        "AMAZON LM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "MOBLY": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 3.8889,
          "total": 4
        },
        "MOBLY": {
          "paradas": 32,
          "prod_sum": 1.95,
          "total": 2
        },
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 35,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 188,
          "prod_sum": 5.975,
          "total": 6
        },
        "AMAZON LM": {
          "paradas": 1605,
          "prod_sum": 21.7802,
          "total": 22
        },
        "AMAZON PUDOS": {
          "paradas": 123,
          "prod_sum": 33,
          "total": 33
        },
        "AMAZON": {
          "paradas": 308,
          "prod_sum": 56,
          "total": 56
        }
      }
    },
    "2026-03-03": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PREMIER MG": 4,
          "MOBLY": 1,
          "PETLOVE RS": 6,
          "VEDACIT": 4,
          "AMAZON LM": 24,
          "AMAZON PUDOS": 28,
          "AMAZON": 27
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 11,
          "BACKUP 3ZX": 4
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 95,
        "CANCELADO PELO CLIENTE": 16,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PREMIER MG": 4,
        "MOBLY": 2,
        "PETLOVE RS": 6,
        "VEDACIT": 4,
        "AMAZON LM": 24,
        "AMAZON PUDOS": 28,
        "AMAZON": 39,
        "BACKUP 3ZX": 4
      },
      "aderOrigem": 80,
      "noShow": 1,
      "cancel": 16,
      "finalizadas": 95,
      "total": 112,
      "prod_sum": 111.6052,
      "prod_n": 112,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 7
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 20,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 19,
          "prod_sum": 0.8946999999999999,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 194,
          "prod_sum": 5.8962,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1732,
          "prod_sum": 23.8143,
          "total": 24
        },
        "AMAZON PUDOS": {
          "paradas": 129,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON": {
          "paradas": 211,
          "prod_sum": 27,
          "total": 27
        }
      }
    },
    "2026-03-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 27,
          "PREMIER SP": 1,
          "AMAZON": 26,
          "VEDACIT": 6,
          "MOBLY": 1,
          "AMAZON LM": 25,
          "PETLOVE RS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 92,
        "CANCELADO PELO CLIENTE": 5
      },
      "tot_cliente": {
        "AMAZON PUDOS": 27,
        "PREMIER SP": 1,
        "AMAZON": 31,
        "VEDACIT": 6,
        "MOBLY": 1,
        "AMAZON LM": 25,
        "PETLOVE RS": 6
      },
      "aderOrigem": 79,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 92,
      "total": 97,
      "prod_sum": 96.5429,
      "prod_n": 97,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 5
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 125,
          "prod_sum": 27,
          "total": 27
        },
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON": {
          "paradas": 212,
          "prod_sum": 26,
          "total": 26
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 6,
          "total": 6
        },
        "MOBLY": {
          "paradas": 16,
          "prod_sum": 0.75,
          "total": 1
        },
        "AMAZON LM": {
          "paradas": 1528,
          "prod_sum": 24.8675,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 166,
          "prod_sum": 5.9254,
          "total": 6
        }
      }
    },
    "2026-03-05": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 28,
          "VEDACIT": 4,
          "MOBLY": 4,
          "AMAZON LM": 27,
          "AMAZON": 19,
          "PREMIER MG": 3,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 12
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 92,
        "CANCELADO PELO CLIENTE": 12
      },
      "tot_cliente": {
        "AMAZON PUDOS": 28,
        "VEDACIT": 4,
        "MOBLY": 4,
        "AMAZON LM": 27,
        "AMAZON": 31,
        "PREMIER MG": 3,
        "PETLOVE RS": 7
      },
      "aderOrigem": 78,
      "noShow": 0,
      "cancel": 12,
      "finalizadas": 92,
      "total": 104,
      "prod_sum": 103.1804,
      "prod_n": 104,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 126,
          "prod_sum": 28,
          "total": 28
        },
        "VEDACIT": {
          "paradas": 20,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 70,
          "prod_sum": 3.5393999999999997,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 2943,
          "prod_sum": 26.813899999999997,
          "total": 27
        },
        "AMAZON": {
          "paradas": 172,
          "prod_sum": 19,
          "total": 19
        },
        "PREMIER MG": {
          "paradas": 10,
          "prod_sum": 3,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 256,
          "prod_sum": 6.8271,
          "total": 7
        }
      }
    },
    "2026-03-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 28,
          "VEDACIT": 4,
          "AMAZON LM": 27,
          "AMAZON": 15,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 13
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 81,
        "CANCELADO PELO CLIENTE": 15
      },
      "tot_cliente": {
        "AMAZON PUDOS": 28,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM": 27,
        "AMAZON": 28,
        "PETLOVE RS": 7
      },
      "aderOrigem": 65,
      "noShow": 0,
      "cancel": 15,
      "finalizadas": 81,
      "total": 96,
      "prod_sum": 95.4601,
      "prod_n": 96,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 7
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 125,
          "prod_sum": 28,
          "total": 28
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1969,
          "prod_sum": 26.516700000000004,
          "total": 27
        },
        "AMAZON": {
          "paradas": 151,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 264,
          "prod_sum": 6.9434,
          "total": 7
        }
      }
    },
    "2026-03-07": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM": 22,
          "PETLOVE RS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 27
      },
      "tot_cliente": {
        "AMAZON LM": 22,
        "PETLOVE RS": 5
      },
      "aderOrigem": 27,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 27,
      "total": 27,
      "prod_sum": 26.7145,
      "prod_n": 27,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON LM": {
          "paradas": 2168,
          "prod_sum": 21.781,
          "total": 22
        },
        "PETLOVE RS": {
          "paradas": 236,
          "prod_sum": 4.9335,
          "total": 5
        }
      }
    },
    "2026-03-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 35,
          "VEDACIT": 4,
          "MOBLY": 4,
          "AMAZON LM": 28,
          "AMAZON": 47,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 127,
        "CANCELADO PELO CLIENTE": 7
      },
      "tot_cliente": {
        "AMAZON PUDOS": 35,
        "VEDACIT": 4,
        "MOBLY": 4,
        "AMAZON LM": 28,
        "AMAZON": 54,
        "PETLOVE RS": 9
      },
      "aderOrigem": 110,
      "noShow": 0,
      "cancel": 7,
      "finalizadas": 127,
      "total": 134,
      "prod_sum": 132.4886,
      "prod_n": 134,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 122,
          "prod_sum": 35,
          "total": 35
        },
        "VEDACIT": {
          "paradas": 33,
          "prod_sum": 3.2917,
          "total": 4
        },
        "MOBLY": {
          "paradas": 77,
          "prod_sum": 3.5862,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 2025,
          "prod_sum": 27.814500000000002,
          "total": 28
        },
        "AMAZON": {
          "paradas": 295,
          "prod_sum": 47,
          "total": 47
        },
        "PETLOVE RS": {
          "paradas": 374,
          "prod_sum": 8.7962,
          "total": 9
        }
      }
    },
    "2026-03-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 28,
          "VEDACIT": 3,
          "MOBLY": 1,
          "PREMIER MG": 3,
          "AMAZON": 28,
          "AMAZON LM": 25,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 11
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 96,
        "CANCELADO PELO CLIENTE": 12
      },
      "tot_cliente": {
        "AMAZON PUDOS": 28,
        "VEDACIT": 3,
        "MOBLY": 2,
        "PREMIER MG": 3,
        "AMAZON": 39,
        "AMAZON LM": 25,
        "PETLOVE RS": 8
      },
      "aderOrigem": 80,
      "noShow": 0,
      "cancel": 12,
      "finalizadas": 96,
      "total": 108,
      "prod_sum": 106.9967,
      "prod_n": 108,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 28,
          "total": 28
        },
        "VEDACIT": {
          "paradas": 19,
          "prod_sum": 2.6667,
          "total": 3
        },
        "MOBLY": {
          "paradas": 23,
          "prod_sum": 0.8695999999999999,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 217,
          "prod_sum": 27.8571,
          "total": 28
        },
        "AMAZON LM": {
          "paradas": 2098,
          "prod_sum": 24.6753,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 340,
          "prod_sum": 7.928,
          "total": 8
        }
      }
    },
    "2026-03-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 26,
          "PREMIER MG": 2,
          "VEDACIT": 4,
          "AMAZON LM": 27,
          "AMAZON": 28,
          "PETLOVE RS": 7,
          "MOBLY": 1
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 95,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON PUDOS": 26,
        "PREMIER MG": 2,
        "VEDACIT": 4,
        "AMAZON LM": 27,
        "AMAZON": 28,
        "PETLOVE RS": 7,
        "MOBLY": 2
      },
      "aderOrigem": 79,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 95,
      "total": 96,
      "prod_sum": 95.25,
      "prod_n": 96,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "PREMIER MG": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 121,
          "prod_sum": 26,
          "total": 26
        },
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 2,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 30,
          "prod_sum": 3.7143,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1263,
          "prod_sum": 26.805099999999996,
          "total": 27
        },
        "AMAZON": {
          "paradas": 228,
          "prod_sum": 28,
          "total": 28
        },
        "PETLOVE RS": {
          "paradas": 275,
          "prod_sum": 6.8482,
          "total": 7
        },
        "MOBLY": {
          "paradas": 17,
          "prod_sum": 0.8824,
          "total": 1
        }
      }
    },
    "2026-03-12": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 19,
          "VEDACIT": 4,
          "MOBLY": 4,
          "PETLOVE RS": 6,
          "PREMIER MG": 3,
          "AMAZON LM": 28,
          "AMAZON": 27
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 91
      },
      "tot_cliente": {
        "AMAZON PUDOS": 19,
        "VEDACIT": 4,
        "MOBLY": 4,
        "PETLOVE RS": 6,
        "PREMIER MG": 3,
        "AMAZON LM": 28,
        "AMAZON": 27
      },
      "aderOrigem": 73,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 91,
      "total": 91,
      "prod_sum": 89.3825,
      "prod_n": 91,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "MOBLY": {
          "Trânsito": 3
        },
        "PREMIER MG": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 73,
          "prod_sum": 19,
          "total": 19
        },
        "VEDACIT": {
          "paradas": 25,
          "prod_sum": 3.8333,
          "total": 4
        },
        "MOBLY": {
          "paradas": 73,
          "prod_sum": 3.1654,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 241,
          "prod_sum": 5.9493,
          "total": 6
        },
        "PREMIER MG": {
          "paradas": 14,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM": {
          "paradas": 3317,
          "prod_sum": 27.4345,
          "total": 28
        },
        "AMAZON": {
          "paradas": 296,
          "prod_sum": 27,
          "total": 27
        }
      }
    },
    "2026-03-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 17,
          "VEDACIT": 4,
          "MOBLY": 1,
          "AMAZON LM": 24,
          "AMAZON": 25,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 80,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "AMAZON PUDOS": 17,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM": 24,
        "AMAZON": 26,
        "PETLOVE RS": 9
      },
      "aderOrigem": 65,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 80,
      "total": 82,
      "prod_sum": 81.3622,
      "prod_n": 82,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 72,
          "prod_sum": 17,
          "total": 17
        },
        "VEDACIT": {
          "paradas": 33,
          "prod_sum": 3.875,
          "total": 4
        },
        "MOBLY": {
          "paradas": 17,
          "prod_sum": 0.9412,
          "total": 1
        },
        "AMAZON LM": {
          "paradas": 2874,
          "prod_sum": 23.545999999999996,
          "total": 24
        },
        "AMAZON": {
          "paradas": 212,
          "prod_sum": 25,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 391,
          "prod_sum": 9,
          "total": 9
        }
      }
    },
    "2026-03-14": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM": 19,
          "PETLOVE RS": 6
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 25
      },
      "tot_cliente": {
        "AMAZON LM": 19,
        "PETLOVE RS": 6
      },
      "aderOrigem": 19,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 25,
      "total": 25,
      "prod_sum": 24.4325,
      "prod_n": 25,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM": {
          "paradas": 1479,
          "prod_sum": 18.453799999999994,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 235,
          "prod_sum": 5.9787,
          "total": 6
        }
      }
    },
    "2026-03-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "VEDACIT": 4,
          "AMAZON LM": 26,
          "AMAZON PUDOS": 21,
          "AMAZON": 55,
          "PETLOVE RS": 6,
          "MOBLY": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 117
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "VEDACIT": 4,
        "AMAZON LM": 26,
        "AMAZON PUDOS": 21,
        "AMAZON": 55,
        "PETLOVE RS": 6,
        "MOBLY": 4
      },
      "aderOrigem": 95,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 117,
      "total": 117,
      "prod_sum": 115.6492,
      "prod_n": 117,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON LM": {
          "Trânsito": 5
        },
        "AMAZON": {
          "Trânsito": 9
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "MOBLY": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 5,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 3.625,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 2248,
          "prod_sum": 25.4299,
          "total": 26
        },
        "AMAZON PUDOS": {
          "paradas": 76,
          "prod_sum": 21,
          "total": 21
        },
        "AMAZON": {
          "paradas": 235,
          "prod_sum": 55,
          "total": 55
        },
        "PETLOVE RS": {
          "paradas": 270,
          "prod_sum": 5.9623,
          "total": 6
        },
        "MOBLY": {
          "paradas": 76,
          "prod_sum": 3.6319999999999997,
          "total": 4
        }
      }
    },
    "2026-03-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 7,
          "VEDACIT": 4,
          "PREMIER MG": 3,
          "PREMIER SP": 1,
          "AMAZON PUDOS": 34,
          "AMAZON LM": 26,
          "AMAZON": 29
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 104,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "PETLOVE RS": 7,
        "VEDACIT": 4,
        "PREMIER MG": 3,
        "PREMIER SP": 1,
        "MOBLY": 2,
        "AMAZON PUDOS": 34,
        "AMAZON LM": 26,
        "AMAZON": 36
      },
      "aderOrigem": 95,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 104,
      "total": 113,
      "prod_sum": 112.4253,
      "prod_n": 113,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 276,
          "prod_sum": 6.9129,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 4,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 14,
          "prod_sum": 3,
          "total": 3
        },
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 100,
          "prod_sum": 34,
          "total": 34
        },
        "AMAZON LM": {
          "paradas": 1950,
          "prod_sum": 25.5124,
          "total": 26
        },
        "AMAZON": {
          "paradas": 174,
          "prod_sum": 29,
          "total": 29
        }
      }
    },
    "2026-03-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 33,
          "AMAZON LM": 32,
          "PREMIER SP": 1,
          "VEDACIT": 3,
          "AMAZON": 27,
          "PREMIER MG": 2,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 108,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "AMAZON PUDOS": 33,
        "AMAZON LM": 32,
        "PREMIER SP": 1,
        "VEDACIT": 3,
        "AMAZON": 29,
        "PREMIER MG": 2,
        "PETLOVE RS": 10
      },
      "aderOrigem": 85,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 108,
      "total": 110,
      "prod_sum": 109.1833,
      "prod_n": 110,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 7
        },
        "AMAZON LM": {
          "Trânsito": 8
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 109,
          "prod_sum": 33,
          "total": 33
        },
        "AMAZON LM": {
          "paradas": 2843,
          "prod_sum": 31.339899999999997,
          "total": 32
        },
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 170,
          "prod_sum": 27,
          "total": 27
        },
        "PREMIER MG": {
          "paradas": 7,
          "prod_sum": 2,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 352,
          "prod_sum": 9.843399999999999,
          "total": 10
        }
      }
    },
    "2026-03-19": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 33,
          "PREMIER MG": 4,
          "VEDACIT": 4,
          "AMAZON LM": 22,
          "AMAZON": 27,
          "PETLOVE RS": 6,
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 98
      },
      "tot_cliente": {
        "AMAZON PUDOS": 33,
        "PREMIER MG": 4,
        "VEDACIT": 4,
        "AMAZON LM": 22,
        "AMAZON": 27,
        "PETLOVE RS": 6,
        "MOBLY": 2
      },
      "aderOrigem": 83,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 98,
      "total": 98,
      "prod_sum": 97.3586,
      "prod_n": 98,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 6
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON LM": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 109,
          "prod_sum": 33,
          "total": 33
        },
        "PREMIER MG": {
          "paradas": 16,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 3.7321,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 2125,
          "prod_sum": 21.797600000000003,
          "total": 22
        },
        "AMAZON": {
          "paradas": 164,
          "prod_sum": 27,
          "total": 27
        },
        "PETLOVE RS": {
          "paradas": 185,
          "prod_sum": 5.8744,
          "total": 6
        },
        "MOBLY": {
          "paradas": 37,
          "prod_sum": 1.9545,
          "total": 2
        }
      }
    },
    "2026-03-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 36,
          "AMAZON": 25,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON LM": 21,
          "PETLOVE RS": 5
        },
        "CANCELADO PELO CLIENTE": {
          "VEDACIT": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 93,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON PUDOS": 36,
        "AMAZON": 25,
        "VEDACIT": 5,
        "MOBLY": 2,
        "AMAZON LM": 21,
        "PETLOVE RS": 5
      },
      "aderOrigem": 77,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 93,
      "total": 94,
      "prod_sum": 92.2016,
      "prod_n": 94,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 6
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 36,
          "total": 36
        },
        "AMAZON": {
          "paradas": 150,
          "prod_sum": 25,
          "total": 25
        },
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3.5892,
          "total": 4
        },
        "MOBLY": {
          "paradas": 31,
          "prod_sum": 1.9375,
          "total": 2
        },
        "AMAZON LM": {
          "paradas": 2208,
          "prod_sum": 19.901000000000003,
          "total": 21
        },
        "PETLOVE RS": {
          "paradas": 204,
          "prod_sum": 4.7739,
          "total": 5
        }
      }
    },
    "2026-03-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM": 14,
          "PETLOVE RS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 19
      },
      "tot_cliente": {
        "AMAZON LM": 14,
        "PETLOVE RS": 5
      },
      "aderOrigem": 17,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 19,
      "total": 19,
      "prod_sum": 18.3955,
      "prod_n": 19,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM": {
          "paradas": 1264,
          "prod_sum": 13.4843,
          "total": 14
        },
        "PETLOVE RS": {
          "paradas": 209,
          "prod_sum": 4.9112,
          "total": 5
        }
      }
    },
    "2026-03-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 39,
          "VEDACIT": 5,
          "MOBLY": 4,
          "PREMIER SP": 1,
          "AMAZON LM": 20,
          "AMAZON": 54,
          "PETLOVE RS": 6
        },
        "NO SHOW": {
          "AMAZON": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 129,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON PUDOS": 39,
        "VEDACIT": 5,
        "MOBLY": 4,
        "PREMIER SP": 1,
        "AMAZON LM": 20,
        "AMAZON": 57,
        "PETLOVE RS": 6
      },
      "aderOrigem": 101,
      "noShow": 2,
      "cancel": 1,
      "finalizadas": 129,
      "total": 132,
      "prod_sum": 129.9943,
      "prod_n": 132,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 13
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "MOBLY": {
          "Trânsito": 4
        },
        "PREMIER SP": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 5
        },
        "AMAZON": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 118,
          "prod_sum": 39,
          "total": 39
        },
        "VEDACIT": {
          "paradas": 34,
          "prod_sum": 3.5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 64,
          "prod_sum": 3.7822,
          "total": 4
        },
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM": {
          "paradas": 1637,
          "prod_sum": 19.8644,
          "total": 20
        },
        "AMAZON": {
          "paradas": 281,
          "prod_sum": 53.9167,
          "total": 54
        },
        "PETLOVE RS": {
          "paradas": 229,
          "prod_sum": 5.931,
          "total": 6
        }
      }
    },
    "2026-03-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "AMAZON PUDOS": 37,
          "VEDACIT": 6,
          "PREMIER SP": 1,
          "AMAZON": 36,
          "AMAZON LM": 5,
          "PETLOVE RS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 95,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "AMAZON PUDOS": 37,
        "VEDACIT": 6,
        "MOBLY": 2,
        "PREMIER SP": 1,
        "AMAZON": 38,
        "AMAZON LM": 5,
        "PETLOVE RS": 6
      },
      "aderOrigem": 83,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 95,
      "total": 99,
      "prod_sum": 97.6641,
      "prod_n": 99,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 14,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 124,
          "prod_sum": 37,
          "total": 37
        },
        "VEDACIT": {
          "paradas": 35,
          "prod_sum": 5.5893,
          "total": 6
        },
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 0.6667000000000001,
          "total": 1
        },
        "AMAZON": {
          "paradas": 184,
          "prod_sum": 35.5,
          "total": 36
        },
        "AMAZON LM": {
          "paradas": 771,
          "prod_sum": 4.9948999999999995,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 238,
          "prod_sum": 5.9132,
          "total": 6
        }
      }
    },
    "2026-03-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 35,
          "VEDACIT": 3,
          "PREMIER SP": 1,
          "PREMIER MG": 4,
          "AMAZON LM": 25,
          "AMAZON": 27,
          "PETLOVE RS": 5
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON LM": 1,
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 100,
        "CANCELADO PELO CLIENTE": 5
      },
      "tot_cliente": {
        "AMAZON PUDOS": 35,
        "VEDACIT": 3,
        "MOBLY": 2,
        "PREMIER SP": 1,
        "PREMIER MG": 4,
        "AMAZON LM": 26,
        "AMAZON": 29,
        "PETLOVE RS": 5
      },
      "aderOrigem": 85,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 100,
      "total": 105,
      "prod_sum": 104.4503,
      "prod_n": 105,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 35,
          "total": 35
        },
        "VEDACIT": {
          "paradas": 19,
          "prod_sum": 3,
          "total": 3
        },
        "PREMIER SP": {
          "paradas": 2,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM": {
          "paradas": 1829,
          "prod_sum": 24.4711,
          "total": 25
        },
        "AMAZON": {
          "paradas": 172,
          "prod_sum": 27,
          "total": 27
        },
        "PETLOVE RS": {
          "paradas": 231,
          "prod_sum": 4.9792000000000005,
          "total": 5
        }
      }
    },
    "2026-03-26": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON PUDOS": 34,
          "MOBLY": 4,
          "PREMIER MG": 3,
          "AMAZON LM": 19,
          "AMAZON": 25,
          "PETLOVE RS": 5
        },
        "NO SHOW": {
          "AMAZON": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 94,
        "NO SHOW": 1,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "AMAZON PUDOS": 34,
        "MOBLY": 4,
        "PREMIER MG": 3,
        "AMAZON LM": 19,
        "AMAZON": 27,
        "PETLOVE RS": 5
      },
      "aderOrigem": 81,
      "noShow": 1,
      "cancel": 1,
      "finalizadas": 94,
      "total": 96,
      "prod_sum": 92.4713,
      "prod_n": 96,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3.25,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 116,
          "prod_sum": 34,
          "total": 34
        },
        "MOBLY": {
          "paradas": 57,
          "prod_sum": 3.4109,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 19,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM": {
          "paradas": 1674,
          "prod_sum": 17.836000000000002,
          "total": 19
        },
        "AMAZON": {
          "paradas": 204,
          "prod_sum": 25,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 200,
          "prod_sum": 4.9744,
          "total": 5
        }
      }
    },
    "2026-03-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 34,
          "VEDACIT": 5,
          "MOBLY": 2,
          "AMAZON LM": 16,
          "AMAZON": 16,
          "PETLOVE RS": 5
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 11
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 78,
        "CANCELADO PELO CLIENTE": 11,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "AMAZON PUDOS": 34,
        "VEDACIT": 5,
        "MOBLY": 2,
        "AMAZON LM": 16,
        "AMAZON": 28,
        "PETLOVE RS": 5
      },
      "aderOrigem": 64,
      "noShow": 1,
      "cancel": 11,
      "finalizadas": 78,
      "total": 90,
      "prod_sum": 75.9653,
      "prod_n": 79,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 6
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "AMAZON LM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 34,
          "total": 34
        },
        "VEDACIT": {
          "paradas": 38,
          "prod_sum": 3.6429,
          "total": 5
        },
        "MOBLY": {
          "paradas": 22,
          "prod_sum": 1.7273,
          "total": 2
        },
        "AMAZON LM": {
          "paradas": 1262,
          "prod_sum": 15.730200000000002,
          "total": 16
        },
        "AMAZON": {
          "paradas": 128,
          "prod_sum": 16,
          "total": 16
        },
        "PETLOVE RS": {
          "paradas": 218,
          "prod_sum": 4.8649,
          "total": 5
        }
      }
    },
    "2026-03-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 5
      },
      "tot_cliente": {
        "PETLOVE RS": 5
      },
      "aderOrigem": 4,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 5,
      "total": 5,
      "prod_sum": 4.916,
      "prod_n": 5,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 212,
          "prod_sum": 4.916,
          "total": 5
        }
      }
    },
    "2026-03-30": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 42,
          "PREMIER SP": 1,
          "VEDACIT": 5,
          "MOBLY": 4,
          "AMAZON": 35,
          "PETLOVE RS": 6,
          "AMAZON LM": 6
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 99
      },
      "tot_cliente": {
        "AMAZON PUDOS": 42,
        "PREMIER SP": 1,
        "VEDACIT": 5,
        "MOBLY": 4,
        "AMAZON": 35,
        "PETLOVE RS": 6,
        "AMAZON LM": 6
      },
      "aderOrigem": 70,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 99,
      "total": 99,
      "prod_sum": 98.2043,
      "prod_n": 99,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 16
        },
        "VEDACIT": {
          "Trânsito": 4
        },
        "MOBLY": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON LM": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 116,
          "prod_sum": 42,
          "total": 42
        },
        "PREMIER SP": {
          "paradas": 4,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 46,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 73,
          "prod_sum": 3.7973999999999997,
          "total": 4
        },
        "AMAZON": {
          "paradas": 204,
          "prod_sum": 35,
          "total": 35
        },
        "PETLOVE RS": {
          "paradas": 228,
          "prod_sum": 5.4242,
          "total": 6
        },
        "AMAZON LM": {
          "paradas": 999,
          "prod_sum": 5.9826999999999995,
          "total": 6
        }
      }
    },
    "2026-03-31": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "PREMIER MG": 5,
          "AMAZON LM 8HRS": 11,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 5,
          "PETLOVE RS": 11,
          "AMAZON": 21,
          "AMAZON PUDOS": 43
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "MOBLY": 2
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 100,
        "CANCELADO PELO CLIENTE": 4,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "PREMIER MG": 5,
        "AMAZON LM 8HRS": 11,
        "AMAZON LM 10HRS": 3,
        "VEDACIT": 5,
        "PETLOVE RS": 11,
        "AMAZON": 24,
        "MOBLY": 2,
        "AMAZON PUDOS": 43
      },
      "aderOrigem": 82,
      "noShow": 1,
      "cancel": 4,
      "finalizadas": 100,
      "total": 105,
      "prod_sum": 101.5379,
      "prod_n": 105,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 6
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 1,
          "prod_sum": 0,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 18,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON LM 8HRS": {
          "paradas": 1096,
          "prod_sum": 10.840499999999999,
          "total": 11
        },
        "AMAZON LM 10HRS": {
          "paradas": 418,
          "prod_sum": 2.9955,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 21,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 508,
          "prod_sum": 10.7019,
          "total": 11
        },
        "AMAZON": {
          "paradas": 170,
          "prod_sum": 20,
          "total": 21
        },
        "AMAZON PUDOS": {
          "paradas": 120,
          "prod_sum": 43,
          "total": 43
        }
      }
    },
    "2026-04-01": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER SP": 1,
          "AMAZON LM 8HRS": 17,
          "AMAZON LM": 1,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "AMAZON PUDOS": 41,
          "AMAZON": 20,
          "PREMIER MG": 5,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 1
        },
        "NO SHOW": {
          "PETLOVE RS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 96,
        "CANCELADO PELO CLIENTE": 3,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER SP": 1,
        "AMAZON LM 8HRS": 17,
        "AMAZON LM": 1,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 3,
        "MOBLY": 2,
        "AMAZON PUDOS": 41,
        "AMAZON": 21,
        "PREMIER MG": 5,
        "PETLOVE RS": 8
      },
      "aderOrigem": 74,
      "noShow": 1,
      "cancel": 3,
      "finalizadas": 96,
      "total": 100,
      "prod_sum": 98.7735,
      "prod_n": 100,
      "drill_noShow": {
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 8
        },
        "AMAZON PUDOS": {
          "Trânsito": 7
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER SP": {
          "paradas": 3,
          "prod_sum": 0.6667000000000001,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 1080,
          "prod_sum": 16.546599999999998,
          "total": 17
        },
        "AMAZON LM": {
          "paradas": 25,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 6HRS": {
          "paradas": 74,
          "prod_sum": 0.8919,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 792,
          "prod_sum": 2.996,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 123,
          "prod_sum": 41,
          "total": 41
        },
        "AMAZON": {
          "paradas": 163,
          "prod_sum": 19.6923,
          "total": 20
        },
        "PREMIER MG": {
          "paradas": 45,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 289,
          "prod_sum": 6.98,
          "total": 7
        }
      }
    },
    "2026-04-02": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 17,
          "AMAZON LM 6HRS": 2,
          "AMAZON LM 10HRS": 3,
          "AMAZON PUDOS": 37,
          "VEDACIT": 1,
          "MOBLY": 4,
          "PREMIER SP": 1,
          "AMAZON": 10,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 84,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 17,
        "AMAZON LM 6HRS": 2,
        "AMAZON LM 10HRS": 3,
        "AMAZON PUDOS": 37,
        "VEDACIT": 1,
        "MOBLY": 4,
        "PREMIER SP": 1,
        "AMAZON": 19,
        "PETLOVE RS": 9
      },
      "aderOrigem": 66,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 84,
      "total": 93,
      "prod_sum": 91.9881,
      "prod_n": 93,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 6
        },
        "AMAZON PUDOS": {
          "Trânsito": 8
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 1191,
          "prod_sum": 16.4564,
          "total": 17
        },
        "AMAZON LM 6HRS": {
          "paradas": 104,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 10HRS": {
          "paradas": 577,
          "prod_sum": 2.9563,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 37,
          "total": 37
        },
        "VEDACIT": {
          "paradas": 3,
          "prod_sum": 1,
          "total": 1
        },
        "MOBLY": {
          "paradas": 60,
          "prod_sum": 3.6982999999999997,
          "total": 4
        },
        "PREMIER SP": {
          "paradas": 4,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON": {
          "paradas": 130,
          "prod_sum": 10,
          "total": 10
        },
        "PETLOVE RS": {
          "paradas": 389,
          "prod_sum": 8.8771,
          "total": 9
        }
      }
    },
    "2026-04-03": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 15,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "PETLOVE RS": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 26
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 15,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 3,
        "PETLOVE RS": 7
      },
      "aderOrigem": 15,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 26,
      "total": 26,
      "prod_sum": 24.5828,
      "prod_n": 26,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 9
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 1226,
          "prod_sum": 13.861499999999998,
          "total": 15
        },
        "AMAZON LM 6HRS": {
          "paradas": 17,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 750,
          "prod_sum": 2.8773,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 302,
          "prod_sum": 6.844,
          "total": 7
        }
      }
    },
    "2026-04-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 5,
          "AMAZON LM 8HRS": 5,
          "AMAZON LM 10HRS": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 12
      },
      "tot_cliente": {
        "PETLOVE RS": 5,
        "AMAZON LM 8HRS": 5,
        "AMAZON LM 10HRS": 2
      },
      "aderOrigem": 8,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 12,
      "total": 12,
      "prod_sum": 11.8002,
      "prod_n": 12,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 183,
          "prod_sum": 4.9032,
          "total": 5
        },
        "AMAZON LM 8HRS": {
          "paradas": 392,
          "prod_sum": 4.9157,
          "total": 5
        },
        "AMAZON LM 10HRS": {
          "paradas": 330,
          "prod_sum": 1.9813,
          "total": 2
        }
      }
    },
    "2026-04-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 53,
          "PETLOVE RS": 5,
          "AMAZON LM 8HRS": 14,
          "AMAZON LM 4 HRS": 2,
          "AMAZON LM 10HRS": 5,
          "AMAZON PUDOS": 32
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 111,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "AMAZON": 54,
        "PETLOVE RS": 5,
        "AMAZON LM 8HRS": 14,
        "AMAZON LM 4 HRS": 2,
        "AMAZON LM 10HRS": 5,
        "AMAZON PUDOS": 32,
        "MOBLY": 2
      },
      "aderOrigem": 80,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 111,
      "total": 114,
      "prod_sum": 110.2211,
      "prod_n": 111,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 10
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 10
        },
        "AMAZON LM 4 HRS": {
          "Trânsito": 1
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 9
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 234,
          "prod_sum": 53,
          "total": 53
        },
        "PETLOVE RS": {
          "paradas": 222,
          "prod_sum": 4.9811,
          "total": 5
        },
        "AMAZON LM 8HRS": {
          "paradas": 1288,
          "prod_sum": 13.536,
          "total": 14
        },
        "AMAZON LM 4 HRS": {
          "paradas": 47,
          "prod_sum": 1.7235,
          "total": 2
        },
        "AMAZON LM 10HRS": {
          "paradas": 940,
          "prod_sum": 4.9805,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 93,
          "prod_sum": 32,
          "total": 32
        }
      }
    },
    "2026-04-07": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 25,
          "AMAZON LM 8HRS": 8,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 4,
          "AMAZON PUDOS": 30,
          "PREMIER MG": 5,
          "PETLOVE RS": 13
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 89
      },
      "tot_cliente": {
        "AMAZON": 25,
        "AMAZON LM 8HRS": 8,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 4,
        "AMAZON PUDOS": 30,
        "PREMIER MG": 5,
        "PETLOVE RS": 13
      },
      "aderOrigem": 71,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 89,
      "total": 89,
      "prod_sum": 88.4556,
      "prod_n": 89,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 8
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 184,
          "prod_sum": 25,
          "total": 25
        },
        "AMAZON LM 8HRS": {
          "paradas": 547,
          "prod_sum": 7.9071,
          "total": 8
        },
        "AMAZON LM 10HRS": {
          "paradas": 524,
          "prod_sum": 3.9827999999999997,
          "total": 4
        },
        "MOBLY": {
          "paradas": 59,
          "prod_sum": 3.7117000000000004,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 118,
          "prod_sum": 30,
          "total": 30
        },
        "PREMIER MG": {
          "paradas": 10,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 475,
          "prod_sum": 12.854,
          "total": 13
        }
      }
    },
    "2026-04-08": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 21,
          "PREMIER MG": 5,
          "AMAZON LM 8HRS": 15,
          "AMAZON LM 4 HRS": 1,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 4,
          "PETLOVE RS": 9,
          "AMAZON PUDOS": 31
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 4,
          "AMAZON LM 6HRS": 2,
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 87,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "AMAZON": 25,
        "PREMIER MG": 5,
        "AMAZON LM 8HRS": 15,
        "AMAZON LM 6HRS": 3,
        "AMAZON LM 4 HRS": 1,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 2,
        "PETLOVE RS": 9,
        "AMAZON PUDOS": 31
      },
      "aderOrigem": 57,
      "noShow": 0,
      "cancel": 8,
      "finalizadas": 87,
      "total": 95,
      "prod_sum": 90.3229,
      "prod_n": 91,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 9
        },
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 12
        },
        "AMAZON LM 4 HRS": {
          "Trânsito": 1
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 163,
          "prod_sum": 21,
          "total": 21
        },
        "PREMIER MG": {
          "paradas": 23,
          "prod_sum": 4.8332999999999995,
          "total": 5
        },
        "AMAZON LM 8HRS": {
          "paradas": 1224,
          "prod_sum": 14.937999999999999,
          "total": 15
        },
        "AMAZON LM 4 HRS": {
          "paradas": 30,
          "prod_sum": 0.7333,
          "total": 1
        },
        "AMAZON LM 6HRS": {
          "paradas": 23,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 795,
          "prod_sum": 3.9435,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 371,
          "prod_sum": 8.8748,
          "total": 9
        },
        "AMAZON PUDOS": {
          "paradas": 113,
          "prod_sum": 31,
          "total": 31
        }
      }
    },
    "2026-04-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 12,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 3,
          "AMAZON PUDOS": 30,
          "AMAZON": 25,
          "PREMIER MG": 3,
          "PETLOVE RS": 7
        },
        "NO SHOW": {
          "AMAZON LM 8HRS": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 84,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 14,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 3,
        "AMAZON PUDOS": 30,
        "AMAZON": 26,
        "PREMIER MG": 3,
        "PETLOVE RS": 7
      },
      "aderOrigem": 52,
      "noShow": 2,
      "cancel": 1,
      "finalizadas": 84,
      "total": 87,
      "prod_sum": 83.0859,
      "prod_n": 87,
      "drill_noShow": {
        "AMAZON LM 8HRS": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 11
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "AMAZON": {
          "Trânsito": 12
        },
        "PREMIER MG": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 1195,
          "prod_sum": 11.569899999999999,
          "total": 12
        },
        "AMAZON LM 10HRS": {
          "paradas": 1120,
          "prod_sum": 3.9826,
          "total": 4
        },
        "MOBLY": {
          "paradas": 50,
          "prod_sum": 2.5538,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 30,
          "total": 30
        },
        "AMAZON": {
          "paradas": 234,
          "prod_sum": 25,
          "total": 25
        },
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 3,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 304,
          "prod_sum": 6.9796,
          "total": 7
        }
      }
    },
    "2026-04-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 29,
          "MOBLY": 1,
          "VEDACIT": 1,
          "AMAZON LM 8HRS": 12,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 4,
          "AMAZON": 19,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON LM 8HRS": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 75,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "AMAZON PUDOS": 29,
        "MOBLY": 2,
        "VEDACIT": 1,
        "AMAZON LM 8HRS": 14,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 4,
        "AMAZON": 19,
        "PETLOVE RS": 8
      },
      "aderOrigem": 59,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 75,
      "total": 78,
      "prod_sum": 74.2007,
      "prod_n": 78,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 11
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 29,
          "total": 29
        },
        "MOBLY": {
          "paradas": 20,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 1070,
          "prod_sum": 11.2408,
          "total": 12
        },
        "AMAZON LM 6HRS": {
          "paradas": 21,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 641,
          "prod_sum": 3.9599,
          "total": 4
        },
        "AMAZON": {
          "paradas": 195,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 336,
          "prod_sum": 8,
          "total": 8
        }
      }
    },
    "2026-04-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 5
      },
      "tot_cliente": {
        "PETLOVE RS": 5
      },
      "aderOrigem": 4,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 5,
      "total": 5,
      "prod_sum": 4.8807,
      "prod_n": 5,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 214,
          "prod_sum": 4.8807,
          "total": 5
        }
      }
    },
    "2026-04-14": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON LM 8HRS": 7,
          "AMAZON LM 10HRS": 4,
          "PREMIER MG": 4,
          "AMAZON": 19,
          "PETLOVE RS": 13,
          "AMAZON PUDOS": 32
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 6HRS": 3,
          "AMAZON": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 85,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 7,
        "AMAZON LM 6HRS": 3,
        "AMAZON LM 10HRS": 4,
        "PREMIER MG": 4,
        "AMAZON": 24,
        "PETLOVE RS": 13,
        "AMAZON PUDOS": 32
      },
      "aderOrigem": 63,
      "noShow": 0,
      "cancel": 8,
      "finalizadas": 85,
      "total": 93,
      "prod_sum": 84.3077,
      "prod_n": 85,
      "drill_noShow": {},
      "drill_atraso": {
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 3
        },
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 8
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 55,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 30,
          "prod_sum": 1.7778,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 486,
          "prod_sum": 6.749499999999999,
          "total": 7
        },
        "AMAZON LM 10HRS": {
          "paradas": 638,
          "prod_sum": 3.9502,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 16,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 130,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 575,
          "prod_sum": 12.8302,
          "total": 13
        },
        "AMAZON PUDOS": {
          "paradas": 114,
          "prod_sum": 32,
          "total": 32
        }
      }
    },
    "2026-04-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 1,
          "AMAZON LM 6HRS": 3,
          "AMAZON LM 8HRS": 3,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 4,
          "AMAZON": 50,
          "PETLOVE RS": 5,
          "AMAZON PUDOS": 37
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 107,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "VEDACIT": 1,
        "AMAZON LM 6HRS": 3,
        "AMAZON LM 8HRS": 3,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 4,
        "AMAZON": 53,
        "PETLOVE RS": 5,
        "AMAZON PUDOS": 37
      },
      "aderOrigem": 81,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 107,
      "total": 110,
      "prod_sum": 106.6208,
      "prod_n": 107,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 17
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 6HRS": {
          "paradas": 86,
          "prod_sum": 2.9706,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 112,
          "prod_sum": 2.973,
          "total": 3
        },
        "AMAZON LM 10HRS": {
          "paradas": 522,
          "prod_sum": 3.9508,
          "total": 4
        },
        "MOBLY": {
          "paradas": 57,
          "prod_sum": 3.8453,
          "total": 4
        },
        "AMAZON": {
          "paradas": 288,
          "prod_sum": 50,
          "total": 50
        },
        "PETLOVE RS": {
          "paradas": 165,
          "prod_sum": 4.8811,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 130,
          "prod_sum": 37,
          "total": 37
        }
      }
    },
    "2026-04-15": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 1,
          "PREMIER MG": 2,
          "AMAZON": 21,
          "AMAZON PUDOS": 31,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 72,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 2,
        "PREMIER MG": 2,
        "AMAZON": 24,
        "AMAZON PUDOS": 31,
        "PETLOVE RS": 7
      },
      "aderOrigem": 53,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 72,
      "total": 76,
      "prod_sum": 71.6523,
      "prod_n": 72,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "MOBLY": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 7
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 7
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 662,
          "prod_sum": 5.9238,
          "total": 6
        },
        "AMAZON LM 10HRS": {
          "paradas": 784,
          "prod_sum": 3.9725000000000006,
          "total": 4
        },
        "MOBLY": {
          "paradas": 21,
          "prod_sum": 0.8571,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 9,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON": {
          "paradas": 164,
          "prod_sum": 21,
          "total": 21
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 31,
          "total": 31
        },
        "PETLOVE RS": {
          "paradas": 298,
          "prod_sum": 6.898899999999999,
          "total": 7
        }
      }
    },
    "2026-04-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "MOBLY": 4,
          "AMAZON": 19,
          "PREMIER MG": 3,
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 28,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 77,
        "CANCELADO PELO CLIENTE": 5
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 4,
        "AMAZON": 24,
        "PREMIER MG": 3,
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 28,
        "PETLOVE RS": 9
      },
      "aderOrigem": 56,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 77,
      "total": 82,
      "prod_sum": 76.0152,
      "prod_n": 77,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 8
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 6
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 35,
          "prod_sum": 3.6667,
          "total": 4
        },
        "MOBLY": {
          "paradas": 61,
          "prod_sum": 3.6342999999999996,
          "total": 4
        },
        "AMAZON": {
          "paradas": 162,
          "prod_sum": 19,
          "total": 19
        },
        "PREMIER MG": {
          "paradas": 17,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 418,
          "prod_sum": 5.8573,
          "total": 6
        },
        "AMAZON LM 10HRS": {
          "paradas": 583,
          "prod_sum": 3.9779,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 108,
          "prod_sum": 28,
          "total": 28
        },
        "PETLOVE RS": {
          "paradas": 409,
          "prod_sum": 8.879,
          "total": 9
        }
      }
    },
    "2026-04-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 2,
          "AMAZON LM 8HRS": 7,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "AMAZON PUDOS": 28,
          "AMAZON": 18,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 68,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "VEDACIT": 2,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 7,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 3,
        "AMAZON PUDOS": 28,
        "AMAZON": 20,
        "PETLOVE RS": 9
      },
      "aderOrigem": 44,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 68,
      "total": 72,
      "prod_sum": 67.8715,
      "prod_n": 68,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 8
        },
        "AMAZON": {
          "Trânsito": 10
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 14,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 390,
          "prod_sum": 6.9350000000000005,
          "total": 7
        },
        "AMAZON LM 6HRS": {
          "paradas": 70,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 538,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 114,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON": {
          "paradas": 188,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 395,
          "prod_sum": 8.936499999999999,
          "total": 9
        }
      }
    },
    "2026-04-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 2,
          "PETLOVE RS": 8
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 17
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 4,
        "AMAZON LM 10HRS": 3,
        "VEDACIT": 2,
        "PETLOVE RS": 8
      },
      "aderOrigem": 13,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 17,
      "total": 17,
      "prod_sum": 16.4452,
      "prod_n": 17,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 389,
          "prod_sum": 3.6388000000000003,
          "total": 4
        },
        "AMAZON LM 10HRS": {
          "paradas": 486,
          "prod_sum": 2.9864,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 2,
          "prod_sum": 2,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 369,
          "prod_sum": 7.82,
          "total": 8
        }
      }
    },
    "2026-04-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 7,
          "AMAZON": 25,
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 32,
          "MOBLY": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "PETLOVE RS": 7,
        "AMAZON": 26,
        "AMAZON LM 8HRS": 4,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 32,
        "MOBLY": 2
      },
      "aderOrigem": 52,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 74,
      "total": 75,
      "prod_sum": 72.7334,
      "prod_n": 74,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 14
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 3
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "MOBLY": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 268,
          "prod_sum": 6.9582999999999995,
          "total": 7
        },
        "AMAZON": {
          "paradas": 144,
          "prod_sum": 25,
          "total": 25
        },
        "AMAZON LM 8HRS": {
          "paradas": 149,
          "prod_sum": 3.1122,
          "total": 4
        },
        "AMAZON LM 10HRS": {
          "paradas": 619,
          "prod_sum": 3.9166,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 32,
          "total": 32
        },
        "MOBLY": {
          "paradas": 47,
          "prod_sum": 1.7462999999999997,
          "total": 2
        }
      }
    },
    "2026-04-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 8,
          "VEDACIT": 1,
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 10HRS": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 17
      },
      "tot_cliente": {
        "PETLOVE RS": 8,
        "VEDACIT": 1,
        "AMAZON LM 8HRS": 4,
        "AMAZON LM 10HRS": 4
      },
      "aderOrigem": 12,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 17,
      "total": 17,
      "prod_sum": 16.2328,
      "prod_n": 17,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 4
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 281,
          "prod_sum": 7.871499999999999,
          "total": 8
        },
        "VEDACIT": {
          "paradas": 5,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 215,
          "prod_sum": 3.4219,
          "total": 4
        },
        "AMAZON LM 10HRS": {
          "paradas": 332,
          "prod_sum": 3.9394,
          "total": 4
        }
      }
    },
    "2026-04-22": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "PETLOVE RS": 5,
          "AMAZON": 54,
          "VEDACIT": 3,
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 35
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 8,
          "AMAZON LM 8HRS": 4,
          "MOBLY": 2
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 108,
        "CANCELADO PELO CLIENTE": 14,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "PETLOVE RS": 5,
        "AMAZON": 63,
        "VEDACIT": 3,
        "AMAZON LM 8HRS": 8,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 35,
        "MOBLY": 2
      },
      "aderOrigem": 78,
      "noShow": 1,
      "cancel": 14,
      "finalizadas": 108,
      "total": 123,
      "prod_sum": 107.6832,
      "prod_n": 108,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 19
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 17,
          "prod_sum": 2.75,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 158,
          "prod_sum": 4.9413,
          "total": 5
        },
        "AMAZON": {
          "paradas": 252,
          "prod_sum": 54,
          "total": 54
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 232,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 10HRS": {
          "paradas": 253,
          "prod_sum": 3.9919000000000002,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 124,
          "prod_sum": 35,
          "total": 35
        }
      }
    },
    "2026-04-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 4,
          "AMAZON": 21,
          "AMAZON PUDOS": 29,
          "PETLOVE RS": 9,
          "MOBLY": 3,
          "VEDACIT": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 76,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 4,
        "AMAZON": 23,
        "AMAZON PUDOS": 29,
        "PETLOVE RS": 9,
        "MOBLY": 3,
        "VEDACIT": 1
      },
      "aderOrigem": 51,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 76,
      "total": 78,
      "prod_sum": 74.8807,
      "prod_n": 76,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 3
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 10
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "MOBLY": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 26,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 419,
          "prod_sum": 5.8873,
          "total": 6
        },
        "AMAZON LM 10HRS": {
          "paradas": 385,
          "prod_sum": 3.9688,
          "total": 4
        },
        "AMAZON": {
          "paradas": 170,
          "prod_sum": 21,
          "total": 21
        },
        "AMAZON PUDOS": {
          "paradas": 117,
          "prod_sum": 29,
          "total": 29
        },
        "PETLOVE RS": {
          "paradas": 426,
          "prod_sum": 8.758300000000002,
          "total": 9
        },
        "MOBLY": {
          "paradas": 67,
          "prod_sum": 2.2662999999999998,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        }
      }
    },
    "2026-04-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 4,
          "AMAZON": 18,
          "PETLOVE RS": 6,
          "VEDACIT": 2,
          "AMAZON PUDOS": 28
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 64,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 4,
        "AMAZON": 19,
        "PETLOVE RS": 6,
        "MOBLY": 2,
        "VEDACIT": 2,
        "AMAZON PUDOS": 28
      },
      "aderOrigem": 45,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 64,
      "total": 67,
      "prod_sum": 63.7804,
      "prod_n": 64,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 10
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 374,
          "prod_sum": 5.8967,
          "total": 6
        },
        "AMAZON LM 10HRS": {
          "paradas": 731,
          "prod_sum": 3.8837,
          "total": 4
        },
        "AMAZON": {
          "paradas": 175,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 291,
          "prod_sum": 6,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 10,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 114,
          "prod_sum": 28,
          "total": 28
        }
      }
    },
    "2026-04-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 3,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 1,
          "PETLOVE RS": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 16
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 3,
        "AMAZON LM 10HRS": 3,
        "VEDACIT": 1,
        "PETLOVE RS": 9
      },
      "aderOrigem": 12,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 16,
      "total": 16,
      "prod_sum": 15.7959,
      "prod_n": 16,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 10HRS": {
          "paradas": 339,
          "prod_sum": 2.9282,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 9,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 418,
          "prod_sum": 8.8677,
          "total": 9
        }
      }
    },
    "2026-04-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 2,
          "AMAZON LM 8HRS": 12,
          "AMAZON LM 6HRS": 2,
          "AMAZON LM 10HRS": 4,
          "AMAZON": 44,
          "PETLOVE RS": 4,
          "MOBLY": 2,
          "AMAZON PUDOS": 36
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 106,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "VEDACIT": 2,
        "AMAZON LM 8HRS": 12,
        "AMAZON LM 6HRS": 2,
        "AMAZON LM 10HRS": 4,
        "AMAZON": 45,
        "PETLOVE RS": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 36
      },
      "aderOrigem": 68,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 106,
      "total": 107,
      "prod_sum": 104.8376,
      "prod_n": 106,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 8
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 20
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "VEDACIT": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 17,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 845,
          "prod_sum": 11.287,
          "total": 12
        },
        "AMAZON LM 6HRS": {
          "paradas": 40,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 10HRS": {
          "paradas": 569,
          "prod_sum": 3.928,
          "total": 4
        },
        "AMAZON": {
          "paradas": 194,
          "prod_sum": 44,
          "total": 44
        },
        "PETLOVE RS": {
          "paradas": 139,
          "prod_sum": 3.9688,
          "total": 4
        },
        "MOBLY": {
          "paradas": 45,
          "prod_sum": 1.6538,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 127,
          "prod_sum": 36,
          "total": 36
        }
      }
    },
    "2026-04-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "AMAZON": 20,
          "MOBLY": 3,
          "AMAZON LM 8HRS": 12,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 25,
          "VEDACIT": 3,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 83,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "AMAZON": 29,
        "MOBLY": 3,
        "AMAZON LM 8HRS": 12,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 25,
        "VEDACIT": 3,
        "PETLOVE RS": 11
      },
      "aderOrigem": 52,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 83,
      "total": 92,
      "prod_sum": 82.0747,
      "prod_n": 83,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 11
        },
        "MOBLY": {
          "Trânsito": 3
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 5
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 6
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 208,
          "prod_sum": 20,
          "total": 20
        },
        "MOBLY": {
          "paradas": 45,
          "prod_sum": 2.9286,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 1098,
          "prod_sum": 11.332,
          "total": 12
        },
        "AMAZON LM 6HRS": {
          "paradas": 62,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 560,
          "prod_sum": 3.8837,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 105,
          "prod_sum": 25,
          "total": 25
        },
        "VEDACIT": {
          "paradas": 26,
          "prod_sum": 3,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 508,
          "prod_sum": 10.9304,
          "total": 11
        }
      }
    },
    "2026-04-29": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 5,
          "PREMIER MG": 2,
          "AMAZON LM 8HRS": 9,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 2,
          "AMAZON INTERIOR": 11,
          "AMAZON PUDOS": 23,
          "AMAZON": 17,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 2,
          "AMAZON": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 83,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "VEDACIT": 5,
        "PREMIER MG": 2,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 2,
        "AMAZON INTERIOR": 13,
        "AMAZON PUDOS": 23,
        "AMAZON": 24,
        "PETLOVE RS": 9
      },
      "aderOrigem": 62,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 83,
      "total": 92,
      "prod_sum": 81.3888,
      "prod_n": 83,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 5
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 7
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 37,
          "prod_sum": 5,
          "total": 5
        },
        "PREMIER MG": {
          "paradas": 10,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 663,
          "prod_sum": 8.8755,
          "total": 9
        },
        "AMAZON LM 6HRS": {
          "paradas": 45,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 883,
          "prod_sum": 3.9652000000000003,
          "total": 4
        },
        "MOBLY": {
          "paradas": 29,
          "prod_sum": 0.8332999999999999,
          "total": 2
        },
        "AMAZON INTERIOR": {
          "paradas": 79,
          "prod_sum": 11,
          "total": 11
        },
        "AMAZON PUDOS": {
          "paradas": 98,
          "prod_sum": 23,
          "total": 23
        },
        "AMAZON": {
          "paradas": 165,
          "prod_sum": 16.8333,
          "total": 17
        },
        "PETLOVE RS": {
          "paradas": 407,
          "prod_sum": 8.881499999999999,
          "total": 9
        }
      }
    },
    "2026-04-30": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "AMAZON LM 8HRS": 9,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 21,
          "MOBLY": 2,
          "VEDACIT": 3,
          "AMAZON INTERIOR": 9,
          "AMAZON": 19,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 6,
          "AMAZON": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 78,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 21,
        "MOBLY": 2,
        "VEDACIT": 3,
        "AMAZON INTERIOR": 15,
        "AMAZON": 22,
        "PETLOVE RS": 8
      },
      "aderOrigem": 55,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 78,
      "total": 87,
      "prod_sum": 77.5579,
      "prod_n": 78,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 6
        },
        "AMAZON LM 10HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "MOBLY": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 23,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 613,
          "prod_sum": 8.8466,
          "total": 9
        },
        "AMAZON LM 10HRS": {
          "paradas": 552,
          "prod_sum": 3.9897,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 93,
          "prod_sum": 21,
          "total": 21
        },
        "MOBLY": {
          "paradas": 34,
          "prod_sum": 1.7647,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON INTERIOR": {
          "paradas": 81,
          "prod_sum": 9,
          "total": 9
        },
        "AMAZON": {
          "paradas": 196,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 338,
          "prod_sum": 7.9569,
          "total": 8
        }
      }
    },
    "2026-05-01": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 10,
          "AMAZON LM 10HRS": 4,
          "PETLOVE RS": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 21
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 10,
        "AMAZON LM 10HRS": 4,
        "PETLOVE RS": 7
      },
      "aderOrigem": 19,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 21,
      "total": 21,
      "prod_sum": 20.5096,
      "prod_n": 21,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 51,
          "prod_sum": 9.875,
          "total": 10
        },
        "AMAZON LM 10HRS": {
          "paradas": 861,
          "prod_sum": 3.9602000000000004,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 290,
          "prod_sum": 6.6744,
          "total": 7
        }
      }
    },
    "2026-05-02": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 5
      },
      "tot_cliente": {
        "PETLOVE RS": 5
      },
      "aderOrigem": 3,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 5,
      "total": 5,
      "prod_sum": 4.8418,
      "prod_n": 5,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 234,
          "prod_sum": 4.8418,
          "total": 5
        }
      }
    },
    "2026-05-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "PREMIER MG": 7,
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 10HRS": 4,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 7,
          "AMAZON": 63,
          "AMAZON PUDOS": 31
        },
        "NO SHOW": {
          "AMAZON INTERIOR": 4
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 140,
        "NO SHOW": 4,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "PREMIER MG": 7,
        "AMAZON LM 8HRS": 4,
        "AMAZON LM 10HRS": 4,
        "AMAZON INTERIOR": 24,
        "PETLOVE RS": 7,
        "AMAZON": 63,
        "MOBLY": 2,
        "AMAZON PUDOS": 31
      },
      "aderOrigem": 109,
      "noShow": 4,
      "cancel": 2,
      "finalizadas": 140,
      "total": 146,
      "prod_sum": 140.5041,
      "prod_n": 142,
      "drill_noShow": {
        "AMAZON INTERIOR": {
          "Problema mecânico": 4
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 13
        },
        "AMAZON PUDOS": {
          "Trânsito": 10
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 30,
          "prod_sum": 2.7639,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 34,
          "prod_sum": 7,
          "total": 7
        },
        "AMAZON LM 8HRS": {
          "paradas": 232,
          "prod_sum": 3.8696,
          "total": 4
        },
        "AMAZON LM 10HRS": {
          "paradas": 341,
          "prod_sum": 3.9909,
          "total": 4
        },
        "AMAZON INTERIOR": {
          "paradas": 86,
          "prod_sum": 20,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 184,
          "prod_sum": 6.8797,
          "total": 7
        },
        "AMAZON": {
          "paradas": 287,
          "prod_sum": 63,
          "total": 63
        },
        "AMAZON PUDOS": {
          "paradas": 102,
          "prod_sum": 31,
          "total": 31
        }
      }
    },
    "2026-05-05": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 11,
          "AMAZON LM 10HRS": 4,
          "MOBLY": 4,
          "AMAZON": 26,
          "AMAZON INTERIOR": 23,
          "AMAZON PUDOS": 25,
          "PETLOVE RS": 10
        },
        "NO SHOW": {
          "AMAZON": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 103,
        "NO SHOW": 1,
        "CANCELADO PELO CLIENTE": 5
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 11,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 4,
        "AMAZON": 32,
        "AMAZON INTERIOR": 23,
        "AMAZON PUDOS": 25,
        "PETLOVE RS": 10
      },
      "aderOrigem": 87,
      "noShow": 1,
      "cancel": 5,
      "finalizadas": 103,
      "total": 109,
      "prod_sum": 106.7372,
      "prod_n": 108,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON INTERIOR": {
          "Trânsito": 5
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 890,
          "prod_sum": 10.4302,
          "total": 11
        },
        "AMAZON LM 10HRS": {
          "paradas": 473,
          "prod_sum": 3.9493,
          "total": 4
        },
        "MOBLY": {
          "paradas": 68,
          "prod_sum": 3.4211,
          "total": 4
        },
        "AMAZON": {
          "paradas": 190,
          "prod_sum": 26,
          "total": 26
        },
        "AMAZON INTERIOR": {
          "paradas": 127,
          "prod_sum": 23,
          "total": 23
        },
        "AMAZON PUDOS": {
          "paradas": 102,
          "prod_sum": 24,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 466,
          "prod_sum": 9.9366,
          "total": 10
        }
      }
    },
    "2026-05-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 6HRS": 3,
          "AMAZON LM 8HRS": 9,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 4,
          "PREMIER MG": 1,
          "AMAZON": 16,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 16,
          "AMAZON PUDOS": 25
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 8,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 95,
        "CANCELADO PELO CLIENTE": 11,
        "BACKUP": 4
      },
      "tot_cliente": {
        "AMAZON LM 6HRS": 3,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 10HRS": 3,
        "MOBLY": 2,
        "VEDACIT": 4,
        "PREMIER MG": 1,
        "AMAZON": 24,
        "AMAZON INTERIOR": 23,
        "PETLOVE RS": 16,
        "AMAZON PUDOS": 25
      },
      "aderOrigem": 82,
      "noShow": 0,
      "cancel": 11,
      "finalizadas": 95,
      "total": 110,
      "prod_sum": 103.9137,
      "prod_n": 105,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 6HRS": {
          "paradas": 205,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 863,
          "prod_sum": 8.953199999999999,
          "total": 9
        },
        "AMAZON LM 10HRS": {
          "paradas": 588,
          "prod_sum": 2.9961,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 29,
          "prod_sum": 3.2,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 5,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON": {
          "paradas": 133,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 106,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 740,
          "prod_sum": 15.764399999999998,
          "total": 16
        },
        "AMAZON PUDOS": {
          "paradas": 102,
          "prod_sum": 25,
          "total": 25
        }
      }
    },
    "2026-05-07": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "VEDACIT": 3,
          "AMAZON LM 8HRS": 7,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 4,
          "AMAZON PUDOS": 24,
          "AMAZON": 19,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 10,
          "MOBLY": 4
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 92,
        "CANCELADO PELO CLIENTE": 3,
        "BACKUP": 4
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "VEDACIT": 3,
        "AMAZON LM 8HRS": 7,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 4,
        "AMAZON PUDOS": 24,
        "AMAZON": 21,
        "AMAZON INTERIOR": 23,
        "PETLOVE RS": 10,
        "MOBLY": 4
      },
      "aderOrigem": 81,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 92,
      "total": 99,
      "prod_sum": 92.591,
      "prod_n": 94,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 7
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 2,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 23,
          "prod_sum": 2.8571,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 686,
          "prod_sum": 6.7212,
          "total": 7
        },
        "AMAZON LM 6HRS": {
          "paradas": 7,
          "prod_sum": 0.7143,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 963,
          "prod_sum": 3.9170000000000003,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 101,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON": {
          "paradas": 117,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON INTERIOR": {
          "paradas": 111,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 421,
          "prod_sum": 9.8445,
          "total": 10
        },
        "MOBLY": {
          "paradas": 74,
          "prod_sum": 3.5368999999999997,
          "total": 4
        }
      }
    },
    "2026-05-08": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 5,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 4,
          "AMAZON PUDOS": 24,
          "AMAZON": 15,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 10HRS": 1,
          "MOBLY": 2,
          "AMAZON": 2,
          "AMAZON INTERIOR": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 5,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 4,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 24,
        "AMAZON": 17,
        "AMAZON INTERIOR": 19,
        "PETLOVE RS": 7
      },
      "aderOrigem": 65,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 74,
      "total": 83,
      "prod_sum": 78.7356,
      "prod_n": 79,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 374,
          "prod_sum": 4.8884,
          "total": 5
        },
        "AMAZON LM 6HRS": {
          "paradas": 24,
          "prod_sum": 0.9582999999999999,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 676,
          "prod_sum": 2.9281,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 101,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON": {
          "paradas": 123,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 95,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 301,
          "prod_sum": 6.9608,
          "total": 7
        }
      }
    },
    "2026-05-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 3,
          "AMAZON LM 10HRS": 2,
          "PETLOVE RS": 11
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 16
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 3,
        "AMAZON LM 10HRS": 2,
        "PETLOVE RS": 11
      },
      "aderOrigem": 14,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 16,
      "total": 16,
      "prod_sum": 15.3197,
      "prod_n": 16,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 389,
          "prod_sum": 2.7283,
          "total": 3
        },
        "AMAZON LM 10HRS": {
          "paradas": 637,
          "prod_sum": 1.9907000000000001,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 463,
          "prod_sum": 10.600700000000002,
          "total": 11
        }
      }
    },
    "2026-05-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 3
      },
      "tot_cliente": {
        "AMAZON LM": 3
      },
      "aderOrigem": 3,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 3,
      "total": 3,
      "prod_sum": 0,
      "prod_n": 0,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON LM": {
          "paradas": 298,
          "prod_sum": 0,
          "total": 3
        }
      }
    },
    "2026-05-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON PUDOS": 22,
          "AMAZON": 41,
          "AMAZON INTERIOR": 28,
          "AMAZON LM 8HRS": 8,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "PETLOVE RS": 8,
          "MOBLY": 4
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 119,
        "BACKUP": 3,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "AMAZON PUDOS": 22,
        "AMAZON": 41,
        "AMAZON INTERIOR": 33,
        "AMAZON LM 8HRS": 8,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 3,
        "PETLOVE RS": 8,
        "MOBLY": 4
      },
      "aderOrigem": 98,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 119,
      "total": 124,
      "prod_sum": 118.6491,
      "prod_n": 119,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 10
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 92,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON": {
          "paradas": 182,
          "prod_sum": 41,
          "total": 41
        },
        "AMAZON INTERIOR": {
          "paradas": 137,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON LM 8HRS": {
          "paradas": 550,
          "prod_sum": 7.956200000000001,
          "total": 8
        },
        "AMAZON LM 6HRS": {
          "paradas": 51,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 625,
          "prod_sum": 2.9903,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 322,
          "prod_sum": 7.9137,
          "total": 8
        },
        "MOBLY": {
          "paradas": 59,
          "prod_sum": 3.7889,
          "total": 4
        }
      }
    },
    "2026-05-12": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 20,
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 2,
          "PREMIER MG": 4,
          "AMAZON": 23,
          "AMAZON INTERIOR": 20,
          "VEDACIT": 2,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 10HRS": 2,
          "MOBLY": 2,
          "AMAZON LM STO AMARO": 6,
          "AMAZON": 2,
          "AMAZON INTERIOR": 2
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 86,
        "CANCELADO PELO CLIENTE": 14,
        "BACKUP": 2
      },
      "tot_cliente": {
        "AMAZON PUDOS": 20,
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 4,
        "MOBLY": 2,
        "AMAZON LM STO AMARO": 6,
        "PREMIER MG": 4,
        "AMAZON": 25,
        "AMAZON INTERIOR": 24,
        "VEDACIT": 2,
        "PETLOVE RS": 9
      },
      "aderOrigem": 77,
      "noShow": 0,
      "cancel": 14,
      "finalizadas": 86,
      "total": 102,
      "prod_sum": 88.6019,
      "prod_n": 89,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 91,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON LM 8HRS": {
          "paradas": 613,
          "prod_sum": 5.8381,
          "total": 6
        },
        "AMAZON LM 10HRS": {
          "paradas": 281,
          "prod_sum": 1.8784999999999998,
          "total": 2
        },
        "PREMIER MG": {
          "paradas": 14,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 176,
          "prod_sum": 23,
          "total": 23
        },
        "AMAZON INTERIOR": {
          "paradas": 122,
          "prod_sum": 20,
          "total": 20
        },
        "VEDACIT": {
          "paradas": 8,
          "prod_sum": 1,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 408,
          "prod_sum": 8.8853,
          "total": 9
        }
      }
    },
    "2026-05-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "AMAZON LM 8HRS": 9,
          "AMAZON LM 10HRS": 4,
          "VEDACIT": 4,
          "AMAZON PUDOS": 19,
          "AMAZON": 15,
          "AMAZON INTERIOR": 13,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 3,
          "AMAZON INTERIOR": 4
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 9,
        "BACKUP": 3
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 10HRS": 4,
        "VEDACIT": 4,
        "AMAZON PUDOS": 19,
        "AMAZON": 18,
        "AMAZON INTERIOR": 20,
        "PETLOVE RS": 9
      },
      "aderOrigem": 64,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 74,
      "total": 86,
      "prod_sum": 76.6559,
      "prod_n": 79,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 5
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 8,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 86,
          "prod_sum": 7.3004999999999995,
          "total": 9
        },
        "AMAZON LM 10HRS": {
          "paradas": 643,
          "prod_sum": 3.9698,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 34,
          "prod_sum": 3.5556,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 91,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON": {
          "paradas": 88,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 84,
          "prod_sum": 13,
          "total": 13
        },
        "PETLOVE RS": {
          "paradas": 435,
          "prod_sum": 8.830000000000002,
          "total": 9
        }
      }
    },
    "2026-05-14": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 2,
          "AMAZON INTERIOR": 2
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON LM 8HRS": 9,
          "AMAZON LM 6HRS": 2,
          "AMAZON LM 10HRS": 3,
          "PREMIER MG": 3,
          "AMAZON PUDOS": 19,
          "AMAZON": 11,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 9
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 6,
        "ENTREGAS FINALIZADAS": 79
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 6HRS": 2,
        "AMAZON LM 10HRS": 3,
        "PREMIER MG": 3,
        "AMAZON PUDOS": 19,
        "AMAZON": 13,
        "AMAZON INTERIOR": 21,
        "PETLOVE RS": 9
      },
      "aderOrigem": 70,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 79,
      "total": 85,
      "prod_sum": 79.7015,
      "prod_n": 81,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 29,
          "prod_sum": 3.8,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 867,
          "prod_sum": 8.117799999999999,
          "total": 9
        },
        "AMAZON LM 6HRS": {
          "paradas": 64,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 10HRS": {
          "paradas": 344,
          "prod_sum": 2.87,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 7,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 91,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON": {
          "paradas": 98,
          "prod_sum": 11,
          "total": 11
        },
        "AMAZON INTERIOR": {
          "paradas": 112,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 390,
          "prod_sum": 8.9137,
          "total": 9
        }
      }
    },
    "2026-05-15": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 14,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 7,
          "VEDACIT": 2,
          "AMAZON LM 8HRS": 8,
          "AMAZON LM 10HRS": 2,
          "AMAZON PUDOS": 19
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 4,
          "MOBLY": 2
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 70,
        "CANCELADO PELO CLIENTE": 7,
        "BACKUP": 2
      },
      "tot_cliente": {
        "AMAZON": 15,
        "AMAZON INTERIOR": 24,
        "PETLOVE RS": 7,
        "VEDACIT": 2,
        "AMAZON LM 8HRS": 8,
        "AMAZON LM 10HRS": 2,
        "AMAZON PUDOS": 19,
        "MOBLY": 2
      },
      "aderOrigem": 66,
      "noShow": 0,
      "cancel": 7,
      "finalizadas": 70,
      "total": 79,
      "prod_sum": 69.8431,
      "prod_n": 71,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 126,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 118,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 265,
          "prod_sum": 6.881500000000001,
          "total": 7
        },
        "VEDACIT": {
          "paradas": 14,
          "prod_sum": 1.875,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 299,
          "prod_sum": 7.0866,
          "total": 8
        },
        "AMAZON LM 10HRS": {
          "paradas": 153,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 91,
          "prod_sum": 19,
          "total": 19
        }
      }
    },
    "2026-05-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 1,
          "PETLOVE RS": 8
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 9
      },
      "tot_cliente": {
        "VEDACIT": 1,
        "PETLOVE RS": 8
      },
      "aderOrigem": 8,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 9,
      "total": 9,
      "prod_sum": 8.9127,
      "prod_n": 9,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 6,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 347,
          "prod_sum": 7.9127,
          "total": 8
        }
      }
    },
    "2026-05-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 5,
          "AMAZON LM 8HRS": 7,
          "AMAZON LM 10HRS": 3,
          "MOBLY": 4,
          "AMAZON PUDOS": 18,
          "AMAZON": 36,
          "AMAZON INTERIOR": 33,
          "PETLOVE RS": 6
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 112,
        "BACKUP": 2
      },
      "tot_cliente": {
        "VEDACIT": 5,
        "AMAZON LM 8HRS": 7,
        "AMAZON LM 10HRS": 3,
        "MOBLY": 4,
        "AMAZON PUDOS": 18,
        "AMAZON": 36,
        "AMAZON INTERIOR": 35,
        "PETLOVE RS": 6
      },
      "aderOrigem": 100,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 112,
      "total": 114,
      "prod_sum": 110.7545,
      "prod_n": 112,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 4
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 25,
          "prod_sum": 4.75,
          "total": 5
        },
        "AMAZON LM 8HRS": {
          "paradas": 435,
          "prod_sum": 6.422300000000001,
          "total": 7
        },
        "AMAZON LM 10HRS": {
          "paradas": 322,
          "prod_sum": 3,
          "total": 3
        },
        "MOBLY": {
          "paradas": 70,
          "prod_sum": 3.65,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 113,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON": {
          "paradas": 164,
          "prod_sum": 36,
          "total": 36
        },
        "AMAZON INTERIOR": {
          "paradas": 162,
          "prod_sum": 33,
          "total": 33
        },
        "PETLOVE RS": {
          "paradas": 313,
          "prod_sum": 5.9322,
          "total": 6
        }
      }
    },
    "2026-05-19": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 1,
          "AMAZON LM 8HRS": 6,
          "VEDACIT": 4,
          "PREMIER MG": 3,
          "AMAZON PUDOS": 20,
          "AMAZON": 16,
          "AMAZON INTERIOR": 22,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON LM 10HRS": 2,
          "AMAZON": 9,
          "AMAZON INTERIOR": 3
        },
        "BACKUP": {
          "AMAZON INTERIOR": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 79,
        "CANCELADO PELO CLIENTE": 15,
        "BACKUP": 4
      },
      "tot_cliente": {
        "MOBLY": 2,
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 10HRS": 2,
        "VEDACIT": 4,
        "PREMIER MG": 3,
        "AMAZON PUDOS": 20,
        "AMAZON": 25,
        "AMAZON INTERIOR": 29,
        "PETLOVE RS": 7
      },
      "aderOrigem": 73,
      "noShow": 0,
      "cancel": 15,
      "finalizadas": 79,
      "total": 98,
      "prod_sum": 88.1869,
      "prod_n": 89,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 14,
          "prod_sum": 0.7857,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 577,
          "prod_sum": 5.7647,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 19,
          "prod_sum": 3.75,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 96,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON": {
          "paradas": 127,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 122,
          "prod_sum": 22,
          "total": 22
        },
        "PETLOVE RS": {
          "paradas": 380,
          "prod_sum": 6.8865,
          "total": 7
        }
      }
    },
    "2026-05-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "AMAZON PUDOS": 19,
          "AMAZON": 15,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 9,
          "MOBLY": 3,
          "AMAZON LM 8HRS": 8,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 5
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 1,
          "AMAZON LM 8HRS": 1,
          "AMAZON LM 10HRS": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 84,
        "CANCELADO PELO CLIENTE": 4,
        "BACKUP": 7
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "AMAZON PUDOS": 19,
        "AMAZON": 16,
        "AMAZON INTERIOR": 27,
        "PETLOVE RS": 9,
        "MOBLY": 3,
        "AMAZON LM 8HRS": 9,
        "AMAZON LM 10HRS": 4,
        "VEDACIT": 5
      },
      "aderOrigem": 71,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 84,
      "total": 95,
      "prod_sum": 84.4023,
      "prod_n": 85,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 94,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON": {
          "paradas": 136,
          "prod_sum": 14.7778,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 123,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 449,
          "prod_sum": 8.921199999999999,
          "total": 9
        },
        "MOBLY": {
          "paradas": 32,
          "prod_sum": 2.7033,
          "total": 3
        },
        "AMAZON LM 8HRS": {
          "paradas": 857,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON LM 10HRS": {
          "paradas": 520,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 5,
          "total": 5
        }
      }
    },
    "2026-05-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 13,
          "AMAZON INTERIOR": 18,
          "PREMIER MG": 5,
          "PETLOVE RS": 6,
          "AMAZON PUDOS": 18,
          "MOBLY": 4,
          "AMAZON LM 8HRS": 7,
          "AMAZON LM 10HRS": 1,
          "VEDACIT": 3,
          "AMAZON LM": 1
        },
        "NO SHOW": {
          "AMAZON": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 5
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 76,
        "NO SHOW": 1,
        "BACKUP": 5,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON": 14,
        "AMAZON INTERIOR": 24,
        "PREMIER MG": 5,
        "PETLOVE RS": 6,
        "AMAZON PUDOS": 18,
        "MOBLY": 4,
        "AMAZON LM 8HRS": 7,
        "AMAZON LM 10HRS": 1,
        "VEDACIT": 3,
        "AMAZON LM": 1
      },
      "aderOrigem": 67,
      "noShow": 1,
      "cancel": 1,
      "finalizadas": 76,
      "total": 83,
      "prod_sum": 75.1969,
      "prod_n": 76,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 116,
          "prod_sum": 13,
          "total": 13
        },
        "AMAZON INTERIOR": {
          "paradas": 120,
          "prod_sum": 18,
          "total": 18
        },
        "PREMIER MG": {
          "paradas": 23,
          "prod_sum": 4.8,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 275,
          "prod_sum": 5.9783,
          "total": 6
        },
        "AMAZON PUDOS": {
          "paradas": 92,
          "prod_sum": 18,
          "total": 18
        },
        "MOBLY": {
          "paradas": 57,
          "prod_sum": 3.6515,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 802,
          "prod_sum": 6.7671,
          "total": 7
        },
        "AMAZON LM 10HRS": {
          "paradas": 31,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 20,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        }
      }
    },
    "2026-05-22": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 6,
          "AMAZON PUDOS": 16,
          "AMAZON LM 8HRS": 4,
          "AMAZON LM 6HRS": 1,
          "AMAZON LM 10HRS": 3,
          "VEDACIT": 3,
          "AMAZON": 12,
          "AMAZON INTERIOR": 18
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON PUDOS": 3,
          "AMAZON LM 8HRS": 2,
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 63,
        "CANCELADO PELO CLIENTE": 9,
        "BACKUP": 2
      },
      "tot_cliente": {
        "PETLOVE RS": 6,
        "AMAZON PUDOS": 19,
        "AMAZON LM 8HRS": 6,
        "AMAZON LM 6HRS": 1,
        "AMAZON LM 10HRS": 3,
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON": 13,
        "AMAZON INTERIOR": 21
      },
      "aderOrigem": 56,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 63,
      "total": 74,
      "prod_sum": 62.7765,
      "prod_n": 63,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON LM 6HRS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 284,
          "prod_sum": 5.8407,
          "total": 6
        },
        "AMAZON PUDOS": {
          "paradas": 87,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON LM 8HRS": {
          "paradas": 450,
          "prod_sum": 3.9617999999999998,
          "total": 4
        },
        "AMAZON LM 6HRS": {
          "paradas": 50,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 10HRS": {
          "paradas": 456,
          "prod_sum": 2.974,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 25,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 120,
          "prod_sum": 12,
          "total": 12
        },
        "AMAZON INTERIOR": {
          "paradas": 108,
          "prod_sum": 18,
          "total": 18
        }
      }
    },
    "2026-05-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 7
      },
      "tot_cliente": {
        "PETLOVE RS": 7
      },
      "aderOrigem": 6,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 7,
      "total": 7,
      "prod_sum": 6.8042,
      "prod_n": 7,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 304,
          "prod_sum": 6.8042,
          "total": 7
        }
      }
    },
    "2026-05-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON PUDOS": 21,
          "AMAZON LM 8HRS": 2,
          "VEDACIT": 5,
          "PETLOVE RS": 7,
          "AMAZON": 38,
          "AMAZON INTERIOR": 34
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 8HRS": 6,
          "AMAZON LM 10HRS": 3,
          "MOBLY": 2,
          "AMAZON": 2,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 107,
        "CANCELADO PELO CLIENTE": 14,
        "BACKUP": 1
      },
      "tot_cliente": {
        "AMAZON PUDOS": 21,
        "AMAZON LM 8HRS": 8,
        "AMAZON LM 10HRS": 3,
        "VEDACIT": 5,
        "MOBLY": 2,
        "PETLOVE RS": 7,
        "AMAZON": 40,
        "AMAZON INTERIOR": 36
      },
      "aderOrigem": 85,
      "noShow": 0,
      "cancel": 14,
      "finalizadas": 107,
      "total": 122,
      "prod_sum": 103.8928,
      "prod_n": 104,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 8
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON INTERIOR": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "AMAZON PUDOS": {
          "paradas": 121,
          "prod_sum": 21,
          "total": 21
        },
        "AMAZON LM 8HRS": {
          "paradas": 297,
          "prod_sum": 1.9939,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 42,
          "prod_sum": 5,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 335,
          "prod_sum": 6.8989,
          "total": 7
        },
        "AMAZON": {
          "paradas": 208,
          "prod_sum": 38,
          "total": 38
        },
        "AMAZON INTERIOR": {
          "paradas": 143,
          "prod_sum": 29,
          "total": 34
        }
      }
    },
    "2026-05-26": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 5,
          "MOBLY": 4,
          "AMAZON PUDOS": 22,
          "VEDACIT": 5,
          "AMAZON LM 10HRS": 1,
          "AMAZON": 13,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 10HRS": 2,
          "AMAZON": 3,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 80,
        "CANCELADO PELO CLIENTE": 6,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 5,
        "MOBLY": 4,
        "AMAZON PUDOS": 22,
        "VEDACIT": 5,
        "AMAZON LM 10HRS": 3,
        "AMAZON": 16,
        "AMAZON INTERIOR": 22,
        "PETLOVE RS": 10
      },
      "aderOrigem": 67,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 80,
      "total": 87,
      "prod_sum": 79.3759,
      "prod_n": 80,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 17,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 58,
          "prod_sum": 3.5999999999999996,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 127,
          "prod_sum": 22,
          "total": 22
        },
        "VEDACIT": {
          "paradas": 40,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON LM 10HRS": {
          "paradas": 335,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON": {
          "paradas": 131,
          "prod_sum": 12.9286,
          "total": 13
        },
        "AMAZON INTERIOR": {
          "paradas": 114,
          "prod_sum": 20,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 501,
          "prod_sum": 9.847299999999999,
          "total": 10
        }
      }
    },
    "2026-05-27": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON LM 10HRS": 3,
          "AMAZON PUDOS": 1
        },
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 5,
          "AMAZON": 15,
          "AMAZON INTERIOR": 18,
          "VEDACIT": 2,
          "PETLOVE RS": 8,
          "AMAZON LM 8HRS": 1,
          "AMAZON PUDOS": 21
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 6,
        "ENTREGAS FINALIZADAS": 70,
        "BACKUP": 2
      },
      "tot_cliente": {
        "MOBLY": 2,
        "PREMIER MG": 5,
        "AMAZON": 15,
        "AMAZON INTERIOR": 20,
        "VEDACIT": 2,
        "PETLOVE RS": 8,
        "AMAZON LM 8HRS": 1,
        "AMAZON LM 10HRS": 3,
        "AMAZON PUDOS": 22
      },
      "aderOrigem": 54,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 70,
      "total": 78,
      "prod_sum": 68.7181,
      "prod_n": 69,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 5
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 27,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 142,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 116,
          "prod_sum": 18,
          "total": 18
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 2,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 386,
          "prod_sum": 7.8848,
          "total": 8
        },
        "AMAZON LM 8HRS": {
          "paradas": 61,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 128,
          "prod_sum": 19.8333,
          "total": 21
        }
      }
    },
    "2026-05-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 6,
          "VEDACIT": 5,
          "MOBLY": 1,
          "AMAZON LM 8HRS": 1,
          "AMAZON": 12,
          "AMAZON INTERIOR": 16,
          "AMAZON PUDOS": 16,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON LM 10HRS": 3,
          "AMAZON": 3,
          "AMAZON INTERIOR": 2,
          "AMAZON PUDOS": 4
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 64,
        "CANCELADO PELO CLIENTE": 13,
        "BACKUP": 2
      },
      "tot_cliente": {
        "PREMIER MG": 6,
        "VEDACIT": 5,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 1,
        "AMAZON LM 10HRS": 3,
        "AMAZON": 15,
        "AMAZON INTERIOR": 20,
        "AMAZON PUDOS": 20,
        "PETLOVE RS": 7
      },
      "aderOrigem": 55,
      "noShow": 0,
      "cancel": 13,
      "finalizadas": 64,
      "total": 79,
      "prod_sum": 63.7333,
      "prod_n": 64,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 26,
          "prod_sum": 6,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 37,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 23,
          "prod_sum": 0.9129999999999999,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 63,
          "prod_sum": 0.9206,
          "total": 1
        },
        "AMAZON": {
          "paradas": 122,
          "prod_sum": 12,
          "total": 12
        },
        "AMAZON INTERIOR": {
          "paradas": 110,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS": {
          "paradas": 129,
          "prod_sum": 16,
          "total": 16
        },
        "PETLOVE RS": {
          "paradas": 313,
          "prod_sum": 6.8997,
          "total": 7
        }
      }
    },
    "2026-05-29": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 13,
          "AMAZON INTERIOR": 16,
          "VEDACIT": 4,
          "MOBLY": 3,
          "PETLOVE RS": 6,
          "AMAZON PUDOS": 14,
          "AMAZON LM 8HRS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 2,
          "AMAZON LM 10HRS": 3
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2,
          "AMAZON PUDOS": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 57,
        "CANCELADO PELO CLIENTE": 6,
        "BACKUP": 7
      },
      "tot_cliente": {
        "AMAZON": 14,
        "AMAZON INTERIOR": 20,
        "VEDACIT": 4,
        "MOBLY": 3,
        "PETLOVE RS": 6,
        "AMAZON PUDOS": 19,
        "AMAZON LM 8HRS": 1,
        "AMAZON LM 10HRS": 3
      },
      "aderOrigem": 48,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 57,
      "total": 70,
      "prod_sum": 56.31,
      "prod_n": 57,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 120,
          "prod_sum": 13,
          "total": 13
        },
        "AMAZON INTERIOR": {
          "paradas": 115,
          "prod_sum": 16,
          "total": 16
        },
        "VEDACIT": {
          "paradas": 35,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 47,
          "prod_sum": 2.4135,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 326,
          "prod_sum": 5.8965000000000005,
          "total": 6
        },
        "AMAZON PUDOS": {
          "paradas": 128,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON LM 8HRS": {
          "paradas": 55,
          "prod_sum": 1,
          "total": 1
        }
      }
    },
    "2026-05-30": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 9
      },
      "tot_cliente": {
        "PETLOVE RS": 9
      },
      "aderOrigem": 7,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 9,
      "total": 9,
      "prod_sum": 8.8817,
      "prod_n": 9,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 378,
          "prod_sum": 8.8817,
          "total": 9
        }
      }
    },
    "2026-06-01": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 5,
          "AMAZON": 44,
          "AMAZON INTERIOR": 38,
          "VEDACIT": 4,
          "MOBLY": 1,
          "AMAZON LM STO AMARO": 5,
          "PETLOVE RS": 9,
          "AMAZON LM 8HRS": 2,
          "AMAZON PUDOS": 19,
          "AMAZON PUDOS INTERIOR": 3
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 4,
          "MOBLY": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 130,
        "CANCELADO PELO CLIENTE": 6
      },
      "tot_cliente": {
        "PREMIER MG": 5,
        "AMAZON": 45,
        "AMAZON INTERIOR": 42,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM STO AMARO": 5,
        "PETLOVE RS": 9,
        "AMAZON LM 8HRS": 2,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 3
      },
      "aderOrigem": 105,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 130,
      "total": 136,
      "prod_sum": 129.9061,
      "prod_n": 131,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 7
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON LM STO AMARO": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "AMAZON PUDOS": {
          "Trânsito": 6
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 34,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 199,
          "prod_sum": 44,
          "total": 44
        },
        "AMAZON INTERIOR": {
          "paradas": 157,
          "prod_sum": 38,
          "total": 38
        },
        "VEDACIT": {
          "paradas": 34,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 20,
          "prod_sum": 0.75,
          "total": 1
        },
        "AMAZON LM STO AMARO": {
          "paradas": 488,
          "prod_sum": 4.3832,
          "total": 5
        },
        "PETLOVE RS": {
          "paradas": 516,
          "prod_sum": 8.907399999999999,
          "total": 9
        },
        "AMAZON LM 8HRS": {
          "paradas": 237,
          "prod_sum": 1.8655,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 120,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 18,
          "prod_sum": 3,
          "total": 3
        }
      }
    },
    "2026-06-02": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 5,
          "MOBLY": 4,
          "AMAZON": 16,
          "AMAZON INTERIOR": 23,
          "PETLOVE RS": 7,
          "AMAZON LM 8HRS": 4,
          "AMAZON PUDOS": 22,
          "AMAZON PUDOS INTERIOR": 5
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 86,
        "BACKUP": 1,
        "CANCELADO PELO CLIENTE": 7
      },
      "tot_cliente": {
        "VEDACIT": 5,
        "MOBLY": 4,
        "AMAZON": 16,
        "AMAZON INTERIOR": 31,
        "PETLOVE RS": 7,
        "AMAZON LM 8HRS": 4,
        "AMAZON PUDOS": 22,
        "AMAZON PUDOS INTERIOR": 5
      },
      "aderOrigem": 67,
      "noShow": 0,
      "cancel": 7,
      "finalizadas": 86,
      "total": 94,
      "prod_sum": 84.7658,
      "prod_n": 86,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 9
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 39,
          "prod_sum": 4.6667000000000005,
          "total": 5
        },
        "MOBLY": {
          "paradas": 59,
          "prod_sum": 3.5784,
          "total": 4
        },
        "AMAZON": {
          "paradas": 125,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 136,
          "prod_sum": 23,
          "total": 23
        },
        "PETLOVE RS": {
          "paradas": 410,
          "prod_sum": 6.9406,
          "total": 7
        },
        "AMAZON LM 8HRS": {
          "paradas": 319,
          "prod_sum": 3.5801,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 120,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 30,
          "prod_sum": 5,
          "total": 5
        }
      }
    },
    "2026-06-03": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON INTERIOR": 1
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 22,
          "AMAZON INTERIOR": 25,
          "AMAZON LM 8HRS": 6,
          "AMAZON PUDOS": 22,
          "AMAZON PUDOS INTERIOR": 3,
          "PETLOVE RS": 10,
          "PREMIER MG": 2
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 3,
        "ENTREGAS FINALIZADAS": 90
      },
      "tot_cliente": {
        "MOBLY": 2,
        "AMAZON": 22,
        "AMAZON INTERIOR": 26,
        "AMAZON LM 8HRS": 6,
        "AMAZON PUDOS": 22,
        "AMAZON PUDOS INTERIOR": 3,
        "PETLOVE RS": 10,
        "PREMIER MG": 2
      },
      "aderOrigem": 73,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 90,
      "total": 93,
      "prod_sum": 89.5464,
      "prod_n": 90,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON INTERIOR": {
          "Trânsito": 7
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 157,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON INTERIOR": {
          "paradas": 141,
          "prod_sum": 25,
          "total": 25
        },
        "AMAZON LM 8HRS": {
          "paradas": 699,
          "prod_sum": 5.6541999999999994,
          "total": 6
        },
        "AMAZON PUDOS": {
          "paradas": 117,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 18,
          "prod_sum": 3,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 470,
          "prod_sum": 9.892199999999999,
          "total": 10
        },
        "PREMIER MG": {
          "paradas": 2,
          "prod_sum": 2,
          "total": 2
        }
      }
    },
    "2026-06-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 5,
          "VEDACIT": 3,
          "PETLOVE RS": 7
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 15
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 5,
        "VEDACIT": 3,
        "PETLOVE RS": 7
      },
      "aderOrigem": 11,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 15,
      "total": 15,
      "prod_sum": 14.1373,
      "prod_n": 15,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 583,
          "prod_sum": 4.706300000000001,
          "total": 5
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 337,
          "prod_sum": 6.431,
          "total": 7
        }
      }
    },
    "2026-06-05": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "AMAZON": 15,
          "AMAZON INTERIOR": 25,
          "PETLOVE RS": 5,
          "MOBLY": 1,
          "AMAZON PUDOS": 22,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON LM 8HRS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 4,
          "MOBLY": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 80,
        "CANCELADO PELO CLIENTE": 6,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "AMAZON": 16,
        "AMAZON INTERIOR": 30,
        "PETLOVE RS": 5,
        "MOBLY": 2,
        "AMAZON PUDOS": 22,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON LM 8HRS": 6
      },
      "aderOrigem": 71,
      "noShow": 0,
      "cancel": 6,
      "finalizadas": 80,
      "total": 87,
      "prod_sum": 85.5586,
      "prod_n": 80,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 4
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 2,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON": {
          "paradas": 88,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 107,
          "prod_sum": 25,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 223,
          "prod_sum": 4.8595,
          "total": 5
        },
        "MOBLY": {
          "paradas": 25,
          "prod_sum": 0.88,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 114,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 577,
          "prod_sum": 11.819099999999999,
          "total": 6
        }
      }
    },
    "2026-06-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 9
      },
      "tot_cliente": {
        "PETLOVE RS": 9
      },
      "aderOrigem": 9,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 9,
      "total": 9,
      "prod_sum": 8.6464,
      "prod_n": 9,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 365,
          "prod_sum": 8.6464,
          "total": 9
        }
      }
    },
    "2026-06-08": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON LM 8HRS": 7,
          "AMAZON PUDOS": 26,
          "AMAZON PUDOS INTERIOR": 5,
          "MOBLY": 3,
          "AMAZON": 68,
          "AMAZON INTERIOR": 41,
          "PETLOVE RS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 8HRS": 2,
          "AMAZON INTERIOR": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 160,
        "CANCELADO PELO CLIENTE": 3,
        "BACKUP": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "AMAZON LM 8HRS": 9,
        "AMAZON PUDOS": 26,
        "AMAZON PUDOS INTERIOR": 5,
        "MOBLY": 3,
        "AMAZON": 68,
        "AMAZON INTERIOR": 43,
        "PETLOVE RS": 6
      },
      "aderOrigem": 129,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 160,
      "total": 164,
      "prod_sum": 157.4712,
      "prod_n": 159,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 13
        },
        "AMAZON": {
          "Trânsito": 9
        },
        "AMAZON INTERIOR": {
          "Trânsito": 5
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 586,
          "prod_sum": 5.8998,
          "total": 7
        },
        "AMAZON PUDOS": {
          "paradas": 123,
          "prod_sum": 26,
          "total": 26
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 27,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 42,
          "prod_sum": 2.6833,
          "total": 3
        },
        "AMAZON": {
          "paradas": 284,
          "prod_sum": 67,
          "total": 68
        },
        "AMAZON INTERIOR": {
          "paradas": 171,
          "prod_sum": 41,
          "total": 41
        },
        "PETLOVE RS": {
          "paradas": 277,
          "prod_sum": 5.8881,
          "total": 6
        }
      }
    },
    "2026-06-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "AMAZON LM 8HRS": 4,
          "VEDACIT": 4,
          "AMAZON": 17,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 12,
          "AMAZON PUDOS": 20,
          "AMAZON PUDOS INTERIOR": 4
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON INTERIOR": 8,
          "AMAZON PUDOS": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        },
        "NO SHOW": {
          "PETLOVE RS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 82,
        "CANCELADO PELO CLIENTE": 11,
        "BACKUP": 1,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "AMAZON LM 8HRS": 4,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON": 17,
        "AMAZON INTERIOR": 29,
        "PETLOVE RS": 13,
        "AMAZON PUDOS": 21,
        "AMAZON PUDOS INTERIOR": 4
      },
      "aderOrigem": 73,
      "noShow": 1,
      "cancel": 11,
      "finalizadas": 82,
      "total": 95,
      "prod_sum": 82.4474,
      "prod_n": 84,
      "drill_noShow": {
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 494,
          "prod_sum": 3.6829,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 25,
          "prod_sum": 3,
          "total": 4
        },
        "AMAZON": {
          "paradas": 131,
          "prod_sum": 16.8889,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 129,
          "prod_sum": 20,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 522,
          "prod_sum": 11.8756,
          "total": 12
        },
        "AMAZON PUDOS": {
          "paradas": 123,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        }
      }
    },
    "2026-06-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON LM 8HRS": 5,
          "MOBLY": 3,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 4,
          "PREMIER MG": 2,
          "AMAZON": 16,
          "AMAZON INTERIOR": 21,
          "PETLOVE RS": 15
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 3
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 88,
        "CANCELADO PELO CLIENTE": 4,
        "BACKUP": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "AMAZON LM 8HRS": 5,
        "MOBLY": 3,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "PREMIER MG": 2,
        "AMAZON": 17,
        "AMAZON INTERIOR": 25,
        "PETLOVE RS": 15
      },
      "aderOrigem": 74,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 88,
      "total": 93,
      "prod_sum": 87.0047,
      "prod_n": 88,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 5
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 481,
          "prod_sum": 4.8232,
          "total": 5
        },
        "MOBLY": {
          "paradas": 52,
          "prod_sum": 2.6722,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON": {
          "paradas": 131,
          "prod_sum": 15.8333,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 155,
          "prod_sum": 21,
          "total": 21
        },
        "PETLOVE RS": {
          "paradas": 729,
          "prod_sum": 14.676000000000002,
          "total": 15
        }
      }
    },
    "2026-06-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON LM 8HRS": 3,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 14,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 13
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 5
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        },
        "NO SHOW": {
          "PETLOVE RS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 82,
        "CANCELADO PELO CLIENTE": 6,
        "BACKUP": 1,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 3,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 15,
        "AMAZON INTERIOR": 26,
        "PETLOVE RS": 14
      },
      "aderOrigem": 72,
      "noShow": 1,
      "cancel": 6,
      "finalizadas": 82,
      "total": 90,
      "prod_sum": 80.5843,
      "prod_n": 83,
      "drill_noShow": {
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 25,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 33,
          "prod_sum": 1.5385,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 210,
          "prod_sum": 2.7377,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 122,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 110,
          "prod_sum": 13.9231,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 148,
          "prod_sum": 19.6667,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 615,
          "prod_sum": 12.7183,
          "total": 13
        }
      }
    },
    "2026-06-12": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 1,
          "VEDACIT": 4,
          "AMAZON LM 8HRS": 4,
          "AMAZON PUDOS": 19,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 14,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON INTERIOR": 5
        },
        "NO SHOW": {
          "AMAZON LM 8HRS": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 6,
        "NO SHOW": 1,
        "BACKUP": 3
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON LM 8HRS": 5,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 14,
        "AMAZON INTERIOR": 28,
        "PETLOVE RS": 8
      },
      "aderOrigem": 67,
      "noShow": 1,
      "cancel": 6,
      "finalizadas": 74,
      "total": 84,
      "prod_sum": 73.6242,
      "prod_n": 75,
      "drill_noShow": {
        "AMAZON LM 8HRS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 15,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 382,
          "prod_sum": 3.6940999999999997,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 108,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 141,
          "prod_sum": 20,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 428,
          "prod_sum": 7.9300999999999995,
          "total": 8
        }
      }
    },
    "2026-06-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 8
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 8
      },
      "tot_cliente": {
        "PETLOVE RS": 8
      },
      "aderOrigem": 8,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 8,
      "total": 8,
      "prod_sum": 7.8388,
      "prod_n": 8,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 403,
          "prod_sum": 7.8388,
          "total": 8
        }
      }
    },
    "2026-06-15": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 2,
          "MOBLY": 1,
          "VEDACIT": 4,
          "AMAZON PUDOS": 22,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON": 49,
          "AMAZON INTERIOR": 35,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON INTERIOR": 3
        },
        "NO SHOW": {
          "AMAZON": 3
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 127,
        "CANCELADO PELO CLIENTE": 4,
        "NO SHOW": 3,
        "BACKUP": 1
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 2,
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON PUDOS": 22,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON": 52,
        "AMAZON INTERIOR": 39,
        "PETLOVE RS": 9
      },
      "aderOrigem": 105,
      "noShow": 3,
      "cancel": 4,
      "finalizadas": 127,
      "total": 135,
      "prod_sum": 126.0698,
      "prod_n": 130,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 3
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 5
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 10
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 155,
          "prod_sum": 1.587,
          "total": 2
        },
        "MOBLY": {
          "paradas": 16,
          "prod_sum": 0.75,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 34,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 125,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 20,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 211,
          "prod_sum": 48.8,
          "total": 49
        },
        "AMAZON INTERIOR": {
          "paradas": 317,
          "prod_sum": 35,
          "total": 35
        },
        "PETLOVE RS": {
          "paradas": 440,
          "prod_sum": 8.9328,
          "total": 9
        }
      }
    },
    "2026-06-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 6,
          "MOBLY": 3,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 4,
          "VEDACIT": 3,
          "AMAZON": 12,
          "AMAZON INTERIOR": 21,
          "PETLOVE RS": 7,
          "PREMIER MG": 2
        },
        "NO SHOW": {
          "AMAZON": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 8
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 76,
        "NO SHOW": 1,
        "BACKUP": 2,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 6,
        "MOBLY": 3,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "VEDACIT": 3,
        "AMAZON": 13,
        "AMAZON INTERIOR": 31,
        "PETLOVE RS": 7,
        "PREMIER MG": 2
      },
      "aderOrigem": 72,
      "noShow": 1,
      "cancel": 8,
      "finalizadas": 76,
      "total": 87,
      "prod_sum": 75.9295,
      "prod_n": 77,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 366,
          "prod_sum": 5.3766,
          "total": 6
        },
        "MOBLY": {
          "paradas": 56,
          "prod_sum": 2.6452,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 100,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 58,
          "prod_sum": 12,
          "total": 12
        },
        "AMAZON INTERIOR": {
          "paradas": 167,
          "prod_sum": 21,
          "total": 21
        },
        "PETLOVE RS": {
          "paradas": 358,
          "prod_sum": 6.9077,
          "total": 7
        },
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 2,
          "total": 2
        }
      }
    },
    "2026-06-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON LM 8HRS": 6,
          "MOBLY": 1,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "VEDACIT": 3,
          "AMAZON": 14,
          "AMAZON INTERIOR": 19,
          "PREMIER MG": 2,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON INTERIOR": 7
        },
        "BACKUP": {
          "AMAZON PUDOS": 3,
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 74,
        "CANCELADO PELO CLIENTE": 8,
        "BACKUP": 6
      },
      "tot_cliente": {
        "AMAZON LM 8HRS": 6,
        "MOBLY": 2,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "VEDACIT": 3,
        "AMAZON": 14,
        "AMAZON INTERIOR": 29,
        "PREMIER MG": 2,
        "PETLOVE RS": 10
      },
      "aderOrigem": 60,
      "noShow": 0,
      "cancel": 8,
      "finalizadas": 74,
      "total": 88,
      "prod_sum": 72.7887,
      "prod_n": 74,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON LM 8HRS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 5
        }
      },
      "drill_prod": {
        "AMAZON LM 8HRS": {
          "paradas": 293,
          "prod_sum": 5.8253,
          "total": 6
        },
        "MOBLY": {
          "paradas": 17,
          "prod_sum": 0.7059000000000001,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 82,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 96,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 200,
          "prod_sum": 18.8333,
          "total": 19
        },
        "PREMIER MG": {
          "paradas": 16,
          "prod_sum": 1.8333,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 526,
          "prod_sum": 9.590900000000001,
          "total": 10
        }
      }
    },
    "2026-06-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 4,
          "VEDACIT": 2,
          "AMAZON LM 8HRS": 3,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 14,
          "AMAZON INTERIOR": 18,
          "PREMIER MG": 4,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON LM 8HRS": 3,
          "AMAZON": 1,
          "AMAZON INTERIOR": 6
        },
        "BACKUP": {
          "AMAZON PUDOS": 3,
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 72,
        "CANCELADO PELO CLIENTE": 10,
        "BACKUP": 6
      },
      "tot_cliente": {
        "MOBLY": 4,
        "VEDACIT": 2,
        "AMAZON LM 8HRS": 6,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 15,
        "AMAZON INTERIOR": 27,
        "PREMIER MG": 4,
        "PETLOVE RS": 8
      },
      "aderOrigem": 64,
      "noShow": 0,
      "cancel": 10,
      "finalizadas": 72,
      "total": 88,
      "prod_sum": 70.1439,
      "prod_n": 73,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 4
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 57,
          "prod_sum": 2.9833000000000003,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 10,
          "prod_sum": 1.8889,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 274,
          "prod_sum": 2.3319,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 110,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 87,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 137,
          "prod_sum": 18,
          "total": 18
        },
        "PREMIER MG": {
          "paradas": 23,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 404,
          "prod_sum": 7.9398,
          "total": 8
        }
      }
    },
    "2026-06-19": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON LM 8HRS": 1,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 14,
          "AMAZON INTERIOR": 29,
          "PETLOVE RS": 8
        },
        "BACKUP": {
          "AMAZON PUDOS": 3
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 2,
        "ENTREGAS FINALIZADAS": 75,
        "BACKUP": 3
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON LM 8HRS": 1,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 14,
        "AMAZON INTERIOR": 29,
        "PETLOVE RS": 8
      },
      "aderOrigem": 70,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 75,
      "total": 80,
      "prod_sum": 74.8507,
      "prod_n": 75,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 3
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 106,
          "prod_sum": 0.8774,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 107,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 107,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 157,
          "prod_sum": 29,
          "total": 29
        },
        "PETLOVE RS": {
          "paradas": 431,
          "prod_sum": 7.9733,
          "total": 8
        }
      }
    },
    "2026-06-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 10
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 10
      },
      "tot_cliente": {
        "PETLOVE RS": 10
      },
      "aderOrigem": 9,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 10,
      "total": 10,
      "prod_sum": 9.8048,
      "prod_n": 10,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 528,
          "prod_sum": 9.8048,
          "total": 10
        }
      }
    },
    "2026-06-22": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 1,
          "AMAZON INTERIOR": 9
        },
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 1,
          "AMAZON LM 8HRS": 1,
          "VEDACIT": 3,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 53,
          "AMAZON INTERIOR": 29,
          "AMAZON MM": 1,
          "PETLOVE RS": 6
        },
        "BACKUP": {
          "AMAZON PUDOS": 1
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 11,
        "ENTREGAS FINALIZADAS": 116,
        "BACKUP": 1
      },
      "tot_cliente": {
        "MOBLY": 2,
        "AMAZON LM 8HRS": 1,
        "VEDACIT": 3,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 54,
        "AMAZON INTERIOR": 38,
        "AMAZON MM": 1,
        "PETLOVE RS": 6
      },
      "aderOrigem": 94,
      "noShow": 0,
      "cancel": 11,
      "finalizadas": 116,
      "total": 128,
      "prod_sum": 115.389,
      "prod_n": 116,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 6
        },
        "AMAZON": {
          "Trânsito": 11
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 25,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON LM 8HRS": {
          "paradas": 108,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 21,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 104,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 210,
          "prod_sum": 52.8571,
          "total": 53
        },
        "AMAZON INTERIOR": {
          "paradas": 158,
          "prod_sum": 29,
          "total": 29
        },
        "AMAZON MM": {
          "paradas": 11,
          "prod_sum": 0.7273000000000001,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 289,
          "prod_sum": 5.804600000000001,
          "total": 6
        }
      }
    },
    "2026-06-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 1,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON MM": 2
      },
      "aderOrigem": 1,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 1,
      "total": 2,
      "prod_sum": 1,
      "prod_n": 1,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 8,
          "prod_sum": 1,
          "total": 1
        }
      }
    },
    "2026-06-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "AMAZON LM 8HRS": 4,
          "AMAZON MM": 3,
          "VEDACIT": 5,
          "AMAZON": 17,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 9,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 10,
          "MOBLY": 2
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 79,
        "CANCELADO PELO CLIENTE": 13,
        "BACKUP": 2
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "AMAZON LM 8HRS": 4,
        "AMAZON MM": 3,
        "VEDACIT": 5,
        "AMAZON": 18,
        "AMAZON INTERIOR": 30,
        "PETLOVE RS": 9,
        "MOBLY": 2,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 4
      },
      "aderOrigem": 75,
      "noShow": 0,
      "cancel": 13,
      "finalizadas": 79,
      "total": 94,
      "prod_sum": 77.8157,
      "prod_n": 80,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 3.5,
          "total": 4
        },
        "AMAZON LM 8HRS": {
          "paradas": 304,
          "prod_sum": 3.5511999999999997,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 22,
          "prod_sum": 2.875,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 35,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 67,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 141,
          "prod_sum": 17,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 522,
          "prod_sum": 8.8895,
          "total": 9
        },
        "AMAZON PUDOS": {
          "paradas": 106,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        }
      }
    },
    "2026-06-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "AMAZON MM": 3,
          "VEDACIT": 3,
          "MOBLY": 2,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 16,
          "AMAZON INTERIOR": 22,
          "PETLOVE RS": 10
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 76,
        "BACKUP": 3,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "AMAZON MM": 3,
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 16,
        "AMAZON INTERIOR": 28,
        "PETLOVE RS": 10
      },
      "aderOrigem": 69,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 76,
      "total": 82,
      "prod_sum": 74.7491,
      "prod_n": 76,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON MM": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 9,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON MM": {
          "paradas": 33,
          "prod_sum": 2.6429,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 20,
          "prod_sum": 3,
          "total": 3
        },
        "MOBLY": {
          "paradas": 22,
          "prod_sum": 1.9091,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 97,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 101,
          "prod_sum": 15.8,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 148,
          "prod_sum": 22,
          "total": 22
        },
        "PETLOVE RS": {
          "paradas": 538,
          "prod_sum": 9.3971,
          "total": 10
        }
      }
    },
    "2026-06-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "VEDACIT": 2,
          "AMAZON LM 8HRS": 1,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON MM": 6,
          "AMAZON": 11,
          "AMAZON INTERIOR": 9,
          "PETLOVE RS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 6,
          "AMAZON INTERIOR": 16
        },
        "BACKUP": {
          "AMAZON INTERIOR": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 57,
        "CANCELADO PELO CLIENTE": 24,
        "BACKUP": 4
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "VEDACIT": 2,
        "MOBLY": 2,
        "AMAZON LM 8HRS": 1,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON MM": 6,
        "AMAZON": 17,
        "AMAZON INTERIOR": 29,
        "PETLOVE RS": 6
      },
      "aderOrigem": 49,
      "noShow": 0,
      "cancel": 24,
      "finalizadas": 57,
      "total": 85,
      "prod_sum": 62.5826,
      "prod_n": 63,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON MM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 15,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 8,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON LM 8HRS": {
          "paradas": 106,
          "prod_sum": 0.7358,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 100,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 35,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON": {
          "paradas": 44,
          "prod_sum": 11,
          "total": 11
        },
        "AMAZON INTERIOR": {
          "paradas": 56,
          "prod_sum": 9,
          "total": 9
        },
        "PETLOVE RS": {
          "paradas": 266,
          "prod_sum": 5.8468,
          "total": 6
        }
      }
    },
    "2026-06-26": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 9,
          "AMAZON": 3,
          "AMAZON INTERIOR": 4
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 10,
          "VEDACIT": 4,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 19,
          "AMAZON INTERIOR": 22,
          "PETLOVE RS": 8
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 18,
        "ENTREGAS FINALIZADAS": 82,
        "BACKUP": 2
      },
      "tot_cliente": {
        "MOBLY": 2,
        "AMAZON MM": 19,
        "VEDACIT": 4,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 22,
        "AMAZON INTERIOR": 28,
        "PETLOVE RS": 8
      },
      "aderOrigem": 70,
      "noShow": 0,
      "cancel": 18,
      "finalizadas": 82,
      "total": 102,
      "prod_sum": 81.7945,
      "prod_n": 85,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 7
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 66,
          "prod_sum": 9.857099999999999,
          "total": 10
        },
        "VEDACIT": {
          "paradas": 36,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 100,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 19,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 110,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON INTERIOR": {
          "paradas": 145,
          "prod_sum": 22,
          "total": 22
        },
        "PETLOVE RS": {
          "paradas": 405,
          "prod_sum": 7.937399999999999,
          "total": 8
        }
      }
    },
    "2026-06-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 18,
          "PETLOVE RS": 5
        },
        "NO SHOW": {
          "AMAZON MM": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 23,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "AMAZON MM": 24,
        "PETLOVE RS": 5
      },
      "aderOrigem": 14,
      "noShow": 2,
      "cancel": 4,
      "finalizadas": 23,
      "total": 29,
      "prod_sum": 23.683,
      "prod_n": 24,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 8
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 98,
          "prod_sum": 17.7571,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 217,
          "prod_sum": 4.9259,
          "total": 5
        }
      }
    },
    "2026-06-29": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 3,
          "MOBLY": 2,
          "AMAZON MM": 24,
          "AMAZON": 50,
          "AMAZON INTERIOR": 23,
          "PETLOVE RS": 11,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 14,
          "AMAZON INTERIOR": 21
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 132,
        "NO SHOW": 9,
        "CANCELADO PELO CLIENTE": 35,
        "BACKUP": 2
      },
      "tot_cliente": {
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON MM": 39,
        "AMAZON": 58,
        "AMAZON INTERIOR": 46,
        "PETLOVE RS": 11,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 4
      },
      "aderOrigem": 109,
      "noShow": 9,
      "cancel": 35,
      "finalizadas": 132,
      "total": 178,
      "prod_sum": 132.6126,
      "prod_n": 140,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        },
        "AMAZON": {
          "Problema mecânico": 8
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON MM": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 16
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 23,
          "prod_sum": 3,
          "total": 3
        },
        "MOBLY": {
          "paradas": 39,
          "prod_sum": 1.7381,
          "total": 2
        },
        "AMAZON MM": {
          "paradas": 84,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON": {
          "paradas": 250,
          "prod_sum": 50,
          "total": 50
        },
        "AMAZON INTERIOR": {
          "paradas": 68,
          "prod_sum": 23,
          "total": 23
        },
        "PETLOVE RS": {
          "paradas": 556,
          "prod_sum": 10.874500000000001,
          "total": 11
        },
        "AMAZON PUDOS": {
          "paradas": 102,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        }
      }
    },
    "2026-06-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 4
      },
      "tot_cliente": {
        "AMAZON MM": 4
      },
      "aderOrigem": 1,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 4,
      "total": 4,
      "prod_sum": 3.1389,
      "prod_n": 4,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 17,
          "prod_sum": 3.1389,
          "total": 4
        }
      }
    },
    "2026-06-30": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 6,
          "VEDACIT": 3,
          "AMAZON MM": 42,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 6,
          "PETLOVE RS": 8,
          "AMAZON": 56,
          "AMAZON INTERIOR": 49
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 3,
          "AMAZON": 4
        },
        "NO SHOW": {
          "AMAZON MM": 2,
          "AMAZON": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 185,
        "CANCELADO PELO CLIENTE": 9,
        "NO SHOW": 5
      },
      "tot_cliente": {
        "PREMIER MG": 6,
        "MOBLY": 2,
        "VEDACIT": 3,
        "AMAZON MM": 47,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "PETLOVE RS": 8,
        "AMAZON": 63,
        "AMAZON INTERIOR": 49
      },
      "aderOrigem": 143,
      "noShow": 5,
      "cancel": 9,
      "finalizadas": 185,
      "total": 199,
      "prod_sum": 183.5694,
      "prod_n": 188,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        },
        "AMAZON": {
          "Problema mecânico": 3
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON MM": {
          "Trânsito": 7
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 23
        },
        "AMAZON INTERIOR": {
          "Trânsito": 6
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 24,
          "prod_sum": 6,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON MM": {
          "paradas": 130,
          "prod_sum": 41.3571,
          "total": 42
        },
        "AMAZON PUDOS": {
          "paradas": 99,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 6,
          "total": 6
        },
        "PETLOVE RS": {
          "paradas": 361,
          "prod_sum": 7.879,
          "total": 8
        },
        "AMAZON": {
          "paradas": 362,
          "prod_sum": 55.3333,
          "total": 56
        },
        "AMAZON INTERIOR": {
          "paradas": 209,
          "prod_sum": 49,
          "total": 49
        }
      }
    },
    "2026-07-01": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 47,
          "VEDACIT": 3,
          "PREMIER MG": 8,
          "AMAZON": 60,
          "AMAZON INTERIOR": 45,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 4,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 12,
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 3
        },
        "NO SHOW": {
          "AMAZON": 8
        },
        "BACKUP": {
          "AMAZON INTERIOR": 2,
          "AMAZON PUDOS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 192,
        "CANCELADO PELO CLIENTE": 18,
        "NO SHOW": 8,
        "BACKUP": 3
      },
      "tot_cliente": {
        "AMAZON MM": 59,
        "VEDACIT": 3,
        "MOBLY": 2,
        "PREMIER MG": 8,
        "AMAZON": 69,
        "AMAZON INTERIOR": 50,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 4,
        "PETLOVE RS": 10
      },
      "aderOrigem": 178,
      "noShow": 8,
      "cancel": 18,
      "finalizadas": 192,
      "total": 221,
      "prod_sum": 199.8758,
      "prod_n": 201,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 8
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 5
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 294,
          "prod_sum": 46.4333,
          "total": 47
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 40,
          "prod_sum": 7.6071,
          "total": 8
        },
        "AMAZON": {
          "paradas": 253,
          "prod_sum": 60,
          "total": 60
        },
        "AMAZON INTERIOR": {
          "paradas": 155,
          "prod_sum": 45,
          "total": 45
        },
        "AMAZON PUDOS": {
          "paradas": 96,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 533,
          "prod_sum": 9.8354,
          "total": 10
        }
      }
    },
    "2026-07-02": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 3,
          "PREMIER MG": 2,
          "AMAZON MM": 68,
          "AMAZON": 66,
          "AMAZON INTERIOR": 46,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 5,
          "MOBLY": 2,
          "PETLOVE RS": 11
        },
        "NO SHOW": {
          "AMAZON MM": 5,
          "AMAZON": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 218,
        "NO SHOW": 14,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "VEDACIT": 3,
        "PREMIER MG": 2,
        "AMAZON MM": 76,
        "AMAZON": 75,
        "AMAZON INTERIOR": 46,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 5,
        "MOBLY": 2,
        "PETLOVE RS": 11
      },
      "aderOrigem": 200,
      "noShow": 14,
      "cancel": 3,
      "finalizadas": 218,
      "total": 235,
      "prod_sum": 223.4013,
      "prod_n": 224,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 5
        },
        "AMAZON": {
          "Problema mecânico": 9
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 5
        },
        "AMAZON": {
          "Trânsito": 8
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 2.9167,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 2,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON MM": {
          "paradas": 444,
          "prod_sum": 66.75,
          "total": 68
        },
        "AMAZON": {
          "paradas": 299,
          "prod_sum": 66,
          "total": 66
        },
        "AMAZON INTERIOR": {
          "paradas": 165,
          "prod_sum": 46,
          "total": 46
        },
        "AMAZON PUDOS": {
          "paradas": 105,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 5,
          "total": 5
        },
        "MOBLY": {
          "paradas": 39,
          "prod_sum": 1.825,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 601,
          "prod_sum": 10.9096,
          "total": 11
        }
      }
    },
    "2026-07-03": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 62,
          "VEDACIT": 2,
          "MOBLY": 2,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON": 61,
          "AMAZON INTERIOR": 46,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2,
          "AMAZON": 2
        },
        "NO SHOW": {
          "AMAZON MM": 3,
          "AMAZON": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 202,
        "CANCELADO PELO CLIENTE": 4,
        "NO SHOW": 12
      },
      "tot_cliente": {
        "AMAZON MM": 67,
        "VEDACIT": 2,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON": 72,
        "AMAZON INTERIOR": 46,
        "PETLOVE RS": 9
      },
      "aderOrigem": 179,
      "noShow": 12,
      "cancel": 4,
      "finalizadas": 202,
      "total": 218,
      "prod_sum": 201.5461,
      "prod_n": 211,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 3
        },
        "AMAZON": {
          "Problema mecânico": 9
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 3
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 13
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 358,
          "prod_sum": 61.65,
          "total": 62
        },
        "VEDACIT": {
          "paradas": 15,
          "prod_sum": 2,
          "total": 2
        },
        "MOBLY": {
          "paradas": 35,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 106,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 272,
          "prod_sum": 61,
          "total": 61
        },
        "AMAZON INTERIOR": {
          "paradas": 181,
          "prod_sum": 46,
          "total": 46
        },
        "PETLOVE RS": {
          "paradas": 444,
          "prod_sum": 8.8961,
          "total": 9
        }
      }
    },
    "2026-07-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 57,
          "PETLOVE RS": 11
        },
        "NO SHOW": {
          "AMAZON MM": 5
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 68,
        "NO SHOW": 5,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON MM": 63,
        "PETLOVE RS": 11
      },
      "aderOrigem": 57,
      "noShow": 5,
      "cancel": 1,
      "finalizadas": 68,
      "total": 74,
      "prod_sum": 66.3721,
      "prod_n": 68,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 5
        }
      },
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 11
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 276,
          "prod_sum": 55.7321,
          "total": 57
        },
        "PETLOVE RS": {
          "paradas": 484,
          "prod_sum": 10.64,
          "total": 11
        }
      }
    },
    "2026-07-05": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 30
        },
        "NO SHOW": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 7,
        "CANCELADO PELO CLIENTE": 30,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "AMAZON MM": 39
      },
      "aderOrigem": 7,
      "noShow": 2,
      "cancel": 30,
      "finalizadas": 7,
      "total": 39,
      "prod_sum": 7,
      "prod_n": 7,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 24,
          "prod_sum": 7,
          "total": 7
        }
      }
    },
    "2026-07-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 74,
          "AMAZON INTERIOR": 49,
          "VEDACIT": 4,
          "AMAZON MM": 63,
          "AMAZON LM": 2,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 6,
          "PETLOVE RS": 9
        },
        "NO SHOW": {
          "AMAZON": 2,
          "AMAZON MM": 5,
          "PETLOVE RS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 1,
          "MOBLY": 2,
          "AMAZON MM": 6
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 225,
        "NO SHOW": 8,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "AMAZON": 76,
        "AMAZON INTERIOR": 50,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON MM": 74,
        "AMAZON LM": 2,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 6,
        "PETLOVE RS": 10
      },
      "aderOrigem": 209,
      "noShow": 8,
      "cancel": 9,
      "finalizadas": 225,
      "total": 242,
      "prod_sum": 222.4466,
      "prod_n": 226,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 2
        },
        "AMAZON MM": {
          "Problema mecânico": 5
        },
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 5
        },
        "AMAZON INTERIOR": {
          "Trânsito": 3
        },
        "AMAZON MM": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 3
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 290,
          "prod_sum": 72.18660000000001,
          "total": 74
        },
        "AMAZON INTERIOR": {
          "paradas": 217,
          "prod_sum": 49,
          "total": 49
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 345,
          "prod_sum": 62.5758,
          "total": 63
        },
        "AMAZON LM": {
          "paradas": 87,
          "prod_sum": 1.8397999999999999,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 119,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 25,
          "prod_sum": 6,
          "total": 6
        },
        "PETLOVE RS": {
          "paradas": 440,
          "prod_sum": 8.8444,
          "total": 9
        }
      }
    },
    "2026-07-07": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 66,
          "PREMIER MG": 3,
          "AMAZON LM": 1,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 5,
          "VEDACIT": 4,
          "AMAZON": 73,
          "AMAZON INTERIOR": 32,
          "PETLOVE RS": 9
        },
        "NO SHOW": {
          "AMAZON MM": 2,
          "AMAZON": 3,
          "PETLOVE RS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4,
          "MOBLY": 2,
          "AMAZON INTERIOR": 13
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 209,
        "NO SHOW": 6,
        "CANCELADO PELO CLIENTE": 19,
        "BACKUP": 3
      },
      "tot_cliente": {
        "AMAZON MM": 72,
        "PREMIER MG": 3,
        "AMAZON LM": 1,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 5,
        "VEDACIT": 4,
        "AMAZON": 76,
        "AMAZON INTERIOR": 48,
        "PETLOVE RS": 10
      },
      "aderOrigem": 186,
      "noShow": 6,
      "cancel": 19,
      "finalizadas": 209,
      "total": 237,
      "prod_sum": 206.5964,
      "prod_n": 209,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        },
        "AMAZON": {
          "Problema mecânico": 3
        },
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 3
        },
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON LM": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 9
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 371,
          "prod_sum": 65.303,
          "total": 66
        },
        "PREMIER MG": {
          "paradas": 19,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON LM": {
          "paradas": 70,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 113,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 22,
          "prod_sum": 5,
          "total": 5
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 3.875,
          "total": 4
        },
        "AMAZON": {
          "paradas": 312,
          "prod_sum": 72.0151,
          "total": 73
        },
        "AMAZON INTERIOR": {
          "paradas": 165,
          "prod_sum": 32,
          "total": 32
        },
        "PETLOVE RS": {
          "paradas": 459,
          "prod_sum": 8.4033,
          "total": 9
        }
      }
    },
    "2026-07-08": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "AMAZON MM": 52,
          "MOBLY": 1,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 4,
          "VEDACIT": 4,
          "AMAZON": 49,
          "AMAZON INTERIOR": 32,
          "PETLOVE RS": 15
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 12,
          "AMAZON": 4,
          "AMAZON INTERIOR": 12
        },
        "NO SHOW": {
          "AMAZON MM": 2
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 176,
        "CANCELADO PELO CLIENTE": 28,
        "NO SHOW": 2,
        "BACKUP": 3
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "AMAZON MM": 66,
        "MOBLY": 1,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 4,
        "VEDACIT": 4,
        "AMAZON": 53,
        "AMAZON INTERIOR": 47,
        "PETLOVE RS": 15
      },
      "aderOrigem": 153,
      "noShow": 2,
      "cancel": 28,
      "finalizadas": 176,
      "total": 209,
      "prod_sum": 175.4031,
      "prod_n": 176,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 4
        },
        "AMAZON": {
          "Trânsito": 12
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 6
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 15,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON MM": {
          "paradas": 354,
          "prod_sum": 51.75,
          "total": 52
        },
        "MOBLY": {
          "paradas": 11,
          "prod_sum": 0.9091,
          "total": 1
        },
        "AMAZON PUDOS": {
          "paradas": 110,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 270,
          "prod_sum": 49,
          "total": 49
        },
        "AMAZON INTERIOR": {
          "paradas": 170,
          "prod_sum": 31,
          "total": 32
        },
        "PETLOVE RS": {
          "paradas": 702,
          "prod_sum": 14.744,
          "total": 15
        }
      }
    },
    "2026-07-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 51,
          "PREMIER MG": 2,
          "MOBLY": 4,
          "VEDACIT": 4,
          "PETLOVE RS": 12,
          "AMAZON LM STO AMARO": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 11
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON LM STO AMARO": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 81,
        "CANCELADO PELO CLIENTE": 11,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "AMAZON MM": 63,
        "PREMIER MG": 2,
        "MOBLY": 4,
        "VEDACIT": 4,
        "PETLOVE RS": 12,
        "AMAZON LM STO AMARO": 9
      },
      "aderOrigem": 69,
      "noShow": 2,
      "cancel": 11,
      "finalizadas": 81,
      "total": 94,
      "prod_sum": 79.1006,
      "prod_n": 81,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        },
        "AMAZON LM STO AMARO": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "Trânsito": 2
        },
        "VEDACIT": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "AMAZON LM STO AMARO": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 311,
          "prod_sum": 49.875,
          "total": 51
        },
        "PREMIER MG": {
          "paradas": 31,
          "prod_sum": 2,
          "total": 2
        },
        "MOBLY": {
          "paradas": 48,
          "prod_sum": 3.7269,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 455,
          "prod_sum": 11.8194,
          "total": 12
        },
        "AMAZON LM STO AMARO": {
          "paradas": 1171,
          "prod_sum": 7.6793000000000005,
          "total": 8
        }
      }
    },
    "2026-07-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 49,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON LM STO AMARO": 3,
          "AMAZON": 68,
          "AMAZON INTERIOR": 26,
          "PETLOVE RS": 10
        },
        "NO SHOW": {
          "AMAZON MM": 4,
          "AMAZON LM STO AMARO": 1,
          "PETLOVE RS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4,
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 21
        },
        "BACKUP": {
          "AMAZON MM": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 177,
        "NO SHOW": 6,
        "CANCELADO PELO CLIENTE": 28,
        "BACKUP": 4
      },
      "tot_cliente": {
        "AMAZON MM": 61,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON LM STO AMARO": 4,
        "AMAZON": 69,
        "AMAZON INTERIOR": 47,
        "PETLOVE RS": 11
      },
      "aderOrigem": 154,
      "noShow": 6,
      "cancel": 28,
      "finalizadas": 177,
      "total": 215,
      "prod_sum": 175.869,
      "prod_n": 178,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 4
        },
        "AMAZON LM STO AMARO": {
          "Problema mecânico": 1
        },
        "PETLOVE RS": {
          "Problema  Carregamento": 1
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON LM STO AMARO": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 14
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 4
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 354,
          "prod_sum": 49,
          "total": 49
        },
        "AMAZON PUDOS": {
          "paradas": 107,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 23,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON LM STO AMARO": {
          "paradas": 270,
          "prod_sum": 2.5378,
          "total": 3
        },
        "AMAZON": {
          "paradas": 286,
          "prod_sum": 67.66669999999999,
          "total": 68
        },
        "AMAZON INTERIOR": {
          "paradas": 163,
          "prod_sum": 26,
          "total": 26
        },
        "PETLOVE RS": {
          "paradas": 447,
          "prod_sum": 9.6645,
          "total": 10
        }
      }
    },
    "2026-07-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 46,
          "AMAZON LM STO AMARO": 4,
          "PETLOVE RS": 9
        },
        "NO SHOW": {
          "AMAZON MM": 3,
          "AMAZON LM STO AMARO": 1,
          "PETLOVE RS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 59,
        "NO SHOW": 5,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON MM": 50,
        "AMAZON LM STO AMARO": 5,
        "PETLOVE RS": 10
      },
      "aderOrigem": 50,
      "noShow": 5,
      "cancel": 1,
      "finalizadas": 59,
      "total": 65,
      "prod_sum": 57.5911,
      "prod_n": 59,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 3
        },
        "AMAZON LM STO AMARO": {
          "Problema mecânico": 1
        },
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON LM STO AMARO": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 6
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 326,
          "prod_sum": 45.427800000000005,
          "total": 46
        },
        "AMAZON LM STO AMARO": {
          "paradas": 249,
          "prod_sum": 4,
          "total": 4
        },
        "PETLOVE RS": {
          "paradas": 533,
          "prod_sum": 8.1633,
          "total": 9
        }
      }
    },
    "2026-07-12": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 5,
          "AMAZON LM STO AMARO": 1
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 14,
          "AMAZON LM STO AMARO": 3
        },
        "NO SHOW": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 6,
        "ENTREGAS FINALIZADAS": 17,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "AMAZON MM": 21,
        "AMAZON LM STO AMARO": 4
      },
      "aderOrigem": 16,
      "noShow": 2,
      "cancel": 6,
      "finalizadas": 17,
      "total": 25,
      "prod_sum": 16.9429,
      "prod_n": 17,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON LM STO AMARO": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 105,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON LM STO AMARO": {
          "paradas": 295,
          "prod_sum": 2.9429,
          "total": 3
        }
      }
    },
    "2026-07-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 44,
          "AMAZON INTERIOR": 31,
          "VEDACIT": 4,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 4,
          "AMAZON LM STO AMARO": 1,
          "AMAZON MM": 27,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 25,
          "AMAZON INTERIOR": 10,
          "MOBLY": 1,
          "AMAZON MM": 7
        },
        "NO SHOW": {
          "AMAZON": 1,
          "AMAZON LM STO AMARO": 2,
          "AMAZON MM": 3
        },
        "BACKUP": {
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 138,
        "CANCELADO PELO CLIENTE": 43,
        "NO SHOW": 6,
        "BACKUP": 3
      },
      "tot_cliente": {
        "AMAZON": 70,
        "AMAZON INTERIOR": 44,
        "VEDACIT": 4,
        "MOBLY": 1,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 4,
        "AMAZON LM STO AMARO": 3,
        "AMAZON MM": 37,
        "PETLOVE RS": 10
      },
      "aderOrigem": 123,
      "noShow": 6,
      "cancel": 43,
      "finalizadas": 138,
      "total": 190,
      "prod_sum": 158.3296,
      "prod_n": 159,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        },
        "AMAZON LM STO AMARO": {
          "Problema mecânico": 2
        },
        "AMAZON MM": {
          "Problema mecânico": 3
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 7
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 207,
          "prod_sum": 44,
          "total": 44
        },
        "AMAZON INTERIOR": {
          "paradas": 171,
          "prod_sum": 31,
          "total": 31
        },
        "VEDACIT": {
          "paradas": 30,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 109,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON LM STO AMARO": {
          "paradas": 104,
          "prod_sum": 0.8269,
          "total": 1
        },
        "AMAZON MM": {
          "paradas": 299,
          "prod_sum": 26.7231,
          "total": 27
        },
        "PETLOVE RS": {
          "paradas": 497,
          "prod_sum": 9.7796,
          "total": 10
        }
      }
    },
    "2026-07-14": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "VEDACIT": 4,
          "MOBLY": 1,
          "AMAZON MM": 34,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON": 29,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 9,
          "AMAZON INTERIOR": 12
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON": 1,
          "PETLOVE RS": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 122,
        "CANCELADO PELO CLIENTE": 21,
        "NO SHOW": 3,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "VEDACIT": 4,
        "MOBLY": 1,
        "AMAZON MM": 44,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON": 30,
        "AMAZON INTERIOR": 32,
        "PETLOVE RS": 12
      },
      "aderOrigem": 116,
      "noShow": 3,
      "cancel": 21,
      "finalizadas": 122,
      "total": 147,
      "prod_sum": 120.947,
      "prod_n": 122,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        },
        "AMAZON": {
          "Problema mecânico": 1
        },
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3.4889,
          "total": 4
        },
        "MOBLY": {
          "paradas": 24,
          "prod_sum": 0.875,
          "total": 1
        },
        "AMAZON MM": {
          "paradas": 382,
          "prod_sum": 33.8231,
          "total": 34
        },
        "AMAZON PUDOS": {
          "paradas": 107,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 23,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 232,
          "prod_sum": 29,
          "total": 29
        },
        "AMAZON INTERIOR": {
          "paradas": 150,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 620,
          "prod_sum": 10.760000000000002,
          "total": 11
        }
      }
    },
    "2026-07-15": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "VEDACIT": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 30,
          "AMAZON": 21,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON MM": 7,
          "AMAZON": 5,
          "AMAZON INTERIOR": 9
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 107,
        "CANCELADO PELO CLIENTE": 22,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "MOBLY": 1,
        "VEDACIT": 4,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 38,
        "AMAZON": 27,
        "AMAZON INTERIOR": 28,
        "PETLOVE RS": 9
      },
      "aderOrigem": 92,
      "noShow": 2,
      "cancel": 22,
      "finalizadas": 107,
      "total": 131,
      "prod_sum": 105.749,
      "prod_n": 109,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        },
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 1
        },
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON MM": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 8
        },
        "AMAZON INTERIOR": {
          "Trânsito": 2
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 8,
          "prod_sum": 2,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 23,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 363,
          "prod_sum": 29.897399999999998,
          "total": 30
        },
        "AMAZON": {
          "paradas": 174,
          "prod_sum": 21,
          "total": 21
        },
        "AMAZON INTERIOR": {
          "paradas": 158,
          "prod_sum": 18,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 514,
          "prod_sum": 8.851600000000001,
          "total": 9
        }
      }
    },
    "2026-07-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 30,
          "AMAZON": 20,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 6,
          "AMAZON": 4,
          "AMAZON INTERIOR": 9
        },
        "NO SHOW": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 111,
        "CANCELADO PELO CLIENTE": 19,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 37,
        "AMAZON": 24,
        "AMAZON INTERIOR": 27,
        "PETLOVE RS": 10
      },
      "aderOrigem": 102,
      "noShow": 1,
      "cancel": 19,
      "finalizadas": 111,
      "total": 131,
      "prod_sum": 109.2735,
      "prod_n": 111,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 6
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 2.5,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 37,
          "prod_sum": 1.95,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 111,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 32,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 366,
          "prod_sum": 30,
          "total": 30
        },
        "AMAZON": {
          "paradas": 178,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON INTERIOR": {
          "paradas": 139,
          "prod_sum": 17,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 573,
          "prod_sum": 9.8235,
          "total": 10
        }
      }
    },
    "2026-07-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 3,
          "MOBLY": 2,
          "AMAZON": 23,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 8,
          "AMAZON MM": 36,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 4,
          "AMAZON INTERIOR": 8,
          "AMAZON MM": 2
        },
        "NO SHOW": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 114,
        "CANCELADO PELO CLIENTE": 14,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON": 27,
        "AMAZON INTERIOR": 26,
        "PETLOVE RS": 8,
        "AMAZON MM": 40,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8
      },
      "aderOrigem": 105,
      "noShow": 2,
      "cancel": 14,
      "finalizadas": 114,
      "total": 130,
      "prod_sum": 113.8097,
      "prod_n": 114,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 2
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 3
        },
        "PETLOVE RS": {
          "Trânsito": 3
        },
        "AMAZON MM": {
          "Trânsito": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 19,
          "prod_sum": 3,
          "total": 3
        },
        "MOBLY": {
          "paradas": 32,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON": {
          "paradas": 201,
          "prod_sum": 23,
          "total": 23
        },
        "AMAZON INTERIOR": {
          "paradas": 141,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 452,
          "prod_sum": 7.893,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 465,
          "prod_sum": 35.9167,
          "total": 36
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        }
      }
    },
    "2026-07-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 27,
          "PETLOVE RS": 8
        },
        "NO SHOW": {
          "AMAZON MM": 4
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 35,
        "NO SHOW": 4,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "AMAZON MM": 33,
        "PETLOVE RS": 8
      },
      "aderOrigem": 34,
      "noShow": 4,
      "cancel": 2,
      "finalizadas": 35,
      "total": 41,
      "prod_sum": 34.3592,
      "prod_n": 35,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 4
        }
      },
      "drill_atraso": {
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 367,
          "prod_sum": 26.697300000000002,
          "total": 27
        },
        "PETLOVE RS": {
          "paradas": 439,
          "prod_sum": 7.661900000000001,
          "total": 8
        }
      }
    },
    "2026-07-19": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 8,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "AMAZON MM": 12
      },
      "aderOrigem": 8,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 8,
      "total": 12,
      "prod_sum": 7.4889,
      "prod_n": 8,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 77,
          "prod_sum": 7.488899999999999,
          "total": 8
        }
      }
    },
    "2026-07-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 41,
          "AMAZON INTERIOR": 29,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 29,
          "PETLOVE RS": 9
        },
        "NO SHOW": {
          "AMAZON": 3,
          "PETLOVE RS": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "AMAZON INTERIOR": 3,
          "AMAZON MM": 6
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 138,
        "NO SHOW": 4,
        "CANCELADO PELO CLIENTE": 11
      },
      "tot_cliente": {
        "AMAZON": 46,
        "AMAZON INTERIOR": 32,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 35,
        "PETLOVE RS": 10
      },
      "aderOrigem": 116,
      "noShow": 4,
      "cancel": 11,
      "finalizadas": 138,
      "total": 153,
      "prod_sum": 137.0889,
      "prod_n": 138,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 3
        },
        "PETLOVE RS": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 6
        },
        "AMAZON INTERIOR": {
          "Trânsito": 4
        },
        "AMAZON PUDOS INTERIOR": {
          "Trânsito": 3
        },
        "AMAZON MM": {
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 8
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 375,
          "prod_sum": 41,
          "total": 41
        },
        "AMAZON INTERIOR": {
          "paradas": 159,
          "prod_sum": 29,
          "total": 29
        },
        "VEDACIT": {
          "paradas": 32,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 35,
          "prod_sum": 1.8167,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 469,
          "prod_sum": 28.757099999999998,
          "total": 29
        },
        "PETLOVE RS": {
          "paradas": 468,
          "prod_sum": 8.5151,
          "total": 9
        }
      }
    },
    "2026-07-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 3,
          "PREMIER MG": 3,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON": 24,
          "AMAZON INTERIOR": 20,
          "AMAZON MM": 30,
          "PETLOVE RS": 10
        },
        "BACKUP": {
          "VEDACIT": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 5,
          "AMAZON INTERIOR": 4,
          "AMAZON MM": 2,
          "MOBLY": 1
        },
        "NO SHOW": {
          "AMAZON": 3,
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 114,
        "BACKUP": 1,
        "CANCELADO PELO CLIENTE": 12,
        "NO SHOW": 5
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "PREMIER MG": 3,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON": 32,
        "AMAZON INTERIOR": 24,
        "AMAZON MM": 34,
        "MOBLY": 1,
        "PETLOVE RS": 10
      },
      "aderOrigem": 102,
      "noShow": 5,
      "cancel": 12,
      "finalizadas": 114,
      "total": 132,
      "prod_sum": 113.1151,
      "prod_n": 115,
      "drill_noShow": {
        "AMAZON": {
          "S/O": 3
        },
        "AMAZON MM": {
          "Problema mecânico": 1,
          "Problema de saúde": 1
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "S/O": 1
        },
        "PREMIER MG": {
          "Trânsito": 2
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        },
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "Trânsito": 3,
          "Problema Familiar": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 3,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON": {
          "paradas": 220,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON INTERIOR": {
          "paradas": 138,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON MM": {
          "paradas": 460,
          "prod_sum": 29.8175,
          "total": 30
        },
        "PETLOVE RS": {
          "paradas": 499,
          "prod_sum": 9.2976,
          "total": 10
        }
      }
    },
    "2026-07-22": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "MOBLY": 1,
          "VEDACIT": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 27,
          "AMAZON": 18,
          "AMAZON INTERIOR": 20,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1,
          "AMAZON": 9,
          "AMAZON INTERIOR": 1
        },
        "NO SHOW": {
          "AMAZON": 1
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 107,
        "CANCELADO PELO CLIENTE": 11,
        "NO SHOW": 1,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "MOBLY": 1,
        "VEDACIT": 4,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 28,
        "AMAZON": 28,
        "AMAZON INTERIOR": 22,
        "PETLOVE RS": 11
      },
      "aderOrigem": 96,
      "noShow": 1,
      "cancel": 11,
      "finalizadas": 107,
      "total": 120,
      "prod_sum": 106.7037,
      "prod_n": 117,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        },
        "AMAZON MM": {
          "Trânsito": 2
        },
        "AMAZON": {
          "S/O": 1,
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "S/O": 1,
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Problema mecânico": 1,
          "Problema Familiar": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 2,
          "total": 2
        },
        "MOBLY": {
          "paradas": 18,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 408,
          "prod_sum": 26.8824,
          "total": 27
        },
        "AMAZON": {
          "paradas": 173,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON INTERIOR": {
          "paradas": 141,
          "prod_sum": 20,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 509,
          "prod_sum": 10.8213,
          "total": 11
        }
      }
    },
    "2026-07-23": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 1,
          "PREMIER MG": 3,
          "VEDACIT": 5,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 24,
          "AMAZON": 22,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 7
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1,
          "AMAZON": 5,
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 104,
        "NO SHOW": 3,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "MOBLY": 1,
        "PREMIER MG": 3,
        "VEDACIT": 5,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 26,
        "AMAZON": 29,
        "AMAZON INTERIOR": 20,
        "PETLOVE RS": 7
      },
      "aderOrigem": 100,
      "noShow": 3,
      "cancel": 8,
      "finalizadas": 104,
      "total": 115,
      "prod_sum": 103.8923,
      "prod_n": 106,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        },
        "AMAZON": {
          "Problema mecânico": 1,
          "S/O": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "S/O": 1,
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 16,
          "prod_sum": 1,
          "total": 1
        },
        "PREMIER MG": {
          "paradas": 17,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 37,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 361,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON": {
          "paradas": 221,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON INTERIOR": {
          "paradas": 140,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 421,
          "prod_sum": 6.8923,
          "total": 7
        }
      }
    },
    "2026-07-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 34,
          "VEDACIT": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON": 18,
          "AMAZON INTERIOR": 17,
          "PETLOVE RS": 8
        },
        "NO SHOW": {
          "AMAZON MM": 1
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON": 4,
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 105,
        "NO SHOW": 1,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "AMAZON MM": 35,
        "VEDACIT": 4,
        "MOBLY": 1,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON": 22,
        "AMAZON INTERIOR": 20,
        "PETLOVE RS": 8
      },
      "aderOrigem": 84,
      "noShow": 1,
      "cancel": 8,
      "finalizadas": 105,
      "total": 114,
      "prod_sum": 104.2666,
      "prod_n": 105,
      "drill_noShow": {
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 6
        },
        "VEDACIT": {
          "Trânsito": 3
        },
        "AMAZON PUDOS": {
          "S/O": 4
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 4
        },
        "AMAZON": {
          "S/O": 1,
          "Trânsito": 3
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 486,
          "prod_sum": 33.3954,
          "total": 34
        },
        "VEDACIT": {
          "paradas": 33,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON": {
          "paradas": 183,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON INTERIOR": {
          "paradas": 135,
          "prod_sum": 17,
          "total": 17
        },
        "PETLOVE RS": {
          "paradas": 401,
          "prod_sum": 7.8712,
          "total": 8
        }
      }
    },
    "2026-07-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 23,
          "PETLOVE RS": 6
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 5
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 29,
        "CANCELADO PELO CLIENTE": 5
      },
      "tot_cliente": {
        "AMAZON MM": 28,
        "PETLOVE RS": 6
      },
      "aderOrigem": 28,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 29,
      "total": 34,
      "prod_sum": 28.8404,
      "prod_n": 29,
      "drill_noShow": {},
      "drill_atraso": {
        "PETLOVE RS": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 403,
          "prod_sum": 23,
          "total": 23
        },
        "PETLOVE RS": {
          "paradas": 317,
          "prod_sum": 5.8404,
          "total": 6
        }
      }
    },
    "2026-07-26": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 5
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 9
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 5,
        "CANCELADO PELO CLIENTE": 9
      },
      "tot_cliente": {
        "AMAZON MM": 14
      },
      "aderOrigem": 5,
      "noShow": 0,
      "cancel": 9,
      "finalizadas": 5,
      "total": 14,
      "prod_sum": 4.8,
      "prod_n": 5,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 56,
          "prod_sum": 4.8,
          "total": 5
        }
      }
    },
    "2026-07-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "MOBLY": 1,
          "AMAZON": 28,
          "AMAZON INTERIOR": 25,
          "PETLOVE RS": 6,
          "AMAZON MM": 22,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 6,
          "AMAZON INTERIOR": 4,
          "AMAZON MM": 6
        },
        "NO SHOW": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 109,
        "CANCELADO PELO CLIENTE": 16,
        "NO SHOW": 2
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 1,
        "AMAZON": 34,
        "AMAZON INTERIOR": 29,
        "PETLOVE RS": 6,
        "AMAZON MM": 30,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 7
      },
      "aderOrigem": 102,
      "noShow": 2,
      "cancel": 16,
      "finalizadas": 109,
      "total": 127,
      "prod_sum": 108.5802,
      "prod_n": 109,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema Particular": 2
        }
      },
      "drill_atraso": {
        "VEDACIT": {
          "Trânsito": 1
        },
        "AMAZON": {
          "Trânsito": 1,
          "Pneu furado": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 1
        },
        "AMAZON PUDOS": {
          "Problema mecânico": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 36,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 25,
          "prod_sum": 0.68,
          "total": 1
        },
        "AMAZON": {
          "paradas": 264,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON INTERIOR": {
          "paradas": 125,
          "prod_sum": 25,
          "total": 25
        },
        "PETLOVE RS": {
          "paradas": 230,
          "prod_sum": 5.9558,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 355,
          "prod_sum": 21.9444,
          "total": 22
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 26,
          "prod_sum": 7,
          "total": 7
        }
      }
    },
    "2026-07-28": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "VEDACIT": 4,
          "MOBLY": 1,
          "AMAZON MM": 25,
          "AMAZON": 18,
          "AMAZON INTERIOR": 24,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 9,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 3,
          "AMAZON": 2,
          "AMAZON INTERIOR": 3
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 108,
        "CANCELADO PELO CLIENTE": 8,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "VEDACIT": 4,
        "MOBLY": 1,
        "AMAZON MM": 28,
        "AMAZON": 21,
        "AMAZON INTERIOR": 27,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 9,
        "PETLOVE RS": 7
      },
      "aderOrigem": 104,
      "noShow": 1,
      "cancel": 8,
      "finalizadas": 108,
      "total": 117,
      "prod_sum": 107.3514,
      "prod_n": 108,
      "drill_noShow": {
        "AMAZON": {
          "S/O": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 1
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 18,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 36,
          "prod_sum": 3.6667,
          "total": 4
        },
        "MOBLY": {
          "paradas": 18,
          "prod_sum": 1,
          "total": 1
        },
        "AMAZON MM": {
          "paradas": 367,
          "prod_sum": 24.7246,
          "total": 25
        },
        "AMAZON": {
          "paradas": 186,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON INTERIOR": {
          "paradas": 152,
          "prod_sum": 24,
          "total": 24
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        },
        "PETLOVE RS": {
          "paradas": 333,
          "prod_sum": 6.9601,
          "total": 7
        }
      }
    },
    "2026-07-29": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 6,
          "MOBLY": 1,
          "VEDACIT": 4,
          "AMAZON MM": 23,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON": 17,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 6,
          "AMAZON": 1,
          "AMAZON INTERIOR": 2
        },
        "NO SHOW": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 102,
        "CANCELADO PELO CLIENTE": 9,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "PREMIER MG": 6,
        "MOBLY": 1,
        "VEDACIT": 4,
        "AMAZON MM": 29,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON": 19,
        "AMAZON INTERIOR": 21,
        "PETLOVE RS": 7
      },
      "aderOrigem": 95,
      "noShow": 1,
      "cancel": 9,
      "finalizadas": 102,
      "total": 112,
      "prod_sum": 101.72,
      "prod_n": 102,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 2
        },
        "AMAZON PUDOS": {
          "Problema Familiar": 1,
          "S/O": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 23,
          "prod_sum": 6,
          "total": 6
        },
        "MOBLY": {
          "paradas": 13,
          "prod_sum": 0.9231,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 335,
          "prod_sum": 22.8333,
          "total": 23
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON": {
          "paradas": 182,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 148,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 344,
          "prod_sum": 6.9636,
          "total": 7
        }
      }
    },
    "2026-07-30": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "VEDACIT": 3,
          "AMAZON": 15,
          "AMAZON INTERIOR": 17,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "MOBLY": 3,
          "PETLOVE RS": 9,
          "AMAZON MM": 24
        },
        "NO SHOW": {
          "AMAZON": 1,
          "AMAZON MM": 1
        },
        "BACKUP": {
          "AMAZON": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 4,
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 98,
        "NO SHOW": 2,
        "BACKUP": 1,
        "CANCELADO PELO CLIENTE": 6
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "VEDACIT": 3,
        "AMAZON": 17,
        "AMAZON INTERIOR": 21,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "MOBLY": 3,
        "PETLOVE RS": 9,
        "AMAZON MM": 27
      },
      "aderOrigem": 94,
      "noShow": 2,
      "cancel": 6,
      "finalizadas": 98,
      "total": 107,
      "prod_sum": 97.412,
      "prod_n": 98,
      "drill_noShow": {
        "AMAZON": {
          "S/O": 1
        },
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Problema mecânico": 1,
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 19,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON": {
          "paradas": 165,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 150,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "MOBLY": {
          "paradas": 50,
          "prod_sum": 2.9,
          "total": 3
        },
        "PETLOVE RS": {
          "paradas": 402,
          "prod_sum": 8.841999999999999,
          "total": 9
        },
        "AMAZON MM": {
          "paradas": 395,
          "prod_sum": 23.67,
          "total": 24
        }
      }
    },
    "2026-07-31": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "VEDACIT": 4,
          "AMAZON": 16,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 7,
          "AMAZON MM": 25,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON INTERIOR": 3,
          "AMAZON MM": 1
        },
        "NO SHOW": {
          "AMAZON MM": 2
        },
        "BACKUP": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 98,
        "CANCELADO PELO CLIENTE": 6,
        "NO SHOW": 2,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON": 16,
        "AMAZON INTERIOR": 21,
        "PETLOVE RS": 7,
        "AMAZON MM": 29,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8
      },
      "aderOrigem": 88,
      "noShow": 2,
      "cancel": 6,
      "finalizadas": 98,
      "total": 107,
      "prod_sum": 96.9,
      "prod_n": 97,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema Particular": 2
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 3
        },
        "VEDACIT": {
          "S/O": 3
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 2
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 11,
          "prod_sum": 4,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 20,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 179,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 155,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 343,
          "prod_sum": 7,
          "total": 7
        },
        "AMAZON MM": {
          "paradas": 396,
          "prod_sum": 24.9,
          "total": 25
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 32,
          "prod_sum": 7,
          "total": 8
        }
      }
    },
    "2026-08-01": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 24,
          "PETLOVE RS": 11
        },
        "NO SHOW": {
          "AMAZON MM": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 35,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON MM": 27,
        "PETLOVE RS": 11
      },
      "aderOrigem": 34,
      "noShow": 2,
      "cancel": 1,
      "finalizadas": 35,
      "total": 38,
      "prod_sum": 34.5096,
      "prod_n": 35,
      "drill_noShow": {
        "AMAZON MM": {
          "S/O": 2
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 365,
          "prod_sum": 23.8233,
          "total": 24
        },
        "PETLOVE RS": {
          "paradas": 503,
          "prod_sum": 10.6863,
          "total": 11
        }
      }
    },
    "2026-08-02": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 7
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 1,
        "ENTREGAS FINALIZADAS": 7
      },
      "tot_cliente": {
        "AMAZON MM": 8
      },
      "aderOrigem": 0,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 7,
      "total": 8,
      "prod_sum": 6.4404,
      "prod_n": 7,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 38,
          "prod_sum": 6.4404,
          "total": 7
        }
      }
    },
    "2026-08-03": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 29,
          "AMAZON INTERIOR": 28,
          "VEDACIT": 3,
          "PREMIER MG": 5,
          "MOBLY": 2,
          "AMAZON MM": 23,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 9,
          "PETLOVE RS": 11
        },
        "NO SHOW": {
          "AMAZON": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 126,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "AMAZON": 33,
        "AMAZON INTERIOR": 28,
        "VEDACIT": 3,
        "PREMIER MG": 5,
        "MOBLY": 2,
        "AMAZON MM": 25,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 9,
        "PETLOVE RS": 11
      },
      "aderOrigem": 115,
      "noShow": 2,
      "cancel": 4,
      "finalizadas": 126,
      "total": 132,
      "prod_sum": 123.8623,
      "prod_n": 125,
      "drill_noShow": {
        "AMAZON": {
          "Problema Familiar": 2
        }
      },
      "drill_atraso": {
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "VEDACIT": {
          "S/O": 3
        },
        "PREMIER MG": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 6
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 204,
          "prod_sum": 28.9167,
          "total": 29
        },
        "AMAZON INTERIOR": {
          "paradas": 167,
          "prod_sum": 27,
          "total": 28
        },
        "VEDACIT": {
          "paradas": 21,
          "prod_sum": 3,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 28,
          "prod_sum": 4.6667000000000005,
          "total": 5
        },
        "MOBLY": {
          "paradas": 36,
          "prod_sum": 1.5625,
          "total": 2
        },
        "AMAZON MM": {
          "paradas": 386,
          "prod_sum": 22.7896,
          "total": 23
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 36,
          "prod_sum": 9,
          "total": 9
        },
        "PETLOVE RS": {
          "paradas": 556,
          "prod_sum": 10.9268,
          "total": 11
        }
      }
    },
    "2026-08-04": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 2,
          "AMAZON MM": 26,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 7,
          "AMAZON": 18,
          "AMAZON INTERIOR": 18,
          "MOBLY": 2,
          "PREMIER MG": 1,
          "PETLOVE RS": 12
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 102,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "VEDACIT": 2,
        "AMAZON MM": 26,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 7,
        "AMAZON": 20,
        "AMAZON INTERIOR": 19,
        "MOBLY": 2,
        "PREMIER MG": 1,
        "PETLOVE RS": 12
      },
      "aderOrigem": 97,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 102,
      "total": 105,
      "prod_sum": 99.7132,
      "prod_n": 100,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 2
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 6,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON MM": {
          "paradas": 387,
          "prod_sum": 26,
          "total": 26
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 28,
          "prod_sum": 7,
          "total": 7
        },
        "AMAZON": {
          "paradas": 166,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON INTERIOR": {
          "paradas": 129,
          "prod_sum": 16,
          "total": 18
        },
        "MOBLY": {
          "paradas": 37,
          "prod_sum": 1.875,
          "total": 2
        },
        "PREMIER MG": {
          "paradas": 1,
          "prod_sum": 1,
          "total": 1
        },
        "PETLOVE RS": {
          "paradas": 704,
          "prod_sum": 11.838200000000002,
          "total": 12
        }
      }
    },
    "2026-08-05": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON INTERIOR": 1
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 24,
          "AMAZON": 17,
          "AMAZON INTERIOR": 17,
          "PETLOVE RS": 10
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 3,
        "ENTREGAS FINALIZADAS": 96
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 24,
        "AMAZON": 17,
        "AMAZON INTERIOR": 18,
        "PETLOVE RS": 10
      },
      "aderOrigem": 93,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 96,
      "total": 99,
      "prod_sum": 94.8583,
      "prod_n": 95,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 1,
          "Problema mecânico": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 29,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 112,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 395,
          "prod_sum": 23.8583,
          "total": 24
        },
        "AMAZON": {
          "paradas": 176,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 125,
          "prod_sum": 16,
          "total": 17
        },
        "PETLOVE RS": {
          "paradas": 504,
          "prod_sum": 10,
          "total": 10
        }
      }
    },
    "2026-08-06": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 16,
          "AMAZON INTERIOR": 17,
          "AMAZON MM": 22,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 8,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON MM": 1
        },
        "NO SHOW": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 97,
        "CANCELADO PELO CLIENTE": 2,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "AMAZON": 17,
        "AMAZON INTERIOR": 17,
        "AMAZON MM": 24,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 8,
        "PETLOVE RS": 11
      },
      "aderOrigem": 93,
      "noShow": 1,
      "cancel": 2,
      "finalizadas": 97,
      "total": 100,
      "prod_sum": 95.9412,
      "prod_n": 97,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 184,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 126,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON MM": {
          "paradas": 345,
          "prod_sum": 21.5979,
          "total": 22
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 41,
          "prod_sum": 1.3625,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 117,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 8,
          "total": 8
        },
        "PETLOVE RS": {
          "paradas": 596,
          "prod_sum": 10.9808,
          "total": 11
        }
      }
    },
    "2026-08-07": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 1
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON MM": 27,
          "AMAZON": 16,
          "AMAZON INTERIOR": 16,
          "PETLOVE RS": 13
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 3,
        "ENTREGAS FINALIZADAS": 100
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON MM": 27,
        "AMAZON": 17,
        "AMAZON INTERIOR": 16,
        "PETLOVE RS": 13
      },
      "aderOrigem": 93,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 100,
      "total": 103,
      "prod_sum": 98.6251,
      "prod_n": 100,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS INTERIOR": {
          "S/O": 3
        },
        "AMAZON": {
          "Problema Familiar": 1,
          "Trânsito": 1
        },
        "PETLOVE RS": {
          "S/O": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 36,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 106,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 36,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 381,
          "prod_sum": 26.8667,
          "total": 27
        },
        "AMAZON": {
          "paradas": 185,
          "prod_sum": 15.1429,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 120,
          "prod_sum": 16,
          "total": 16
        },
        "PETLOVE RS": {
          "paradas": 627,
          "prod_sum": 12.6155,
          "total": 13
        }
      }
    },
    "2026-08-08": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 24,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        },
        "NO SHOW": {
          "PETLOVE RS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 35,
        "CANCELADO PELO CLIENTE": 1,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "AMAZON MM": 25,
        "PETLOVE RS": 12
      },
      "aderOrigem": 35,
      "noShow": 1,
      "cancel": 1,
      "finalizadas": 35,
      "total": 37,
      "prod_sum": 34.4096,
      "prod_n": 35,
      "drill_noShow": {
        "PETLOVE RS": {
          "S/O": 1
        }
      },
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 366,
          "prod_sum": 23.6664,
          "total": 24
        },
        "PETLOVE RS": {
          "paradas": 509,
          "prod_sum": 10.7432,
          "total": 11
        }
      }
    },
    "2026-08-09": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 8
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 8,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "AMAZON MM": 10
      },
      "aderOrigem": 8,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 8,
      "total": 10,
      "prod_sum": 8,
      "prod_n": 8,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 59,
          "prod_sum": 8,
          "total": 8
        }
      }
    },
    "2026-08-10": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 3,
          "MOBLY": 2,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON": 23,
          "AMAZON INTERIOR": 22,
          "AMAZON MM": 18,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 6,
          "AMAZON INTERIOR": 6
        },
        "BACKUP": {
          "AMAZON INTERIOR": 1
        },
        "NO SHOW": {
          "AMAZON MM": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 99,
        "CANCELADO PELO CLIENTE": 12,
        "BACKUP": 1,
        "NO SHOW": 3
      },
      "tot_cliente": {
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON": 29,
        "AMAZON INTERIOR": 29,
        "AMAZON MM": 21,
        "PETLOVE RS": 10
      },
      "aderOrigem": 94,
      "noShow": 3,
      "cancel": 12,
      "finalizadas": 99,
      "total": 115,
      "prod_sum": 97.1206,
      "prod_n": 98,
      "drill_noShow": {
        "AMAZON MM": {
          "Falta sem justificativa": 1,
          "S/O": 2
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "Trânsito": 2
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 2.375,
          "total": 3
        },
        "MOBLY": {
          "paradas": 30,
          "prod_sum": 1.8666,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 28,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON": {
          "paradas": 173,
          "prod_sum": 23,
          "total": 23
        },
        "AMAZON INTERIOR": {
          "paradas": 136,
          "prod_sum": 21,
          "total": 22
        },
        "AMAZON MM": {
          "paradas": 324,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 535,
          "prod_sum": 9.879000000000001,
          "total": 10
        }
      }
    },
    "2026-08-11": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "MOBLY": 4,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON MM": 21,
          "AMAZON": 18,
          "AMAZON INTERIOR": 17,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2,
          "AMAZON": 2,
          "AMAZON INTERIOR": 4
        },
        "NO SHOW": {
          "PETLOVE RS": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 96,
        "CANCELADO PELO CLIENTE": 8,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 4,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON MM": 23,
        "AMAZON": 20,
        "AMAZON INTERIOR": 21,
        "PETLOVE RS": 12
      },
      "aderOrigem": 96,
      "noShow": 1,
      "cancel": 8,
      "finalizadas": 96,
      "total": 105,
      "prod_sum": 95.2415,
      "prod_n": 96,
      "drill_noShow": {
        "PETLOVE RS": {
          "S/O": 1
        }
      },
      "drill_atraso": {},
      "drill_prod": {
        "VEDACIT": {
          "paradas": 17,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 65,
          "prod_sum": 3.5745,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 113,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 26,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON MM": {
          "paradas": 359,
          "prod_sum": 20.7813,
          "total": 21
        },
        "AMAZON": {
          "paradas": 207,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON INTERIOR": {
          "paradas": 124,
          "prod_sum": 17,
          "total": 17
        },
        "PETLOVE RS": {
          "paradas": 609,
          "prod_sum": 10.8857,
          "total": 11
        }
      }
    },
    "2026-08-12": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "VEDACIT": 4,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 5,
          "AMAZON MM": 24,
          "AMAZON": 17,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 1,
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 98,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 5,
        "AMAZON MM": 25,
        "AMAZON": 17,
        "AMAZON INTERIOR": 19,
        "PETLOVE RS": 10
      },
      "aderOrigem": 89,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 98,
      "total": 102,
      "prod_sum": 97.7519,
      "prod_n": 98,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "S/O": 1
        },
        "AMAZON PUDOS": {
          "S/O": 2
        },
        "AMAZON": {
          "Trânsito": 4
        },
        "PETLOVE RS": {
          "Falta de alinhamento": 1,
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 2,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 15,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 120,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 28,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON MM": {
          "paradas": 381,
          "prod_sum": 23.8643,
          "total": 24
        },
        "AMAZON": {
          "paradas": 196,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 128,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 594,
          "prod_sum": 9.8876,
          "total": 10
        }
      }
    },
    "2026-08-13": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 3,
          "PREMIER MG": 3,
          "VEDACIT": 4,
          "AMAZON PUDOS": 19,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 29,
          "AMAZON": 16,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1,
          "AMAZON": 1
        },
        "QUEBROU": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 109,
        "CANCELADO PELO CLIENTE": 2,
        "QUEBROU": 1
      },
      "tot_cliente": {
        "MOBLY": 3,
        "PREMIER MG": 3,
        "VEDACIT": 4,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 30,
        "AMAZON": 18,
        "AMAZON INTERIOR": 18,
        "PETLOVE RS": 11
      },
      "aderOrigem": 107,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 109,
      "total": 112,
      "prod_sum": 109.2682,
      "prod_n": 110,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "S/O": 1
        },
        "AMAZON": {
          "Trânsito": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 54,
          "prod_sum": 2.6486,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 26,
          "prod_sum": 2.9,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 122,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 37,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 432,
          "prod_sum": 28.7378,
          "total": 29
        },
        "AMAZON": {
          "paradas": 207,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 126,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 592,
          "prod_sum": 10.9818,
          "total": 11
        }
      }
    },
    "2026-08-14": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 4,
          "VEDACIT": 3,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON": 19,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 10,
          "AMAZON MM": 22
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 2
        },
        "QUEBROU": {
          "AMAZON PUDOS": 1
        },
        "NO SHOW": {
          "AMAZON": 1,
          "PETLOVE RS": 1,
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 100,
        "CANCELADO PELO CLIENTE": 5,
        "QUEBROU": 1,
        "NO SHOW": 4
      },
      "tot_cliente": {
        "PREMIER MG": 4,
        "VEDACIT": 3,
        "MOBLY": 2,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON": 21,
        "AMAZON INTERIOR": 20,
        "PETLOVE RS": 11,
        "AMAZON MM": 24
      },
      "aderOrigem": 97,
      "noShow": 4,
      "cancel": 5,
      "finalizadas": 100,
      "total": 110,
      "prod_sum": 100.263,
      "prod_n": 101,
      "drill_noShow": {
        "AMAZON": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "S/O": 1
        },
        "AMAZON MM": {
          "Problema mecânico": 1,
          "Problema Particular": 1
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 19,
          "prod_sum": 3.5,
          "total": 4
        },
        "VEDACIT": {
          "paradas": 21,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON PUDOS": {
          "paradas": 117,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 37,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON": {
          "paradas": 194,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON INTERIOR": {
          "paradas": 138,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 498,
          "prod_sum": 9.905800000000001,
          "total": 10
        },
        "AMAZON MM": {
          "paradas": 377,
          "prod_sum": 21.8572,
          "total": 22
        }
      }
    },
    "2026-08-15": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 20,
          "PETLOVE RS": 10
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 30,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "AMAZON MM": 22,
        "PETLOVE RS": 10
      },
      "aderOrigem": 30,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 30,
      "total": 32,
      "prod_sum": 29.4479,
      "prod_n": 30,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 412,
          "prod_sum": 19.693199999999997,
          "total": 20
        },
        "PETLOVE RS": {
          "paradas": 470,
          "prod_sum": 9.7547,
          "total": 10
        }
      }
    },
    "2026-08-16": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 15
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 3
        },
        "NO SHOW": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 15,
        "CANCELADO PELO CLIENTE": 3,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "AMAZON MM": 19
      },
      "aderOrigem": 15,
      "noShow": 1,
      "cancel": 3,
      "finalizadas": 15,
      "total": 19,
      "prod_sum": 14.8194,
      "prod_n": 15,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 135,
          "prod_sum": 14.8194,
          "total": 15
        }
      }
    },
    "2026-08-17": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON": 20,
          "AMAZON INTERIOR": 27,
          "AMAZON MM": 22,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 7,
          "MOBLY": 2,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 2,
          "AMAZON INTERIOR": 2,
          "AMAZON MM": 1
        },
        "BACKUP": {
          "AMAZON": 1,
          "AMAZON PUDOS": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 108,
        "CANCELADO PELO CLIENTE": 5,
        "BACKUP": 3
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "AMAZON": 23,
        "AMAZON INTERIOR": 29,
        "AMAZON MM": 23,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 7,
        "MOBLY": 2,
        "PETLOVE RS": 9
      },
      "aderOrigem": 103,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 108,
      "total": 116,
      "prod_sum": 107.7019,
      "prod_n": 108,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON": {
          "Problema mecânico": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 3
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON": {
          "paradas": 162,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON INTERIOR": {
          "paradas": 199,
          "prod_sum": 27,
          "total": 27
        },
        "AMAZON MM": {
          "paradas": 344,
          "prod_sum": 22,
          "total": 22
        },
        "AMAZON PUDOS": {
          "paradas": 127,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 7,
          "total": 7
        },
        "MOBLY": {
          "paradas": 37,
          "prod_sum": 1.8260999999999998,
          "total": 2
        },
        "PETLOVE RS": {
          "paradas": 491,
          "prod_sum": 8.8758,
          "total": 9
        }
      }
    },
    "2026-08-18": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 3,
          "MOBLY": 2,
          "VEDACIT": 4,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 26,
          "AMAZON": 19,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 9
        },
        "BACKUP": {
          "AMAZON PUDOS": 2,
          "AMAZON INTERIOR": 1
        },
        "NO SHOW": {
          "AMAZON MM": 1,
          "AMAZON INTERIOR": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1,
          "AMAZON": 1,
          "AMAZON INTERIOR": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 104,
        "BACKUP": 3,
        "NO SHOW": 2,
        "CANCELADO PELO CLIENTE": 4
      },
      "tot_cliente": {
        "PREMIER MG": 3,
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON PUDOS": 19,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 28,
        "AMAZON": 20,
        "AMAZON INTERIOR": 22,
        "PETLOVE RS": 9
      },
      "aderOrigem": 97,
      "noShow": 2,
      "cancel": 4,
      "finalizadas": 104,
      "total": 113,
      "prod_sum": 102.4496,
      "prod_n": 104,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema Familiar": 1
        },
        "AMAZON INTERIOR": {
          "Trânsito": 1
        }
      },
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 1
        },
        "AMAZON PUDOS": {
          "S/O": 1
        },
        "AMAZON": {
          "Trânsito": 2,
          "Organização do drive": 1,
          "Problema mecânico": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 14,
          "prod_sum": 3,
          "total": 3
        },
        "MOBLY": {
          "paradas": 34,
          "prod_sum": 1.6528,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 28,
          "prod_sum": 3.4286,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 130,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 401,
          "prod_sum": 25.5015,
          "total": 26
        },
        "AMAZON": {
          "paradas": 182,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON INTERIOR": {
          "paradas": 159,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 501,
          "prod_sum": 8.8667,
          "total": 9
        }
      }
    },
    "2026-08-19": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "VEDACIT": 4,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 28,
          "AMAZON": 17,
          "AMAZON INTERIOR": 18,
          "PETLOVE RS": 7
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 2
        },
        "NO SHOW": {
          "AMAZON MM": 1
        },
        "QUEBROU": {
          "AMAZON MM": 1
        },
        "BACKUP": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 96,
        "CANCELADO PELO CLIENTE": 5,
        "NO SHOW": 1,
        "QUEBROU": 1,
        "BACKUP": 1
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 30,
        "AMAZON": 19,
        "AMAZON INTERIOR": 20,
        "PETLOVE RS": 7
      },
      "aderOrigem": 93,
      "noShow": 1,
      "cancel": 5,
      "finalizadas": 96,
      "total": 104,
      "prod_sum": 96.5612,
      "prod_n": 97,
      "drill_noShow": {
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_atraso": {
        "AMAZON PUDOS": {
          "S/O": 1
        },
        "AMAZON": {
          "Trânsito": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 6,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 3.8571,
          "total": 4
        },
        "AMAZON PUDOS": {
          "paradas": 115,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 420,
          "prod_sum": 27.7583,
          "total": 28
        },
        "AMAZON": {
          "paradas": 185,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 155,
          "prod_sum": 18,
          "total": 18
        },
        "PETLOVE RS": {
          "paradas": 388,
          "prod_sum": 6.9458,
          "total": 7
        }
      }
    },
    "2026-08-20": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 2,
          "MOBLY": 2,
          "VEDACIT": 3,
          "AMAZON MM": 25,
          "AMAZON": 14,
          "AMAZON INTERIOR": 19,
          "PETLOVE RS": 7,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 6
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 3,
          "AMAZON": 3,
          "AMAZON PUDOS": 1
        },
        "BACKUP": {
          "AMAZON": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 94,
        "CANCELADO PELO CLIENTE": 7,
        "BACKUP": 2
      },
      "tot_cliente": {
        "PREMIER MG": 2,
        "MOBLY": 2,
        "VEDACIT": 3,
        "AMAZON MM": 28,
        "AMAZON": 19,
        "AMAZON INTERIOR": 19,
        "PETLOVE RS": 7,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 6
      },
      "aderOrigem": 91,
      "noShow": 0,
      "cancel": 7,
      "finalizadas": 94,
      "total": 103,
      "prod_sum": 93.4484,
      "prod_n": 94,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "AMAZON PUDOS": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 12,
          "prod_sum": 2,
          "total": 2
        },
        "MOBLY": {
          "paradas": 30,
          "prod_sum": 1.7334,
          "total": 2
        },
        "VEDACIT": {
          "paradas": 14,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON MM": {
          "paradas": 418,
          "prod_sum": 24.8398,
          "total": 25
        },
        "AMAZON": {
          "paradas": 143,
          "prod_sum": 14,
          "total": 14
        },
        "AMAZON INTERIOR": {
          "paradas": 148,
          "prod_sum": 19,
          "total": 19
        },
        "PETLOVE RS": {
          "paradas": 378,
          "prod_sum": 6.8751999999999995,
          "total": 7
        },
        "AMAZON PUDOS": {
          "paradas": 151,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 6,
          "total": 6
        }
      }
    },
    "2026-08-21": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON MM": 28,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON": 17,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 8
        },
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 1,
          "AMAZON": 2,
          "AMAZON INTERIOR": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 96,
        "CANCELADO PELO CLIENTE": 8
      },
      "tot_cliente": {
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON MM": 29,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON": 19,
        "AMAZON INTERIOR": 18,
        "PETLOVE RS": 8
      },
      "aderOrigem": 93,
      "noShow": 0,
      "cancel": 8,
      "finalizadas": 96,
      "total": 104,
      "prod_sum": 95.9092,
      "prod_n": 96,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS INTERIOR": {
          "S/O": 2
        },
        "AMAZON": {
          "Problema de saúde": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 23,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 449,
          "prod_sum": 28,
          "total": 28
        },
        "AMAZON PUDOS": {
          "paradas": 162,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON": {
          "paradas": 168,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 145,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 407,
          "prod_sum": 7.9092,
          "total": 8
        }
      }
    },
    "2026-08-22": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 23,
          "PETLOVE RS": 11
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 3
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 34,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "AMAZON MM": 26,
        "PETLOVE RS": 11
      },
      "aderOrigem": 34,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 34,
      "total": 37,
      "prod_sum": 33.2477,
      "prod_n": 34,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 378,
          "prod_sum": 22.705600000000004,
          "total": 23
        },
        "PETLOVE RS": {
          "paradas": 485,
          "prod_sum": 10.542100000000001,
          "total": 11
        }
      }
    },
    "2026-08-23": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 14
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 4,
        "ENTREGAS FINALIZADAS": 14
      },
      "tot_cliente": {
        "AMAZON MM": 18
      },
      "aderOrigem": 13,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 14,
      "total": 18,
      "prod_sum": 14,
      "prod_n": 14,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "Problema mecânico": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 130,
          "prod_sum": 14,
          "total": 14
        }
      }
    },
    "2026-08-24": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON": 19,
          "AMAZON INTERIOR": 22,
          "VEDACIT": 4,
          "MOBLY": 2,
          "AMAZON MM": 29,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 7,
          "PETLOVE RS": 8
        },
        "NO SHOW": {
          "AMAZON": 2,
          "AMAZON MM": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON": 1,
          "AMAZON INTERIOR": 2
        },
        "BACKUP": {
          "AMAZON": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 108,
        "NO SHOW": 4,
        "CANCELADO PELO CLIENTE": 3,
        "BACKUP": 1
      },
      "tot_cliente": {
        "AMAZON": 23,
        "AMAZON INTERIOR": 24,
        "VEDACIT": 4,
        "MOBLY": 2,
        "AMAZON MM": 31,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 7,
        "PETLOVE RS": 8
      },
      "aderOrigem": 105,
      "noShow": 4,
      "cancel": 3,
      "finalizadas": 108,
      "total": 116,
      "prod_sum": 106.8426,
      "prod_n": 108,
      "drill_noShow": {
        "AMAZON": {
          "Problema mecânico": 1,
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 2
        }
      },
      "drill_atraso": {
        "AMAZON": {
          "Problema mecânico": 1
        },
        "AMAZON PUDOS": {
          "Problema Particular": 1
        }
      },
      "drill_prod": {
        "AMAZON": {
          "paradas": 149,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON INTERIOR": {
          "paradas": 167,
          "prod_sum": 22,
          "total": 22
        },
        "VEDACIT": {
          "paradas": 22,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 27,
          "prod_sum": 1.6111,
          "total": 2
        },
        "AMAZON MM": {
          "paradas": 439,
          "prod_sum": 28.3767,
          "total": 29
        },
        "AMAZON PUDOS": {
          "paradas": 124,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 44,
          "prod_sum": 7,
          "total": 7
        },
        "PETLOVE RS": {
          "paradas": 367,
          "prod_sum": 7.854799999999999,
          "total": 8
        }
      }
    },
    "2026-08-25": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 3,
          "PREMIER MG": 3,
          "VEDACIT": 4,
          "AMAZON MM": 29,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 8,
          "AMAZON": 20,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 9
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2,
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 109,
        "CANCELADO PELO CLIENTE": 3
      },
      "tot_cliente": {
        "MOBLY": 3,
        "PREMIER MG": 3,
        "VEDACIT": 4,
        "AMAZON MM": 31,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 8,
        "AMAZON": 20,
        "AMAZON INTERIOR": 16,
        "PETLOVE RS": 9
      },
      "aderOrigem": 108,
      "noShow": 0,
      "cancel": 3,
      "finalizadas": 109,
      "total": 112,
      "prod_sum": 107.9,
      "prod_n": 109,
      "drill_noShow": {},
      "drill_atraso": {
        "PREMIER MG": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 40,
          "prod_sum": 1.9333,
          "total": 3
        },
        "PREMIER MG": {
          "paradas": 10,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 24,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 478,
          "prod_sum": 29,
          "total": 29
        },
        "AMAZON PUDOS": {
          "paradas": 124,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 43,
          "prod_sum": 8,
          "total": 8
        },
        "AMAZON": {
          "paradas": 192,
          "prod_sum": 20,
          "total": 20
        },
        "AMAZON INTERIOR": {
          "paradas": 159,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 429,
          "prod_sum": 8.9667,
          "total": 9
        }
      }
    },
    "2026-08-26": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 1,
          "AMAZON": 1
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "PREMIER MG": 2,
          "AMAZON PUDOS": 16,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 28,
          "AMAZON": 17,
          "AMAZON INTERIOR": 16,
          "PETLOVE RS": 8
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 4,
        "ENTREGAS FINALIZADAS": 97
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "PREMIER MG": 2,
        "AMAZON PUDOS": 16,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 29,
        "AMAZON": 18,
        "AMAZON INTERIOR": 16,
        "PETLOVE RS": 8
      },
      "aderOrigem": 93,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 97,
      "total": 101,
      "prod_sum": 96.9148,
      "prod_n": 97,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS INTERIOR": {
          "Problema Particular": 1
        },
        "AMAZON": {
          "Trânsito": 1,
          "Organização do drive": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 27,
          "prod_sum": 4,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 13,
          "prod_sum": 2,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 25,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 34,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 414,
          "prod_sum": 27.95,
          "total": 28
        },
        "AMAZON": {
          "paradas": 181,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON INTERIOR": {
          "paradas": 138,
          "prod_sum": 16,
          "total": 16
        },
        "PETLOVE RS": {
          "paradas": 423,
          "prod_sum": 7.9648,
          "total": 8
        }
      }
    },
    "2026-08-27": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 4,
          "PREMIER MG": 3,
          "VEDACIT": 5,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON": 16,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 8,
          "AMAZON MM": 25
        },
        "BACKUP": {
          "AMAZON": 2
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 2
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 97,
        "BACKUP": 2,
        "CANCELADO PELO CLIENTE": 2
      },
      "tot_cliente": {
        "MOBLY": 4,
        "PREMIER MG": 3,
        "VEDACIT": 5,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON": 18,
        "AMAZON INTERIOR": 15,
        "PETLOVE RS": 8,
        "AMAZON MM": 27
      },
      "aderOrigem": 96,
      "noShow": 0,
      "cancel": 2,
      "finalizadas": 97,
      "total": 101,
      "prod_sum": 96.4855,
      "prod_n": 97,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 56,
          "prod_sum": 3.55,
          "total": 4
        },
        "PREMIER MG": {
          "paradas": 20,
          "prod_sum": 3,
          "total": 3
        },
        "VEDACIT": {
          "paradas": 31,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 121,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 35,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON": {
          "paradas": 168,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 139,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 425,
          "prod_sum": 7.9355,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 382,
          "prod_sum": 25,
          "total": 25
        }
      }
    },
    "2026-08-28": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON MM": 2,
          "AMAZON": 1
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 5,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON MM": 26,
          "AMAZON": 16,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 8
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 5,
        "ENTREGAS FINALIZADAS": 91
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 5,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON MM": 28,
        "AMAZON": 17,
        "AMAZON INTERIOR": 15,
        "PETLOVE RS": 8
      },
      "aderOrigem": 84,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 91,
      "total": 96,
      "prod_sum": 90.7573,
      "prod_n": 91,
      "drill_noShow": {},
      "drill_atraso": {
        "VEDACIT": {
          "S/O": 2
        },
        "AMAZON": {
          "Problema mecânico": 1,
          "Trânsito": 2
        },
        "AMAZON INTERIOR": {
          "S/O": 2
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 29,
          "prod_sum": 5,
          "total": 5
        },
        "AMAZON PUDOS": {
          "paradas": 121,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 42,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 468,
          "prod_sum": 25.9129,
          "total": 26
        },
        "AMAZON": {
          "paradas": 203,
          "prod_sum": 16,
          "total": 16
        },
        "AMAZON INTERIOR": {
          "paradas": 135,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 367,
          "prod_sum": 7.8444,
          "total": 8
        }
      }
    },
    "2026-08-29": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "PETLOVE RS": 8,
          "AMAZON MM": 21
        },
        "NO SHOW": {
          "AMAZON MM": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 29,
        "NO SHOW": 1,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "PETLOVE RS": 8,
        "AMAZON MM": 23
      },
      "aderOrigem": 29,
      "noShow": 1,
      "cancel": 1,
      "finalizadas": 29,
      "total": 31,
      "prod_sum": 28.8201,
      "prod_n": 29,
      "drill_noShow": {
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_atraso": {},
      "drill_prod": {
        "PETLOVE RS": {
          "paradas": 368,
          "prod_sum": 7.861800000000001,
          "total": 8
        },
        "AMAZON MM": {
          "paradas": 372,
          "prod_sum": 20.9583,
          "total": 21
        }
      }
    },
    "2026-08-30": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 4
        },
        "ENTREGAS FINALIZADAS": {
          "AMAZON MM": 11
        },
        "NO SHOW": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 4,
        "ENTREGAS FINALIZADAS": 11,
        "NO SHOW": 1
      },
      "tot_cliente": {
        "AMAZON MM": 16
      },
      "aderOrigem": 10,
      "noShow": 1,
      "cancel": 4,
      "finalizadas": 11,
      "total": 16,
      "prod_sum": 10.5778,
      "prod_n": 11,
      "drill_noShow": {
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "AMAZON MM": {
          "paradas": 98,
          "prod_sum": 10.5778,
          "total": 11
        }
      }
    },
    "2026-08-31": {
      "cruzada": {
        "ENTREGAS FINALIZADAS": {
          "AMAZON INTERIOR": 19,
          "AMAZON": 19,
          "AMAZON PUDOS": 18,
          "AMAZON PUDOS INTERIOR": 6,
          "VEDACIT": 4,
          "MOBLY": 3,
          "AMAZON MM": 21,
          "PETLOVE RS": 7
        },
        "BACKUP": {
          "AMAZON": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON MM": 1
        }
      },
      "tot_status": {
        "ENTREGAS FINALIZADAS": 97,
        "BACKUP": 1,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "AMAZON INTERIOR": 19,
        "AMAZON": 20,
        "AMAZON PUDOS": 18,
        "AMAZON PUDOS INTERIOR": 6,
        "VEDACIT": 4,
        "MOBLY": 3,
        "AMAZON MM": 22,
        "PETLOVE RS": 7
      },
      "aderOrigem": 75,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 97,
      "total": 99,
      "prod_sum": 96.5557,
      "prod_n": 97,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON INTERIOR": {
          "S/O": 11
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 3
        },
        "VEDACIT": {
          "S/O": 1
        },
        "AMAZON MM": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "S/O": 6
        }
      },
      "drill_prod": {
        "AMAZON INTERIOR": {
          "paradas": 155,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON": {
          "paradas": 200,
          "prod_sum": 19,
          "total": 19
        },
        "AMAZON PUDOS": {
          "paradas": 124,
          "prod_sum": 18,
          "total": 18
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 36,
          "prod_sum": 6,
          "total": 6
        },
        "VEDACIT": {
          "paradas": 25,
          "prod_sum": 4,
          "total": 4
        },
        "MOBLY": {
          "paradas": 56,
          "prod_sum": 2.7108,
          "total": 3
        },
        "AMAZON MM": {
          "paradas": 345,
          "prod_sum": 20.909100000000002,
          "total": 21
        },
        "PETLOVE RS": {
          "paradas": 414,
          "prod_sum": 6.9358,
          "total": 7
        }
      }
    },
    "2026-09-01": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 1,
          "AMAZON MM": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 1
        },
        "ENTREGAS FINALIZADAS": {
          "MOBLY": 1,
          "VEDACIT": 2,
          "AMAZON PUDOS": 17,
          "AMAZON PUDOS INTERIOR": 6,
          "PREMIER MG": 6,
          "AMAZON MM": 21,
          "AMAZON": 15,
          "AMAZON INTERIOR": 14,
          "PETLOVE RS": 11
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 5,
        "ENTREGAS FINALIZADAS": 93
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 2,
        "AMAZON PUDOS": 17,
        "AMAZON PUDOS INTERIOR": 6,
        "PREMIER MG": 6,
        "AMAZON MM": 23,
        "AMAZON": 16,
        "AMAZON INTERIOR": 15,
        "PETLOVE RS": 11
      },
      "aderOrigem": 91,
      "noShow": 0,
      "cancel": 5,
      "finalizadas": 93,
      "total": 98,
      "prod_sum": 90.0191,
      "prod_n": 93,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "MOBLY": {
          "paradas": 13,
          "prod_sum": 0.7692,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 14,
          "prod_sum": 1.4285999999999999,
          "total": 2
        },
        "AMAZON PUDOS": {
          "paradas": 120,
          "prod_sum": 17,
          "total": 17
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 36,
          "prod_sum": 6,
          "total": 6
        },
        "PREMIER MG": {
          "paradas": 32,
          "prod_sum": 4,
          "total": 6
        },
        "AMAZON MM": {
          "paradas": 338,
          "prod_sum": 20.923099999999998,
          "total": 21
        },
        "AMAZON": {
          "paradas": 143,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON INTERIOR": {
          "paradas": 136,
          "prod_sum": 14,
          "total": 14
        },
        "PETLOVE RS": {
          "paradas": 462,
          "prod_sum": 10.898200000000001,
          "total": 11
        }
      }
    },
    "2026-09-02": {
      "cruzada": {
        "CANCELADO PELO CLIENTE": {
          "MOBLY": 2,
          "AMAZON": 1,
          "AMAZON INTERIOR": 1
        },
        "ENTREGAS FINALIZADAS": {
          "PREMIER MG": 1,
          "VEDACIT": 3,
          "AMAZON MM": 29,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 7,
          "AMAZON": 13,
          "AMAZON INTERIOR": 14,
          "PETLOVE RS": 8
        },
        "EM TRANSITO": {
          "PREMIER MG": 1
        }
      },
      "tot_status": {
        "CANCELADO PELO CLIENTE": 4,
        "ENTREGAS FINALIZADAS": 90,
        "EM TRANSITO": 1
      },
      "tot_cliente": {
        "MOBLY": 2,
        "PREMIER MG": 2,
        "VEDACIT": 3,
        "AMAZON MM": 29,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 7,
        "AMAZON": 14,
        "AMAZON INTERIOR": 15,
        "PETLOVE RS": 8
      },
      "aderOrigem": 82,
      "noShow": 0,
      "cancel": 4,
      "finalizadas": 90,
      "total": 95,
      "prod_sum": 90.4568,
      "prod_n": 91,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 4
        },
        "AMAZON PUDOS": {
          "S/O": 2
        },
        "AMAZON PUDOS INTERIOR": {
          "S/O": 1
        },
        "AMAZON": {
          "S/O": 1
        }
      },
      "drill_prod": {
        "PREMIER MG": {
          "paradas": 9,
          "prod_sum": 1,
          "total": 1
        },
        "VEDACIT": {
          "paradas": 21,
          "prod_sum": 3,
          "total": 3
        },
        "AMAZON MM": {
          "paradas": 422,
          "prod_sum": 28.9583,
          "total": 29
        },
        "AMAZON PUDOS": {
          "paradas": 117,
          "prod_sum": 15,
          "total": 15
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 38,
          "prod_sum": 7,
          "total": 7
        },
        "AMAZON": {
          "paradas": 159,
          "prod_sum": 13,
          "total": 13
        },
        "AMAZON INTERIOR": {
          "paradas": 135,
          "prod_sum": 14,
          "total": 14
        },
        "PETLOVE RS": {
          "paradas": 415,
          "prod_sum": 7.9429,
          "total": 8
        }
      }
    },
    "2026-09-03": {
      "cruzada": {
        "EM TRANSITO": {
          "MOBLY": 2,
          "PETLOVE RS": 2
        },
        "ENTREGAS FINALIZADAS": {
          "VEDACIT": 4,
          "AMAZON MM": 32,
          "AMAZON PUDOS": 12,
          "AMAZON PUDOS INTERIOR": 6,
          "AMAZON": 13,
          "AMAZON INTERIOR": 15,
          "PETLOVE RS": 7
        },
        "A CAMINHO DO CD": {
          "AMAZON PUDOS": 3,
          "AMAZON": 1
        },
        "CANCELADO PELO CLIENTE": {
          "AMAZON INTERIOR": 1
        }
      },
      "tot_status": {
        "EM TRANSITO": 4,
        "ENTREGAS FINALIZADAS": 89,
        "A CAMINHO DO CD": 4,
        "CANCELADO PELO CLIENTE": 1
      },
      "tot_cliente": {
        "MOBLY": 2,
        "VEDACIT": 4,
        "AMAZON MM": 32,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "AMAZON": 14,
        "AMAZON INTERIOR": 16,
        "PETLOVE RS": 9
      },
      "aderOrigem": 83,
      "noShow": 0,
      "cancel": 1,
      "finalizadas": 89,
      "total": 98,
      "prod_sum": 94.2472,
      "prod_n": 97,
      "drill_noShow": {},
      "drill_atraso": {
        "AMAZON MM": {
          "S/O": 3
        },
        "AMAZON": {
          "S/O": 1
        },
        "AMAZON INTERIOR": {
          "S/O": 1
        },
        "PETLOVE RS": {
          "Problema Familiar": 1
        }
      },
      "drill_prod": {
        "VEDACIT": {
          "paradas": 26,
          "prod_sum": 4,
          "total": 4
        },
        "AMAZON MM": {
          "paradas": 451,
          "prod_sum": 32,
          "total": 32
        },
        "AMAZON PUDOS": {
          "paradas": 94,
          "prod_sum": 12,
          "total": 12
        },
        "AMAZON PUDOS INTERIOR": {
          "paradas": 33,
          "prod_sum": 6,
          "total": 6
        },
        "AMAZON": {
          "paradas": 128,
          "prod_sum": 13,
          "total": 13
        },
        "AMAZON INTERIOR": {
          "paradas": 129,
          "prod_sum": 15,
          "total": 15
        },
        "PETLOVE RS": {
          "paradas": 294,
          "prod_sum": 7,
          "total": 7
        }
      }
    },
    "2026-09-04": {
      "cruzada": {
        "MOTORISTA AGENDADO": {
          "PREMIER MG": 1,
          "AMAZON MM": 24,
          "VEDACIT": 4,
          "AMAZON PUDOS": 15,
          "AMAZON PUDOS INTERIOR": 6,
          "MOBLY": 2
        }
      },
      "tot_status": {
        "MOTORISTA AGENDADO": 52
      },
      "tot_cliente": {
        "PREMIER MG": 1,
        "AMAZON MM": 24,
        "VEDACIT": 4,
        "AMAZON PUDOS": 15,
        "AMAZON PUDOS INTERIOR": 6,
        "MOBLY": 2
      },
      "aderOrigem": 0,
      "noShow": 0,
      "cancel": 0,
      "finalizadas": 0,
      "total": 52,
      "prod_sum": 0,
      "prod_n": 5,
      "drill_noShow": {},
      "drill_atraso": {},
      "drill_prod": {}
    }
  },
  "drill": {
    "noShow": {
      "AMAZON": {
        "Problema mecânico": 74,
        "S/O": 8,
        "Problema Familiar": 2
      },
      "AMAZON INTERIOR": {
        "Problema mecânico": 4,
        "Trânsito": 1
      },
      "AMAZON LM": {
        "Problema mecânico": 2
      },
      "AMAZON LM 8HRS": {
        "Problema mecânico": 3
      },
      "AMAZON LM STO AMARO": {
        "Problema mecânico": 5
      },
      "AMAZON MM": {
        "Problema mecânico": 58,
        "Problema de saúde": 1,
        "S/O": 9,
        "Problema Particular": 5,
        "Falta sem justificativa": 1,
        "Problema Familiar": 1
      },
      "PETLOVE RS": {
        "Problema mecânico": 8,
        "Problema  Carregamento": 1,
        "S/O": 3
      }
    },
    "atraso": {
      "AMAZON": {
        "Trânsito": 651,
        "S/O": 5,
        "Pneu furado": 1,
        "Problema mecânico": 6,
        "Problema Familiar": 1,
        "Organização do drive": 2,
        "Problema de saúde": 1
      },
      "AMAZON INTERIOR": {
        "Trânsito": 123,
        "S/O": 37
      },
      "AMAZON LM": {
        "Trânsito": 136
      },
      "AMAZON LM 10HRS": {
        "Trânsito": 12
      },
      "AMAZON LM 4 HRS": {
        "Trânsito": 2
      },
      "AMAZON LM 6HRS": {
        "Trânsito": 8
      },
      "AMAZON LM 8HRS": {
        "Trânsito": 130
      },
      "AMAZON LM STO AMARO": {
        "Trânsito": 11
      },
      "AMAZON MM": {
        "Trânsito": 47,
        "S/O": 30,
        "Problema mecânico": 1
      },
      "AMAZON PUDOS": {
        "Trânsito": 373,
        "S/O": 12,
        "Problema mecânico": 1,
        "Problema Familiar": 1,
        "Problema Particular": 1
      },
      "AMAZON PUDOS INTERIOR": {
        "Trânsito": 10,
        "S/O": 20,
        "Problema Particular": 1
      },
      "MOBLY": {
        "Trânsito": 56
      },
      "PETLOVE RS": {
        "Trânsito": 237,
        "Problema Familiar": 3,
        "Problema mecânico": 1,
        "S/O": 9,
        "Falta de alinhamento": 1
      },
      "PREMIER MG": {
        "Trânsito": 77,
        "S/O": 9
      },
      "PREMIER SP": {
        "Trânsito": 5
      },
      "VEDACIT": {
        "Trânsito": 167,
        "S/O": 13
      }
    },
    "produtividade": {
      "AMAZON": {
        "S/O": 3109,
        "Trânsito": 700,
        "Problema mecânico": 8,
        "Pneu furado": 1,
        "Problema Familiar": 1,
        "Organização do drive": 2,
        "Problema de saúde": 1
      },
      "AMAZON INTERIOR": {
        "S/O": 1845,
        "Trânsito": 123,
        "Problema mecânico": 3,
        "Problema Familiar": 1
      },
      "AMAZON LM": {
        "S/O": 769,
        "Trânsito": 136
      },
      "AMAZON LM 10HRS": {
        "S/O": 133,
        "Trânsito": 12
      },
      "AMAZON LM 4 HRS": {
        "Trânsito": 2,
        "S/O": 1
      },
      "AMAZON LM 6HRS": {
        "S/O": 15,
        "Trânsito": 8
      },
      "AMAZON LM 8HRS": {
        "S/O": 294,
        "Trânsito": 130
      },
      "AMAZON LM STO AMARO": {
        "S/O": 13,
        "Trânsito": 11
      },
      "AMAZON MM": {
        "S/O": 1789,
        "Trânsito": 158,
        "Problema mecânico": 2
      },
      "AMAZON PUDOS": {
        "S/O": 2725,
        "Trânsito": 373,
        "Problema mecânico": 1,
        "Problema Familiar": 1,
        "Problema Particular": 2
      },
      "AMAZON PUDOS INTERIOR": {
        "Trânsito": 10,
        "S/O": 376,
        "Problema Particular": 1
      },
      "MOBLY": {
        "S/O": 163,
        "Trânsito": 56
      },
      "PETLOVE RS": {
        "S/O": 1192,
        "Trânsito": 238,
        "Problema Familiar": 3,
        "Problema mecânico": 1,
        "Falta de alinhamento": 1
      },
      "PREMIER MG": {
        "Trânsito": 85,
        "S/O": 195
      },
      "PREMIER SP": {
        "S/O": 22,
        "Trânsito": 5
      },
      "VEDACIT": {
        "S/O": 328,
        "Trânsito": 167
      }
    }
  },
  "resumo": {
    "noShowPorCliente": {
      "AMAZON": 84,
      "AMAZON INTERIOR": 5,
      "AMAZON LM": 2,
      "AMAZON LM 8HRS": 3,
      "AMAZON LM STO AMARO": 5,
      "AMAZON MM": 75,
      "PETLOVE RS": 12
    },
    "atrasoPorCliente": {
      "AMAZON": 667,
      "AMAZON INTERIOR": 160,
      "AMAZON LM": 136,
      "AMAZON LM 10HRS": 12,
      "AMAZON LM 4 HRS": 2,
      "AMAZON LM 6HRS": 8,
      "AMAZON LM 8HRS": 130,
      "AMAZON LM STO AMARO": 11,
      "AMAZON MM": 78,
      "AMAZON PUDOS": 388,
      "AMAZON PUDOS INTERIOR": 31,
      "MOBLY": 56,
      "PETLOVE RS": 251,
      "PREMIER MG": 86,
      "PREMIER SP": 5,
      "VEDACIT": 180
    },
    "produtividadePorCliente": {
      "AMAZON": {
        "paradas": 26940,
        "produtividade": 0.9975,
        "total": 3822
      },
      "AMAZON INTERIOR": {
        "paradas": 12515,
        "produtividade": 0.9987,
        "total": 1972
      },
      "AMAZON LM": {
        "paradas": 69617,
        "produtividade": 0.982,
        "total": 905
      },
      "AMAZON LM 10HRS": {
        "paradas": 23910,
        "produtividade": 0.9883,
        "total": 145
      },
      "AMAZON LM 4 HRS": {
        "paradas": 77,
        "produtividade": 0.8189,
        "total": 3
      },
      "AMAZON LM 6HRS": {
        "paradas": 943,
        "produtividade": 0.9798,
        "total": 23
      },
      "AMAZON LM 8HRS": {
        "paradas": 33175,
        "produtividade": 0.9644,
        "total": 424
      },
      "AMAZON LM STO AMARO": {
        "paradas": 2577,
        "produtividade": 0.9321,
        "total": 24
      },
      "AMAZON MM": {
        "paradas": 22765,
        "produtividade": 0.9909,
        "total": 1949
      },
      "AMAZON PUDOS": {
        "paradas": 15466,
        "produtividade": 0.9999,
        "total": 3102
      },
      "AMAZON PUDOS INTERIOR": {
        "paradas": 1880,
        "produtividade": 1,
        "total": 387
      },
      "MOBLY": {
        "paradas": 3657,
        "produtividade": 0.8813,
        "total": 219
      },
      "PETLOVE RS": {
        "paradas": 65442,
        "produtividade": 0.9824,
        "total": 1435
      },
      "PREMIER MG": {
        "paradas": 1399,
        "produtividade": 0.9818,
        "total": 280
      },
      "PREMIER SP": {
        "paradas": 59,
        "produtividade": 0.9012,
        "total": 27
      },
      "VEDACIT": {
        "paradas": 3496,
        "produtividade": 0.9546,
        "total": 495
      }
    }
  }
};
