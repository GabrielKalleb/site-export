export const formulacaoData = {
  titulo: "Formulação do Problema de Pesquisa Operacional",
  subtitulo: "Otimização da Agenda do Cuidar Bem",
  contexto: `O centro comunitário de apoio psicológico "Cuidar Bem" enfrenta desafios no agendamento de atendimentos devido ao aumento da demanda e à limitação de recursos (profissionais voluntários, salas, horários). O objetivo é desenvolver um modelo de otimização para escalonar os atendimentos de forma eficiente, considerando as restrições operacionais e buscando maximizar o acesso ao serviço.`,
  objetivo: `O objetivo principal do modelo de Pesquisa Operacional é maximizar o número total de atendimentos realizados, ponderados pela prioridade de cada tipo de atendimento, respeitando as limitações de recursos e as regras operacionais do centro. Secundariamente, busca-se equilibrar a carga de trabalho entre os profissionais.`,
  elementos: [
    {
      titulo: "Conjuntos e Índices",
      conteudo: [
        "P: Conjunto de profissionais disponíveis (psicólogos, estagiários, assistentes sociais), indexado por p.",
        "D: Conjunto de dias de funcionamento na semana (Segunda a Sábado), indexado por d.",
        "T: Conjunto de blocos de tempo (turnos/horários) disponíveis em cada dia (e.g., 8h-9h, 9h-10h, ..., 17h-18h), indexado por t.",
        "A: Conjunto de tipos de atendimento (e.g., Urgência, Rotina, Triagem), indexado por a.",
        "R: Conjunto de salas de atendimento disponíveis, indexado por r. Seja NumSalas o número total de salas."
      ]
    },
    {
      titulo: "Parâmetros",
      conteudo: [
        "Disponibilidade_pdt: Binário (0 ou 1). Indica se o profissional p está disponível no dia d no horário t.",
        "Demanda_adt: Número estimado de pacientes do tipo a buscando atendimento no dia d no horário t.",
        "MaxHoras_p: Número máximo de blocos de tempo que o profissional p pode trabalhar por semana (ou dia).",
        "MinHoras_p: Número mínimo de blocos de tempo que o profissional p deve trabalhar por semana (ou dia), para equilíbrio da carga.",
        "CapacidadeSalas_dt: Número de salas disponíveis no dia d no horário t (provavelmente constante = NumSalas).",
        "Qualificacao_pa: Binário (0 ou 1). Indica se o profissional p é qualificado para realizar o tipo de atendimento a.",
        "Prioridade_a: Valor numérico que representa a prioridade do tipo de atendimento a (e.g., Urgência pode ter prioridade maior)."
      ]
    },
    {
      titulo: "Variáveis de Decisão",
      conteudo: [
        "Alocar_pdt: Variável binária. Assume valor 1 se o profissional p for alocado para trabalhar no dia d, no horário t; 0 caso contrário.",
        "Atender_apdt: Variável binária. Assume valor 1 se o profissional p atender um paciente do tipo a no dia d, no horário t; 0 caso contrário."
      ]
    },
    {
      titulo: "Função Objetivo",
      conteudo: [
        "Maximizar o número total de atendimentos ponderados pela prioridade:",
        "Maximizar Z = Σ (Prioridade_a * Atender_apdt) para todo a ∈ A, p ∈ P, d ∈ D, t ∈ T"
      ]
    },
    {
      titulo: "Restrições",
      conteudo: [
        "Alocação Vinculada ao Atendimento: Um profissional só pode atender um paciente se estiver alocado para trabalhar naquele horário. Assume-se que um profissional atende no máximo um paciente por bloco de tempo.",
        "Σ (Atender_apdt para a ∈ A) <= Alocar_pdt para todo p ∈ P, d ∈ D, t ∈ T",
        
        "Disponibilidade do Profissional: Um profissional só pode ser alocado se estiver disponível.",
        "Alocar_pdt <= Disponibilidade_pdt para todo p ∈ P, d ∈ D, t ∈ T",
        
        "Capacidade de Salas: O número total de profissionais alocados (e, portanto, atendendo) em um determinado horário não pode exceder o número de salas disponíveis.",
        "Σ (Alocar_pdt para p ∈ P) <= CapacidadeSalas_dt para todo d ∈ D, t ∈ T",
        
        "Atendimento da Demanda: O número total de atendimentos de um tipo específico, em um dado horário, não pode exceder a demanda estimada para aquele tipo e horário.",
        "Σ (Atender_apdt para p ∈ P) <= Demanda_adt para todo a ∈ A, d ∈ D, t ∈ T",
        
        "Qualificação do Profissional: Um profissional só pode realizar um tipo de atendimento para o qual está qualificado.",
        "Atender_apdt <= Qualificacao_pa para todo a ∈ A, p ∈ P, d ∈ D, t ∈ T",
        
        "Carga Horária Máxima: A carga horária total de cada profissional não deve exceder seu limite máximo.",
        "Σ (Alocar_pdt para d ∈ D, t ∈ T) <= MaxHoras_p para todo p ∈ P",
        
        "Carga Horária Mínima (Equilíbrio): A carga horária total de cada profissional deve atingir um mínimo para garantir distribuição de trabalho.",
        "Σ (Alocar_pdt para d ∈ D, t ∈ T) >= MinHoras_p para todo p ∈ P",
        
        "Natureza das Variáveis:",
        "Alocar_pdt ∈ {0, 1} para todo p ∈ P, d ∈ D, t ∈ T",
        "Atender_apdt ∈ {0, 1} para todo a ∈ A, p ∈ P, d ∈ D, t ∈ T"
      ]
    }
  ],
  conclusao: "Este modelo representa um problema de Programação Linear Inteira (PLI), pois as variáveis de decisão são binárias. A solução deste modelo indicará a alocação ótima de profissionais e o agendamento de atendimentos que maximiza a função objetivo, respeitando todas as restrições."
};
