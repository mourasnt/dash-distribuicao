#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Gera src/data.js com dados agregados a partir da planilha."""
import pandas as pd
import json

df = pd.read_excel('Status Carregamento .xlsx', header=1)
cols = [str(c).strip() for c in df.columns]
df.columns = cols

def find_col(substr):
    for c in df.columns:
        if substr.lower() in c.lower():
            return c
    raise KeyError(substr)

COL_PLACA = find_col('laca')
COL_HORARIO = find_col('Status do hor')
COL_OCORRENCIA = find_col('Ocorr')
COL_PROD = find_col('Produtividade')
COL_PARADAS = find_col('Paradas')
COL_DATA = find_col('Data')
COL_ROMANEIO = find_col('Romaneio')
COL_NOME = find_col('Nome')

df['CLIENTE'] = df['CLIENTE'].fillna('SEM CLIENTE').astype(str)

# Desconsidera cargas sem cliente (não entram em nenhum cálculo)
df = df[df['CLIENTE'] != 'SEM CLIENTE'].copy()
df['PROD'] = pd.to_numeric(df[COL_PROD], errors='coerce')
df['PARADAS'] = pd.to_numeric(df[COL_PARADAS], errors='coerce')
df['DATA'] = pd.to_datetime(df[COL_DATA], errors='coerce')
df['STATUS'] = df['STATUS'].fillna('SEM STATUS').astype(str)
df['HORARIO'] = df[COL_HORARIO].fillna('').astype(str).str.strip()
df['OCORRENCIA'] = df[COL_OCORRENCIA].fillna('').astype(str)
df['ROMANEIO'] = df[COL_ROMANEIO].fillna('').astype(str)
df['PLACA'] = df[COL_PLACA].fillna('').astype(str)
df['NOME'] = df[COL_NOME].fillna('').astype(str).str.strip()

total = len(df)
no_show = (df['STATUS'] == 'NO SHOW').sum()
cancelados = (df['STATUS'] == 'CANCELADO PELO CLIENTE').sum()
finalizadas = (df['STATUS'] == 'ENTREGAS FINALIZADAS').sum()
aderencia_origem_count = ((df['HORARIO'] == 'NO PRAZO') & (df['STATUS'] == 'ENTREGAS FINALIZADAS')).sum()
produtividade_media = df['PROD'].mean()

status_ordem = [
    'ENTREGAS FINALIZADAS', 'CANCELADO PELO CLIENTE', 'NO SHOW',
    'BACKUP', 'QUEBROU', 'EM TRANSITO', 'MOTORISTA AGENDADO',
    'A CAMINHO DO CD', 'SEM STATUS',
]
clientes = sorted([c for c in df['CLIENTE'].unique() if c != 'SEM CLIENTE'])

# Tabela cruzada: status x cliente
cruzada = {}
status_presentes = sorted(df['STATUS'].unique())
for st in status_presentes:
    cruzada[st] = {}
    for cl in clientes:
        cruzada[st][cl] = int(((df['STATUS'] == st) & (df['CLIENTE'] == cl)).sum())

# Totais por status e por cliente
total_por_status = {st: int((df['STATUS'] == st).sum()) for st in status_presentes}
total_por_cliente = {cl: int((df['CLIENTE'] == cl).sum()) for cl in clientes}

# Datas min/max
data_min = df['DATA'].min().strftime('%Y-%m-%d') if pd.notna(df['DATA'].min()) else None
data_max = df['DATA'].max().strftime('%Y-%m-%d') if pd.notna(df['DATA'].max()) else None

# ---------- DRILL-DOWNS (por cliente: quantidade + ocorrencias agregadas) ----------

def ocorrencias_por(mask):
    """Retorna (quantidade_por_cliente, ocorrencias_por_cliente)."""
    sub = df[mask]
    qtd = {}
    occ = {}
    for cl in clientes:
        s = sub[sub['CLIENTE'] == cl]
        if len(s) == 0:
            continue
        qtd[cl] = int(len(s))
        oc = {}
        for o in s['OCORRENCIA']:
            key = (o if o else 'S/O').strip()
            oc[key] = oc.get(key, 0) + 1
        occ[cl] = oc
    return qtd, occ

# No Show
no_show_por_cliente, no_show_ocorrencias = ocorrencias_por(df['STATUS'] == 'NO SHOW')

# Atrasos origem: status=ENTREGAS FINALIZADAS e horario=FORA DO PRAZO
atraso_mask = (df['STATUS'] == 'ENTREGAS FINALIZADAS') & (df['HORARIO'] == 'FORA DO PRAZO')
atraso_por_cliente, atraso_ocorrencias = ocorrencias_por(atraso_mask)

