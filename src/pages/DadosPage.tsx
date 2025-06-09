import { dadosData } from '../data/dados';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const DadosPage = () => {
  const COLORS = ['#3498DB', '#27AE60', '#9B59B6', '#F1C40F', '#E74C3C'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{dadosData.titulo}</h1>
        <p className="text-xl text-gray-600">{dadosData.subtitulo}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <p className="text-gray-700 mb-8 leading-relaxed">{dadosData.descricao}</p>
          
          {/* Profissionais */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{dadosData.profissionais.titulo}</h2>
            <p className="text-gray-700 mb-6">{dadosData.profissionais.descricao}</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">ID</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Nome</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Tipo</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Max Horas</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Min Horas</th>
                    <th className="py-3 px-4 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Urgência</th>
                    <th className="py-3 px-4 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Rotina</th>
                    <th className="py-3 px-4 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Triagem</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosData.profissionais.dados.map((prof, index) => (
                    <tr key={prof.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b text-sm">{prof.id}</td>
                      <td className="py-2 px-4 border-b text-sm">{prof.nome}</td>
                      <td className="py-2 px-4 border-b text-sm">{prof.tipo}</td>
                      <td className="py-2 px-4 border-b text-sm">{prof.maxHoras}</td>
                      <td className="py-2 px-4 border-b text-sm">{prof.minHoras}</td>
                      <td className="py-2 px-4 border-b text-sm text-center">
                        {prof.qualificacoes.urgencia ? '✓' : '✗'}
                      </td>
                      <td className="py-2 px-4 border-b text-sm text-center">
                        {prof.qualificacoes.rotina ? '✓' : '✗'}
                      </td>
                      <td className="py-2 px-4 border-b text-sm text-center">
                        {prof.qualificacoes.triagem ? '✓' : '✗'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Disponibilidade */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{dadosData.disponibilidade.titulo}</h2>
            <p className="text-gray-700 mb-4">{dadosData.disponibilidade.descricao}</p>
            <p className="text-gray-700 mb-2">{dadosData.disponibilidade.explicacao}</p>
            <p className="text-gray-700 italic">{dadosData.disponibilidade.exemplo}</p>
          </div>
          
          {/* Demanda */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{dadosData.demanda.titulo}</h2>
            <p className="text-gray-700 mb-4">{dadosData.demanda.descricao}</p>
            <p className="text-gray-700 mb-2">{dadosData.demanda.explicacao}</p>
            <p className="text-gray-700 italic">{dadosData.demanda.exemplo}</p>
          </div>
          
          {/* Parâmetros */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{dadosData.parametros.titulo}</h2>
            <p className="text-gray-700 mb-6">{dadosData.parametros.descricao}</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Parâmetro</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Valor</th>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosData.parametros.dados.map((param, index) => (
                    <tr key={param.parametro} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b text-sm">{param.parametro}</td>
                      <td className="py-2 px-4 border-b text-sm">{param.valor}</td>
                      <td className="py-2 px-4 border-b text-sm">{param.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Visualizações */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Visualizações</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dadosData.visualizacoes.map((viz, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-[#2C3E50] mb-4 text-center">{viz.titulo}</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      {viz.tipo === 'pie' ? (
                        <PieChart>
                          <Pie
                            data={viz.dados}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="valor"
                            nameKey="nome"
                            label={({ nome, percent }) => `${nome}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {viz.dados.map((_, i) => (
                              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      ) : (
                        <BarChart data={viz.dados}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="nome" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="valor" fill="#3498DB" />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Estatísticas */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{dadosData.estatisticas.titulo}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dadosData.estatisticas.itens.map((item, index) => (
                <div key={index} className="bg-[#ECF0F1] p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600">{item.nome}</h3>
                  <p className="text-2xl font-bold text-[#2C3E50]">{item.valor}</p>
                  {item.descricao && <p className="text-xs text-gray-500 mt-1">{item.descricao}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosPage;
