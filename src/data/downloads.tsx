export const downloadsData = {
  titulo: "Downloads",
  subtitulo: "Arquivos do Projeto Cuidar Bem",
  descricao: "Nesta seção, você pode baixar todos os arquivos relacionados ao projeto de otimização do centro comunitário Cuidar Bem, incluindo dados, scripts e resultados.",
  
  categorias: [
    {
      nome: "Documentação",
      descricao: "Documentos explicativos sobre o projeto e sua implementação",
      arquivos: [
        {
          nome: "Relatório de Otimização",
          descricao: "Relatório completo detalhando o processo e os resultados",
          arquivo: "relatorio_otimizacao_cuidarbem.md",
          formato: "Markdown"
        },
        {
          nome: "Formulação do Problema",
          descricao: "Detalhamento da formulação matemática do problema",
          arquivo: "formulacao_problema_po.md",
          formato: "Markdown"
        }
      ]
    },
    {
      nome: "Dados",
      descricao: "Arquivos CSV com os dados fictícios utilizados no modelo",
      arquivos: [
        {
          nome: "Profissionais",
          descricao: "Dados dos profissionais voluntários",
          arquivo: "profissionais.csv",
          formato: "CSV"
        },
        {
          nome: "Disponibilidade",
          descricao: "Disponibilidade de cada profissional por dia e horário",
          arquivo: "disponibilidade.csv",
          formato: "CSV"
        },
        {
          nome: "Demanda",
          descricao: "Demanda estimada por tipo de atendimento, dia e horário",
          arquivo: "demanda.csv",
          formato: "CSV"
        },
        {
          nome: "Parâmetros",
          descricao: "Parâmetros gerais do modelo",
          arquivo: "parametros.csv",
          formato: "CSV"
        }
      ]
    },
    {
      nome: "Scripts",
      descricao: "Scripts Python para geração de dados e otimização",
      arquivos: [
        {
          nome: "Geração de Dados Fictícios",
          descricao: "Script para gerar os dados fictícios em CSV",
          arquivo: "gerar_dados_ficticios.py",
          formato: "Python"
        },
        {
          nome: "Otimização com PuLP",
          descricao: "Script com a implementação do modelo de otimização",
          arquivo: "otimizacao_cuidarbem.py",
          formato: "Python"
        }
      ]
    },
    {
      nome: "Resultados",
      descricao: "Resultados da otimização",
      arquivos: [
        {
          nome: "Resultados LP",
          descricao: "Resultados detalhados da otimização linear (relaxada)",
          arquivo: "resultados_LP.csv",
          formato: "CSV"
        },
        {
          nome: "Resultados ILP",
          descricao: "Resultados detalhados da otimização linear inteira",
          arquivo: "resultados_ILP.csv",
          formato: "CSV"
        }
      ]
    }
  ]
};
