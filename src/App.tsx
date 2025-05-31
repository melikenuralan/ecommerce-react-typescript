import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import RolePage from './features/userRoles/pages/RolePage';

import HomePage from './features/auth/pages/HomePage';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/roles" element={<RolePage />} />
  </Routes>
  <Footer />
</BrowserRouter>

  );
}

export default App;
