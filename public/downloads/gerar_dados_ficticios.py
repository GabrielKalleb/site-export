import pandas as pd
import numpy as np

# --- Parâmetros Gerais ---
num_salas = 3
prioridades = {"Urgencia": 3, "Rotina": 2, "Triagem": 1}
dias_semana = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
horarios_inicio = [f"{h:02d}:00" for h in range(8, 18)] # 8h às 17h (início do bloco)
tipos_atendimento = list(prioridades.keys())

# --- Gerar Dados dos Profissionais ---
profissionais_data = {
    "ID": [f"P{i:03d}" for i in range(1, 8)],
    "Nome": ["Ana Silva", "Bruno Costa", "Carla Dias", "Daniel Souza", "Elisa Rocha", "Fabio Lima", "Sofia Mendes"],
    "Tipo": ["Psicologo", "Psicologo", "Estagiario", "Assistente Social", "Psicologo", "Estagiario", "Psicologo"],
    "Max_Horas_Semana": [30, 30, 20, 35, 25, 20, 30], # Total de blocos de 1h
    "Min_Horas_Semana": [15, 15, 10, 10, 12, 10, 15]
}

# Qualificações (simplificado)
profissionais_data["Qualificado_Urgencia"] = [1, 1, 0, 0, 1, 0, 1] # Psicólogos
profissionais_data["Qualificado_Rotina"] = [1, 1, 1, 0, 1, 1, 1]   # Psicólogos e Estagiários
profissionais_data["Qualificado_Triagem"] = [1, 1, 1, 1, 1, 1, 1]  # Todos

profissionais_df = pd.DataFrame(profissionais_data)
profissionais_df.to_csv("profissionais.csv", index=False)

# --- Gerar Dados de Disponibilidade ---
disponibilidade_list = []
np.random.seed(42) # Para reprodutibilidade
for prof_id in profissionais_df["ID"]:
    for dia in dias_semana:
        for hora in horarios_inicio:
            # Simula disponibilidade (e.g., 70% de chance de estar disponível)
            disponivel = 1 if np.random.rand() < 0.7 else 0
            # Forçar indisponibilidade em alguns horários (ex: almoço)
            if hora in ["12:00", "13:00"] and np.random.rand() < 0.8: # 80% de chance de estar indisponível no almoço
                disponivel = 0
            # Estagiários podem ter horários mais restritos
            if profissionais_df.loc[profissionais_df['ID'] == prof_id, 'Tipo'].iloc[0] == 'Estagiario' and (hora < "09:00" or hora >= "17:00"): 
                 if np.random.rand() < 0.6: # Maior chance de indisponibilidade fora do horário comercial
                     disponivel = 0
            disponibilidade_list.append({
                "Profissional_ID": prof_id,
                "Dia": dia,
                "Horario_Inicio": hora,
                "Disponivel": disponivel
            })

disponibilidade_df = pd.DataFrame(disponibilidade_list)
disponibilidade_df.to_csv("disponibilidade.csv", index=False)

# --- Gerar Dados de Demanda ---
demanda_list = []
np.random.seed(123)
for dia in dias_semana:
    for hora in horarios_inicio:
        for tipo in tipos_atendimento:
            # Demanda base varia com dia e hora
            demanda_base = 0
            if "09:00" <= hora < "12:00" or "14:00" <= hora < "17:00": # Horários de pico
                demanda_base = 2
            else: # Horários de menor movimento
                demanda_base = 1
            if dia in ["Sabado"]: # Menor demanda no sábado
                 demanda_base = max(0, demanda_base -1)
                 
            # Variação aleatória na demanda
            demanda_estimada = max(0, demanda_base + np.random.randint(-1, 2))
            
            # Ajuste por tipo de atendimento (exemplo)
            if tipo == "Urgencia":
                demanda_estimada = np.random.poisson(0.5) # Menos frequente, segue Poisson
            elif tipo == "Rotina":
                demanda_estimada = max(0, demanda_estimada + np.random.randint(0, 2))
            elif tipo == "Triagem":
                 demanda_estimada = max(0, demanda_estimada + np.random.randint(-1, 1))

            demanda_list.append({
                "Dia": dia,
                "Horario_Inicio": hora,
                "Tipo_Atendimento": tipo,
                "Demanda_Estimada": int(demanda_estimada) # Garante inteiro
            })

demanda_df = pd.DataFrame(demanda_list)
demanda_df.to_csv("demanda.csv", index=False)

# --- Salvar Parâmetros ---
parametros_data = {
    "Parametro": ["NumSalas"] + [f"Prioridade_{tipo}" for tipo in tipos_atendimento],
    "Valor": [num_salas] + [prioridades[tipo] for tipo in tipos_atendimento]
}
parametros_df = pd.DataFrame(parametros_data)
parametros_df.to_csv("parametros.csv", index=False)

print("Arquivos CSV gerados com sucesso: profissionais.csv, disponibilidade.csv, demanda.csv, parametros.csv")

