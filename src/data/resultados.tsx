export const resultadosData = {
  titulo: "Resultados da Otimização",
  subtitulo: "Análise da Solução Ótima",
  descricao: "Os resultados da otimização demonstram a alocação ótima de profissionais e agendamentos que maximiza o número de atendimentos ponderados por prioridade, respeitando todas as restrições do modelo.",
  
  resumoResultados: {
    titulo: "Resumo dos Resultados",
    itens: [
      { nome: "Status da Solução", valor: "Optimal" },
      { nome: "Valor da Função Objetivo", valor: "280.00" },
      { nome: "Total de Atendimentos Alocados", valor: "140" },
      { nome: "Utilização de Salas", valor: "77.8%" },
      { nome: "Tempo de Execução", valor: "0.03 segundos" }
    ]
  },
  
  distribuicaoAtendimentos: {
    titulo: "Distribuição de Atendimentos por Tipo",
    tipo: "pie",
    dados: [
      { nome: "Urgência", valor: 20 },
      { nome: "Rotina", valor: 70 },
      { nome: "Triagem", valor: 50 }
    ]
  },
  
  cargaTrabalho: {
    titulo: "Carga de Trabalho por Profissional",
    tipo: "bar",
    dados: [
      { nome: "Ana Silva", valor: 15 },
      { nome: "Bruno Costa", valor: 20 },
      { nome: "Carla Dias", valor: 10 },
      { nome: "Daniel Souza", valor: 15 },
      { nome: "Elisa Rocha", valor: 25 },
      { nome: "Fabio Lima", valor: 15 },
      { nome: "Sofia Mendes", valor: 30 }
    ]
  },
  
  ocupacaoPorDia: {
    titulo: "Ocupação de Salas por Dia",
    tipo: "line",
    dados: [
      { nome: "Segunda", valor: 25 },
      { nome: "Terça", valor: 28 },
      { nome: "Quarta", valor: 30 },
      { nome: "Quinta", valor: 27 },
      { nome: "Sexta", valor: 20 },
      { nome: "Sábado", valor: 10 }
    ]
  },
  
  ocupacaoPorHorario: {
    titulo: "Ocupação de Salas por Horário",
    tipo: "line",
    dados: [
      { nome: "08:00", valor: 10 },
      { nome: "09:00", valor: 18 },
      { nome: "10:00", valor: 20 },
      { nome: "11:00", valor: 19 },
      { nome: "12:00", valor: 8 },
      { nome: "13:00", valor: 9 },
      { nome: "14:00", valor: 17 },
      { nome: "15:00", valor: 18 },
      { nome: "16:00", valor: 15 },
      { nome: "17:00", valor: 6 }
    ]
  },
  
  analiseComparativa: {
    titulo: "Análise Comparativa",
    descricao: "Comparação entre a situação antes e depois da otimização.",
    itens: [
      { 
        metrica: "Tempo Médio de Espera", 
        antes: "14 dias", 
        depois: "5 dias", 
        melhoria: "64%" 
      },
      { 
        metrica: "Atendimentos Semanais", 
        antes: "90", 
        depois: "140", 
        melhoria: "56%" 
      },
      { 
        metrica: "Utilização de Salas", 
        antes: "45%", 
        depois: "78%", 
        melhoria: "73%" 
      },
      { 
        metrica: "Equilíbrio de Carga", 
        antes: "Desvio padrão: 12h", 
        depois: "Desvio padrão: 5h", 
        melhoria: "58%" 
      }
    ]
  },
  
  conclusoes: {
    titulo: "Conclusões",
    itens: [
      "A solução ótima encontrada permite um aumento significativo no número de atendimentos realizados, maximizando o impacto social do projeto.",
      "A distribuição da carga de trabalho entre os profissionais é mais equilibrada, evitando sobrecarga.",
      "A utilização das salas é otimizada, reduzindo períodos de ociosidade.",
      "Os atendimentos de maior prioridade (urgência) são priorizados conforme o modelo.",
      "O tempo médio de espera dos pacientes é reduzido significativamente."
    ]
  },
  
  recomendacoes: {
    titulo: "Recomendações",
    itens: [
      "Implementar o modelo de otimização como ferramenta de apoio à decisão para o agendamento semanal.",
      "Atualizar regularmente os dados de disponibilidade dos profissionais e demanda estimada.",
      "Considerar a expansão do número de salas ou horários de atendimento nos períodos de maior demanda.",
      "Monitorar continuamente os resultados e ajustar os parâmetros do modelo conforme necessário.",
      "Integrar o modelo a um sistema de agendamento digital para facilitar a implementação."
    ]
  }
};
