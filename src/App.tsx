import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import FormulacaoPage from './pages/FormulacaoPage';
import DadosPage from './pages/DadosPage';
import ImplementacaoPage from './pages/ImplementacaoPage';
import ResultadosPage from './pages/ResultadosPage';
import DownloadsPage from './pages/DownloadsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/formulacao" element={<FormulacaoPage />} />
            <Route path="/dados" element={<DadosPage />} />
            <Route path="/implementacao" element={<ImplementacaoPage />} />
            <Route path="/resultados" element={<ResultadosPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
