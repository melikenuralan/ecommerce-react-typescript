import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
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
      </nav>


      <Navbar />
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
