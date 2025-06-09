import { sobreData } from '../data/sobre';

const SobrePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{sobreData.titulo}</h1>
        <p className="text-xl text-gray-600">{sobreData.descricao}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Contexto</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{sobreData.contexto}</p>
          
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">O Desafio</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">{sobreData.desafio}</p>
          
          <div className="bg-[#ECF0F1] p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Nossa Solução</h2>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: sobreData.solucao.replace(/•/g, '<br/>•') }} />
          </div>
          
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Metodologia</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{sobreData.metodologia}</p>
          
          <div className="bg-[#27AE60] bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Benefícios</h2>
            <ul className="list-disc pl-6 space-y-2">
              {sobreData.beneficios.map((beneficio, index) => (
                <li key={index} className="text-gray-700">{beneficio}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobrePage;
