import { Link } from 'react-router-dom';
import { ArrowRight, FileText, BarChart2, Download } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projeto Cuidar Bem</h1>
            <p className="text-xl md:text-2xl mb-8">
              Otimizando o Acolhimento em Centros de Apoio Psicológico
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto">
              Uma solução baseada em Pesquisa Operacional para maximizar o impacto social
              através da alocação eficiente de recursos em centros de apoio psicológico.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/sobre"
                className="bg-[#27AE60] hover:bg-[#219653] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center"
              >
                Conheça o Projeto <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/resultados"
                className="bg-white hover:bg-gray-100 text-[#2C3E50] font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Ver Resultados
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-[#ECF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">
            Principais Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#3498DB] rounded-full flex items-center justify-center mb-4">
                <BarChart2 size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                Otimização de Recursos
              </h3>
              <p className="text-gray-600">
                Maximiza o número de atendimentos realizados com os recursos disponíveis,
                aumentando o impacto social do projeto.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center mb-4">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                Equilíbrio de Carga
              </h3>
              <p className="text-gray-600">
                Distribui a carga de trabalho entre os profissionais de forma equilibrada,
                evitando sobrecarga e melhorando a qualidade do atendimento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#9B59B6] rounded-full flex items-center justify-center mb-4">
                <Download size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
                Redução do Tempo de Espera
              </h3>
              <p className="text-gray-600">
                Minimiza o tempo médio de espera dos pacientes, garantindo atendimento
                mais rápido e eficiente para quem precisa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2C3E50] rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Explore a Solução Completa
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Acesse a documentação completa, códigos-fonte, dados e resultados
                do projeto de otimização do centro comunitário Cuidar Bem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/formulacao"
                  className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Ver Formulação
                </Link>
                <Link
                  to="/implementacao"
                  className="bg-[#3498DB] hover:bg-[#2980B9] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Ver Implementação
                </Link>
                <Link
                  to="/downloads"
                  className="bg-white hover:bg-gray-100 text-[#2C3E50] font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
