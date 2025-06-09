import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#2C3E50] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
              <span className="text-xl font-bold">Cuidar Bem</span>
              <span className="ml-2 text-[#27AE60] font-light">Otimização</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Sobre
              </Link>
              <Link to="/formulacao" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Formulação
              </Link>
              <Link to="/dados" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Dados
              </Link>
              <Link to="/implementacao" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Implementação
              </Link>
              <Link to="/resultados" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Resultados
              </Link>
              <Link to="/downloads" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#3498DB] hover:text-white transition-colors">
                Downloads
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3498DB] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#2C3E50]">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link 
              to="/formulacao" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Formulação
            </Link>
            <Link 
              to="/dados" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Dados
            </Link>
            <Link 
              to="/implementacao" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Implementação
            </Link>
            <Link 
              to="/resultados" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Resultados
            </Link>
            <Link 
              to="/downloads" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3498DB] hover:text-white"
              onClick={closeMenu}
            >
              Downloads
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
