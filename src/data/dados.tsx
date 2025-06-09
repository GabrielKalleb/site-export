export const dadosData = {
  titulo: "Dados do Projeto",
  subtitulo: "Dados Fictícios para Simulação",
  descricao: "Para testar e demonstrar o modelo de otimização, foram gerados dados fictícios que simulam o ambiente operacional do centro comunitário Cuidar Bem. Estes dados incluem informações sobre profissionais, disponibilidade, demanda e parâmetros gerais.",
  
  profissionais: {
    titulo: "Profissionais",
    descricao: "Dados dos profissionais voluntários, incluindo tipo, carga horária e qualificações.",
    colunas: ["ID", "Nome", "Tipo", "Max_Horas_Semana", "Min_Horas_Semana", "Qualificado_Urgencia", "Qualificado_Rotina", "Qualificado_Triagem"],
    dados: [
      { id: "P001", nome: "Ana Silva", tipo: "Psicologo", maxHoras: 30, minHoras: 15, qualificacoes: { urgencia: true, rotina: true, triagem: true } },
      { id: "P002", nome: "Bruno Costa", tipo: "Psicologo", maxHoras: 30, minHoras: 15, qualificacoes: { urgencia: true, rotina: true, triagem: true } },
      { id: "P003", nome: "Carla Dias", tipo: "Estagiario", maxHoras: 20, minHoras: 10, qualificacoes: { urgencia: false, rotina: true, triagem: true } },
      { id: "P004", nome: "Daniel Souza", tipo: "Assistente Social", maxHoras: 35, minHoras: 10, qualificacoes: { urgencia: false, rotina: false, triagem: true } },
      { id: "P005", nome: "Elisa Rocha", tipo: "Psicologo", maxHoras: 25, minHoras: 12, qualificacoes: { urgencia: true, rotina: true, triagem: true } },
      { id: "P006", nome: "Fabio Lima", tipo: "Estagiario", maxHoras: 20, minHoras: 10, qualificacoes: { urgencia: false, rotina: true, triagem: true } },
      { id: "P007", nome: "Sofia Mendes", tipo: "Psicologo", maxHoras: 30, minHoras: 15, qualificacoes: { urgencia: true, rotina: true, triagem: true } }
    ]
  },
  
  disponibilidade: {
    titulo: "Disponibilidade",
    descricao: "Disponibilidade de cada profissional por dia e horário.",
    explicacao: "Os dados de disponibilidade foram gerados com base em padrões realistas, como maior indisponibilidade em horários de almoço (12h-13h) e restrições para estagiários em horários extremos.",
    exemplo: "Exemplo: O profissional P001 está disponível na Segunda-feira às 9h, mas indisponível às 12h."
  },
  
  demanda: {
    titulo: "Demanda",
    descricao: "Demanda estimada por tipo de atendimento, dia e horário.",
    explicacao: "A demanda foi gerada considerando variações por horário (picos entre 9h-12h e 14h-17h), dia da semana (menor aos sábados) e tipo de atendimento (urgências menos frequentes, seguindo distribuição de Poisson).",
    exemplo: "Exemplo: Na Segunda-feira às 10h, estima-se uma demanda de 2 atendimentos de rotina, 1 de triagem e 0 de urgência."
  },
  
  parametros: {
    titulo: "Parâmetros",
    descricao: "Parâmetros gerais do modelo.",
    dados: [
      { parametro: "NumSalas", valor: 3, descricao: "Número total de salas disponíveis para atendimento" },
      { parametro: "Prioridade_Urgencia", valor: 3, descricao: "Peso atribuído aos atendimentos de urgência" },
      { parametro: "Prioridade_Rotina", valor: 2, descricao: "Peso atribuído aos atendimentos de rotina" },
      { parametro: "Prioridade_Triagem", valor: 1, descricao: "Peso atribuído aos atendimentos de triagem" }
    ]
  },
  
  estatisticas: {
    titulo: "Estatísticas dos Dados",
    itens: [
      { nome: "Total de Profissionais", valor: 7 },
      { nome: "Total de Dias", valor: 6 },
      { nome: "Total de Horários por Dia", valor: 10 },
      { nome: "Total de Tipos de Atendimento", valor: 3 },
      { nome: "Total de Salas", valor: 3 },
      { nome: "Total de Combinações Possíveis", valor: 1260, descricao: "(7 profissionais × 6 dias × 10 horários × 3 tipos)" }
    ]
  },
  
  visualizacoes: [
    {
      titulo: "Distribuição de Profissionais por Tipo",
      tipo: "pie",
      dados: [
        { nome: "Psicólogo", valor: 4 },
        { nome: "Estagiário", valor: 2 },
        { nome: "Assistente Social", valor: 1 }
      ]
    },
    {
      titulo: "Qualificações dos Profissionais",
      tipo: "bar",
      dados: [
        { nome: "Urgência", valor: 4 },
        { nome: "Rotina", valor: 6 },
        { nome: "Triagem", valor: 7 }
      ]
    }
  ]
};
