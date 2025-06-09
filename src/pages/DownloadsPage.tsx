import { downloadsData } from '../data/downloads';
import { Download, FileText, FileCode, Database } from 'lucide-react';

const DownloadsPage = () => {
  // Função para determinar o ícone com base no formato do arquivo
  const getFileIcon = (formato: string) => {
    switch (formato.toLowerCase()) {
      case 'python':
        return <FileCode size={20} className="text-[#3498DB]" />;
      case 'csv':
        return <Database size={20} className="text-[#27AE60]" />;
      default:
        return <FileText size={20} className="text-[#9B59B6]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">{downloadsData.titulo}</h1>
        <p className="text-xl text-gray-600">{downloadsData.subtitulo}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="p-8">
          <p className="text-gray-700 mb-8 leading-relaxed">{downloadsData.descricao}</p>
          
          {downloadsData.categorias.map((categoria, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">{categoria.nome}</h2>
              <p className="text-gray-700 mb-6">{categoria.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoria.arquivos.map((arquivo, fileIndex) => (
                  <div key={fileIndex} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-start">
                        {getFileIcon(arquivo.formato)}
                        <div className="ml-3">
                          <h3 className="text-lg font-semibold text-[#2C3E50]">{arquivo.nome}</h3>
                          <p className="text-sm text-gray-600 mb-2">{arquivo.descricao}</p>
                          <div className="flex items-center">
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">{arquivo.formato}</span>
                            <a 
                              href={`/downloads/${arquivo.arquivo}`} 
                              download
                              className="ml-auto flex items-center text-sm text-[#3498DB] hover:text-[#2980B9] transition-colors"
                            >
                              <Download size={16} className="mr-1" />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-[#ECF0F1] p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Baixar Todos os Arquivos</h2>
            <p className="text-gray-700 mb-4">
              Você também pode baixar todos os arquivos do projeto em um único pacote ZIP.
            </p>
            <a 
              href="/downloads/cuidarbem-projeto-completo.zip" 
              download
              className="inline-flex items-center bg-[#3498DB] hover:bg-[#2980B9] text-white font-bold py-2 px-4 rounded transition-colors"
            >
              <Download size={20} className="mr-2" />
              Baixar Projeto Completo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
