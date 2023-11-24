import './App.css';
import Alergias from './pages/Alergias';
import HeaderPage from './components/HeaderPage';
import BodyPage from './components/BodyPage';
import FooterPage from './components/FooterPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BodyPage />}/>
          <Route path="/alergias" element={<Alergias />} />
          <Route path="*" element={<BodyPage />} />
          <Route path="/exames" element={<h1>Exames</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

