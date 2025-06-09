const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Projeto Cuidar Bem</h3>
            <p className="text-sm text-gray-300">
              Otimizando o acolhimento em centros de apoio psicológico através de técnicas de Pesquisa Operacional.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-[#27AE60] transition-colors">Início</a></li>
              <li><a href="/sobre" className="hover:text-[#27AE60] transition-colors">Sobre</a></li>
              <li><a href="/formulacao" className="hover:text-[#27AE60] transition-colors">Formulação</a></li>
              <li><a href="/resultados" className="hover:text-[#27AE60] transition-colors">Resultados</a></li>
              <li><a href="/downloads" className="hover:text-[#27AE60] transition-colors">Downloads</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-gray-300">
              Para mais informações sobre este projeto ou para implementar uma solução semelhante, entre em contato.
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Email: contato@cuidarbem.org
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Projeto Cuidar Bem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
