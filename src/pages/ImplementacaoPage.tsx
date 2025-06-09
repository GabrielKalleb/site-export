import { implementacaoData } from '../data/implementacao';

const ImplementacaoPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{implementacaoData.titulo}</h1>
        <p className="text-xl text-gray-600">{implementacaoData.subtitulo}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <p className="text-gray-700 mb-8 leading-relaxed">{implementacaoData.descricao}</p>
          
          {implementacaoData.etapas.map((etapa, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">{etapa.titulo}</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">
                  {etapa.codigo}
                </pre>
              </div>
              <p className="text-gray-700 leading-relaxed">{etapa.explicacao}</p>
            </div>
          ))}
          
          <div className="bg-[#27AE60] bg-opacity-10 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">{implementacaoData.resultados.titulo}</h2>
            <p className="text-gray-700 mb-4">{implementacaoData.resultados.descricao}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-[#2C3E50]">Status:</p>
                <p className="text-[#27AE60] font-bold">{implementacaoData.resultados.status}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-[#2C3E50]">Valor Objetivo:</p>
                <p className="text-[#27AE60] font-bold">{implementacaoData.resultados.valorObjetivo}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">{implementacaoData.resultados.interpretacao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementacaoPage;
