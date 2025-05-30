import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import RolePage from './features/userRoles/pages/RolePage'; // yoluna göre ayarla

import HomePage from './features/auth/pages/HomePage'; // opsiyonel ana sayfa
import Navbar from './components/Navbar/navbar'; // Navbar bileşeni
import Footer from './components/Footer/footer';
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/login">Giriş</Link>
        <Link to="/register">Kayıt</Link>
        <Link to="/roles">Roller</Link>
      </nav>


      <Navbar />
    

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/roles" element={<RolePage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
