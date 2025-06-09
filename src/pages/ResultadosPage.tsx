import { resultadosData } from '../data/resultados';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const ResultadosPage = () => {
  const COLORS = ['#3498DB', '#27AE60', '#9B59B6', '#F1C40F', '#E74C3C'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{resultadosData.titulo}</h1>
        <p className="text-xl text-gray-600">{resultadosData.subtitulo}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <p className="text-gray-700 mb-8 leading-relaxed">{resultadosData.descricao}</p>
          
          {/* Resumo dos Resultados */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{resultadosData.resumoResultados.titulo}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {resultadosData.resumoResultados.itens.map((item, index) => (
                <div key={index} className="bg-[#ECF0F1] p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600">{item.nome}</h3>
                  <p className="text-2xl font-bold text-[#2C3E50]">{item.valor}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gráficos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Distribuição de Atendimentos */}
            <div className="bg-white p-4 rounded-lg shadow border">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">{resultadosData.distribuicaoAtendimentos.titulo}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resultadosData.distribuicaoAtendimentos.dados}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="valor"
                      nameKey="nome"
                      label={({ nome, percent }) => `${nome}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {resultadosData.distribuicaoAtendimentos.dados.map((_, i) => (
                        <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Carga de Trabalho */}
            <div className="bg-white p-4 rounded-lg shadow border">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">{resultadosData.cargaTrabalho.titulo}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={resultadosData.cargaTrabalho.dados}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="valor" fill="#3498DB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Ocupação por Dia */}
            <div className="bg-white p-4 rounded-lg shadow border">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">{resultadosData.ocupacaoPorDia.titulo}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={resultadosData.ocupacaoPorDia.dados}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#27AE60" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Ocupação por Horário */}
            <div className="bg-white p-4 rounded-lg shadow border">
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">{resultadosData.ocupacaoPorHorario.titulo}</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={resultadosData.ocupacaoPorHorario.dados}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#9B59B6" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Análise Comparativa */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{resultadosData.analiseComparativa.titulo}</h2>
            <p className="text-gray-700 mb-6">{resultadosData.analiseComparativa.descricao}</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Métrica</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Antes</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Depois</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Melhoria</th>
                  </tr>
                </thead>
                <tbody>
                  {resultadosData.analiseComparativa.itens.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b text-sm">{item.metrica}</td>
                      <td className="py-2 px-4 border-b text-sm">{item.antes}</td>
                      <td className="py-2 px-4 border-b text-sm">{item.depois}</td>
                      <td className="py-2 px-4 border-b text-sm text-[#27AE60] font-semibold">{item.melhoria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Conclusões */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{resultadosData.conclusoes.titulo}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {resultadosData.conclusoes.itens.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Recomendações */}
          <div className="bg-[#27AE60] bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{resultadosData.recomendacoes.titulo}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {resultadosData.recomendacoes.itens.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadosPage;
