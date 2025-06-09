import pandas as pd
import pulp

# --- Carregar Dados ---
profissionais_df = pd.read_csv("profissionais.csv")
disponibilidade_df = pd.read_csv("disponibilidade.csv")
demanda_df = pd.read_csv("demanda.csv")
parametros_df = pd.read_csv("parametros.csv")

# Extrair parâmetros
num_salas = int(parametros_df.loc[parametros_df["Parametro"] == "NumSalas", "Valor"].iloc[0])
prioridades = parametros_df[parametros_df["Parametro"].str.startswith("Prioridade_")]
prioridades["Tipo_Atendimento"] = prioridades["Parametro"].str.replace("Prioridade_", "")
prioridades = prioridades.set_index("Tipo_Atendimento")["Valor"].to_dict()

# --- Preparar Índices e Dicionários de Dados ---
profissionais = profissionais_df["ID"].tolist()
tipos_atendimento = list(prioridades.keys())
dias = disponibilidade_df["Dia"].unique().tolist()
horarios = disponibilidade_df["Horario_Inicio"].unique().tolist()

# Dicionários para acesso rápido aos dados
disponibilidade = disponibilidade_df.set_index(["Profissional_ID", "Dia", "Horario_Inicio"])["Disponivel"].to_dict()
demanda = demanda_df.set_index(["Tipo_Atendimento", "Dia", "Horario_Inicio"])["Demanda_Estimada"].to_dict()
qualificacao = profissionais_df.set_index("ID")[[f"Qualificado_{tipo}" for tipo in tipos_atendimento]].to_dict("index")
max_horas = profissionais_df.set_index("ID")["Max_Horas_Semana"].to_dict()
min_horas = profissionais_df.set_index("ID")["Min_Horas_Semana"].to_dict()

# Criar chaves para os dicionários (profissional, dia, hora) e (tipo, dia, hora)
chaves_pdt = [(p, d, t) for p in profissionais for d in dias for t in horarios]
chaves_adt = [(a, d, t) for a in tipos_atendimento for d in dias for t in horarios]
chaves_apdt = [(a, p, d, t) for a in tipos_atendimento for p in profissionais for d in dias for t in horarios]

# --- Função para Resolver o Modelo (LP ou ILP) ---
def resolver_modelo(tipo_problema='ILP'):
    # Criar o problema
    prob = pulp.LpProblem("Otimizacao_CuidarBem", pulp.LpMaximize)

    # Definir Variáveis de Decisão
    if tipo_problema == 'ILP':
        alocar_pdt = pulp.LpVariable.dicts("Alocar", chaves_pdt, cat=pulp.LpBinary)
        atender_apdt = pulp.LpVariable.dicts("Atender", chaves_apdt, cat=pulp.LpBinary)
    elif tipo_problema == 'LP':
        alocar_pdt = pulp.LpVariable.dicts("Alocar", chaves_pdt, lowBound=0, upBound=1, cat=pulp.LpContinuous)
        atender_apdt = pulp.LpVariable.dicts("Atender", chaves_apdt, lowBound=0, upBound=1, cat=pulp.LpContinuous)
    else:
        raise ValueError("Tipo de problema inválido. Use 'ILP' ou 'LP'.")

    # Função Objetivo
    prob += pulp.lpSum(prioridades[a] * atender_apdt[a, p, d, t] for a, p, d, t in chaves_apdt), "Maximizar_Atendimentos_Ponderados"

    # Restrições
    # 1. Alocação Vinculada ao Atendimento
    for p, d, t in chaves_pdt:
        prob += pulp.lpSum(atender_apdt[a, p, d, t] for a in tipos_atendimento) <= alocar_pdt[p, d, t], f"Vinculo_Aloc_Atend_{p}_{d}_{t}"

    # 2. Disponibilidade do Profissional
    for p, d, t in chaves_pdt:
        prob += alocar_pdt[p, d, t] <= disponibilidade.get((p, d, t), 0), f"Disp_Prof_{p}_{d}_{t}"

    # 3. Capacidade de Salas
    for d, t in [(day, time) for day in dias for time in horarios]:
        prob += pulp.lpSum(alocar_pdt[p, d, t] for p in profissionais) <= num_salas, f"Capac_Salas_{d}_{t}"

    # 4. Atendimento da Demanda
    for a, d, t in chaves_adt:
        prob += pulp.lpSum(atender_apdt[a, p, d, t] for p in profissionais) <= demanda.get((a, d, t), 0), f"Demanda_{a}_{d}_{t}"

    # 5. Qualificação do Profissional
    for a, p, d, t in chaves_apdt:
        prob += atender_apdt[a, p, d, t] <= qualificacao[p].get(f"Qualificado_{a}", 0), f"Qualif_{a}_{p}_{d}_{t}"

    # 6. Carga Horária Máxima
    for p in profissionais:
        prob += pulp.lpSum(alocar_pdt[p, d, t] for d in dias for t in horarios) <= max_horas[p], f"Max_Horas_{p}"

    # 7. Carga Horária Mínima
    for p in profissionais:
        prob += pulp.lpSum(alocar_pdt[p, d, t] for d in dias for t in horarios) >= min_horas[p], f"Min_Horas_{p}"

    # Resolver o problema
    print(f"\n--- Resolvendo como {tipo_problema} ---")
    prob.solve()

    # Imprimir Status e Resultados
    print(f"Status: {pulp.LpStatus[prob.status]}")
    print(f"Valor Objetivo ({tipo_problema}): {pulp.value(prob.objective):.2f}")

    # Salvar resultados (opcional, pode ser extenso)
    resultados = []
    if prob.status == pulp.LpStatusOptimal:
        for v in prob.variables():
            if v.varValue > 0.01: # Mostrar apenas variáveis com valor significativo
                resultados.append({"Variavel": v.name, "Valor": v.varValue})
        resultados_df = pd.DataFrame(resultados)
        resultados_df.to_csv(f"resultados_{tipo_problema}.csv", index=False)
        print(f"Resultados detalhados salvos em resultados_{tipo_problema}.csv")
    else:
        print("Não foi encontrada uma solução ótima.")

    return prob

# --- Executar Otimização ---
# 1. Resolver como Programação Linear (Relaxada)
prob_lp = resolver_modelo(tipo_problema='LP')

# 2. Resolver como Programação Linear Inteira
prob_ilp = resolver_modelo(tipo_problema='ILP')

print("\nOtimização concluída.")

