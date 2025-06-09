export const sobreData = {
  titulo: "Sobre o Projeto Cuidar Bem",
  descricao: "Otimizando o Acolhimento em Centros de Apoio Psicológico",
  contexto: `A busca por atendimento psicológico tem crescido consideravelmente nos últimos anos, especialmente após os impactos da pandemia da COVID-19, que agravaram quadros de ansiedade, depressão e outras condições emocionais. Apesar disso, o acesso à saúde mental ainda é limitado para grande parte da população, especialmente em bairros periféricos e regiões de vulnerabilidade social.

Para tentar minimizar esse cenário, foi criado o projeto "Cuidar Bem", um centro comunitário de apoio psicológico gratuito, mantido por uma rede de voluntários — psicólogos, estagiários e assistentes sociais — com o apoio de uma ONG local. O projeto funciona de segunda a sábado, das 8h às 18h, com número limitado de salas, profissionais por turno e agendamentos.`,
  desafio: `Com o aumento da procura e a limitação de recursos humanos e físicos, os gestores enfrentam dificuldades em organizar os atendimentos de forma eficiente. Há longas filas de espera, ociosidade de salas em certos horários e sobrecarga de alguns profissionais, enquanto outros estão subutilizados.`,
  solucao: `Nossa solução utiliza técnicas de Pesquisa Operacional para criar um modelo matemático de otimização que:
  • Otimiza a alocação dos profissionais nos turnos de atendimento
  • Minimiza o tempo médio de espera dos pacientes
  • Equilibra a carga de trabalho entre os profissionais disponíveis
  • Respeita as restrições de horário, número de salas e capacidade máxima por turno`,
  metodologia: `A metodologia empregada baseia-se em Programação Linear Inteira (PLI), uma técnica de Pesquisa Operacional que permite modelar problemas complexos de alocação de recursos com variáveis de decisão binárias (sim/não). O modelo foi implementado em Python utilizando a biblioteca PuLP, que oferece uma interface amigável para a formulação e resolução de problemas de otimização.`,
  beneficios: [
    "Aumento no número de atendimentos realizados",
    "Redução do tempo de espera dos pacientes",
    "Distribuição equilibrada da carga de trabalho",
    "Melhor utilização dos recursos disponíveis",
    "Maior acesso à saúde mental para a comunidade"
  ]
};
