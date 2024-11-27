import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListContainer from './components/ItemListContainer/ItemListContainer';
import ContactPage from './components/screens/Contacto'; // Página de contacto
import HomePage from './components/screens/Home'; // Página de inicio

function App() {
  return (
    <Router>
      <NavBar /> {/* Componente del Navbar */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
          <Route path="/productos" element={<ProductListContainer />} /> {/* Página de productos */}
          <Route path="/contacto" element={<ContactPage />} /> {/* Página de contacto */}
          <Route path="*" element={<h1>Página no encontrada</h1>} /> {/* Error para páginas no encontradas */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
