import { formulacaoData } from '../data/formulacao';

const FormulacaoPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{formulacaoData.titulo}</h1>
        <p className="text-xl text-gray-600">{formulacaoData.subtitulo}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Contexto</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{formulacaoData.contexto}</p>
          
          <div className="bg-[#3498DB] bg-opacity-10 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Objetivo</h2>
            <p className="text-gray-700 leading-relaxed">{formulacaoData.objetivo}</p>
          </div>
          
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Elementos do Modelo</h2>
          
          {formulacaoData.elementos.map((elemento, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">{elemento.titulo}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {elemento.conteudo.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="bg-[#27AE60] bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed">{formulacaoData.conclusao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulacaoPage;