# Produtividade: por cliente -> paradas, prod media, total
prod_por_cliente = {}
for cl in clientes:
    s = df[(df['STATUS'] == 'ENTREGAS FINALIZADAS') & (df['CLIENTE'] == cl)]
    if len(s) == 0:
        continue
    paradas = int(s['PARADAS'].sum(skipna=True))
    prod = float(s['PROD'].mean()) if s['PROD'].notna().any() else 0
    prod_por_cliente[cl] = {'paradas': paradas, 'produtividade': round(prod, 4), 'total': int(len(s))}

# Ocorrencias de produtividade (entregas finalizadas)
_, prod_ocorrencias = ocorrencias_por(df['STATUS'] == 'ENTREGAS FINALIZADAS')

# ---- AGREGADOS DIARIOS (para filtro por data) ----
# diario[data] = {"cruzada": {status: {cliente: n}}, "tot_status": {status: n},
#                 "tot_cliente": {cliente: n}, "aderOrigem": n, "noShow": n, "cancel": n,
#                 "finalizadas": n, "prod_sum": x, "prod_w": y}
diario = {}
df['DATASTR'] = df['DATA'].dt.strftime('%Y-%m-%d')

def occ_map(sub):
    """{cliente: {ocorrencia: n}} a partir de um sub-DataFrame."""
    out = {}
    for _, r in sub.iterrows():
        cl = r['CLIENTE']
        o = str(r['OCORRENCIA']).strip() or 'S/O'
        out.setdefault(cl, {})
        out[cl][o] = out[cl].get(o, 0) + 1
    return out

for datestr, g in df.groupby('DATASTR'):
    cruz = {}
    tot_st = {}
    tot_cl = {}
    ader = 0
    noshow = 0
    cancel = 0
    fin = 0
    prod_sum = 0.0
    prod_n = 0
    for _, r in g.iterrows():
        st = r['STATUS']
        cl = r['CLIENTE']
        cruz.setdefault(st, {}).setdefault(cl, 0)
        cruz[st][cl] += 1
        tot_st[st] = tot_st.get(st, 0) + 1
        tot_cl[cl] = tot_cl.get(cl, 0) + 1
        if st == 'NO SHOW':
            noshow += 1
        if st == 'CANCELADO PELO CLIENTE':
            cancel += 1
        if st == 'ENTREGAS FINALIZADAS':
            fin += 1
            if r['HORARIO'] == 'NO PRAZO':
                ader += 1
        if pd.notna(r['PROD']):
            prod_sum += r['PROD']
            prod_n += 1

    # ---- Ocorrências de drill por dia (para o filtro de data) ----
    g_noshow = occ_map(g[g['STATUS'] == 'NO SHOW'])
    g_atraso = occ_map(g[(g['STATUS'] == 'ENTREGAS FINALIZADAS') & (g['HORARIO'] == 'FORA DO PRAZO')])
    # produtividade por cliente (entregas finalizadas): paradas + prod_sum para média ponderada
    g_prod = {}
    for _, r in g[g['STATUS'] == 'ENTREGAS FINALIZADAS'].iterrows():
        cl = r['CLIENTE']
        p = g_prod.setdefault(cl, {'paradas': 0, 'prod_sum': 0.0, 'total': 0})
        p['total'] += 1
        if pd.notna(r['PARADAS']):
            p['paradas'] += int(r['PARADAS'])
        if pd.notna(r['PROD']):
            p['prod_sum'] += r['PROD']

    diario[datestr] = {
        'cruzada': cruz,
        'tot_status': tot_st,
        'tot_cliente': tot_cl,
        'aderOrigem': ader,
        'noShow': noshow,
        'cancel': cancel,
        'finalizadas': fin,
        'total': int(len(g)),
        'prod_sum': round(prod_sum, 6),
        'prod_n': prod_n,
        'drill_noShow': g_noshow,
        'drill_atraso': g_atraso,
        'drill_prod': g_prod,
    }

result = {
    'kpis': {
        'total': total,
        'noShow': int(no_show),
        'cancelados': int(cancelados),
        'finalizadas': int(finalizadas),
        'aderenciaOrigemCount': int(aderencia_origem_count),
        'produtividadeMedia': round(produtividade_media, 4),
    },
    'cruzada': cruzada,
    'totalPorStatus': total_por_status,
    'totalPorCliente': total_por_cliente,
    'statusOrdem': status_ordem,
    'clientes': clientes,
    'dataMin': data_min,
    'dataMax': data_max,
    'diario': diario,
    'drill': {
        'noShow': no_show_ocorrencias,
        'atraso': atraso_ocorrencias,
        'produtividade': prod_ocorrencias,
    },
    'resumo': {
        'noShowPorCliente': no_show_por_cliente,
        'atrasoPorCliente': atraso_por_cliente,
        'produtividadePorCliente': prod_por_cliente,
    },
}

with open('src/data.js', 'w', encoding='utf-8') as f:
    f.write('// AUTO-GERADO - n\u00e3o editar manualmente\n')
    f.write('export const DASH_DATA = ')
    f.write(json.dumps(result, ensure_ascii=False))
    f.write(';\n')

print('OK - src/data.js gerado')
print('St', len(result))
