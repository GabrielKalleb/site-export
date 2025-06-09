# Relatório de Otimização: Projeto Cuidar Bem

## Introdução

Este relatório detalha o processo de formulação e resolução de um problema de Pesquisa Operacional (PO) para otimizar o agendamento de atendimentos no centro comunitário de apoio psicológico "Cuidar Bem", conforme solicitado e baseado no estudo de caso fornecido. O objetivo principal foi desenvolver um modelo matemático para maximizar o número de atendimentos, ponderados por prioridade, respeitando as restrições operacionais (profissionais, salas, horários, demanda, qualificações).

## Formulação do Problema de Pesquisa Operacional

O problema foi modelado como um problema de Programação Linear Inteira (PLI). A formulação completa, incluindo a definição de conjuntos, parâmetros, variáveis de decisão, a função objetivo (maximizar atendimentos ponderados por prioridade) e todas as restrições (disponibilidade, capacidade de salas, demanda, qualificação, carga horária mínima e máxima dos profissionais) está detalhada no arquivo `formulacao_problema_po.md`.

## Geração de Dados Fictícios

Para testar e demonstrar o modelo, foram gerados dados fictícios que simulam o ambiente operacional do Cuidar Bem. O script `gerar_dados_ficticios.py` foi utilizado para criar os seguintes arquivos CSV:

*   `profissionais.csv`: Contém informações sobre os profissionais (ID, nome, tipo, carga horária min/max, qualificações).
*   `disponibilidade.csv`: Detalha a disponibilidade (dia e horário) de cada profissional.
*   `demanda.csv`: Estima a demanda por tipo de atendimento para cada dia e horário.
*   `parametros.csv`: Define parâmetros gerais como o número de salas e as prioridades de cada tipo de atendimento.

Estes dados foram projetados para serem representativos, mas podem ser ajustados para refletir a realidade operacional do centro com maior precisão.

## Implementação da Otimização com Python e PuLP

O modelo de otimização foi implementado em Python utilizando a biblioteca PuLP. O script `otimizacao_cuidarbem.py` realiza as seguintes etapas:

1.  Carrega os dados dos arquivos CSV gerados.
2.  Define as variáveis de decisão (`Alocar_pdt` para alocação de profissional e `Atender_apdt` para realização de atendimento).
3.  Constrói o modelo matemático (função objetivo e restrições) conforme a formulação.
4.  Resolve o problema utilizando um solver (CBC, padrão no PuLP) em duas versões:
    *   **Programação Linear (LP):** Uma versão relaxada onde as variáveis podem assumir valores contínuos entre 0 e 1. Útil para análise inicial, mas pode não gerar uma solução diretamente implementável.
    *   **Programação Linear Inteira (ILP):** A versão principal, onde as variáveis são restritas a serem binárias (0 ou 1), garantindo uma solução prática e diretamente aplicável (ou o profissional é alocado/atende, ou não é).

## Resultados da Otimização

A execução do script `otimizacao_cuidarbem.py` com os dados fictícios gerou os seguintes resultados:

*   **Status:** Ambos os modelos (LP e ILP) encontraram uma **solução ótima**.
*   **Valor Objetivo:** O valor máximo da função objetivo (total de atendimentos ponderados por prioridade) foi **280.00** para ambos os modelos (LP e ILP). Isso indica que, neste caso específico e com estes dados, a solução ótima da relaxação linear coincidiu com a solução ótima inteira.
*   **Arquivos de Resultados:**
    *   `resultados_LP.csv`: Contém os valores das variáveis de decisão para a solução LP. Como o valor objetivo foi igual ao ILP, espera-se que as variáveis também sejam inteiras (0 ou 1).
    *   `resultados_ILP.csv`: Contém os valores das variáveis de decisão (0 ou 1) para a solução ILP. Este arquivo detalha exatamente qual profissional (`Alocar_...`) está alocado em qual dia/horário e quais atendimentos (`Atender_...`) devem ser realizados por quem, quando e de que tipo.

**Interpretação:** A solução ILP (detalhada em `resultados_ILP.csv`) fornece o cronograma otimizado de alocação de profissionais e agendamento de atendimentos que maximiza o objetivo definido, respeitando todas as restrições impostas (disponibilidade, salas, demanda, etc.).

## Conclusão e Próximos Passos

O modelo de Pesquisa Operacional desenvolvido e os resultados obtidos demonstram o potencial da otimização para melhorar a eficiência da gestão de agendamentos no Cuidar Bem. A solução gerada maximiza o número de atendimentos ponderados, equilibra a carga de trabalho e respeita as limitações de recursos.

Recomenda-se:

1.  Analisar detalhadamente o arquivo `resultados_ILP.csv` para visualizar o cronograma proposto.
2.  Validar e ajustar os dados de entrada (profissionais, disponibilidade, demanda, parâmetros) para refletir com maior precisão a realidade operacional do centro.
3.  Executar novamente o script `otimizacao_cuidarbem.py` com os dados atualizados para obter um cronograma ainda mais preciso.
4.  Considerar a integração desta ferramenta a um sistema de agendamento para facilitar a implementação.

## Descrição dos Arquivos Anexados

*   `relatorio_otimizacao_cuidarbem.md`: Este relatório.
*   `formulacao_problema_po.md`: Detalhamento da formulação matemática do problema.
*   `gerar_dados_ficticios.py`: Script Python para gerar os dados fictícios.
*   `profissionais.csv`, `disponibilidade.csv`, `demanda.csv`, `parametros.csv`: Arquivos CSV com os dados fictícios gerados.
*   `otimizacao_cuidarbem.py`: Script Python com a implementação do modelo de otimização usando PuLP.
*   `resultados_LP.csv`: Resultados detalhados da otimização linear (relaxada).
*   `resultados_ILP.csv`: Resultados detalhados da otimização linear inteira (solução prática).

