import { useState } from 'react';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
    const response = await fetch('https://localhost:7277/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    usernameOrEmail: email,
    password: password
  })
});


      if (!response.ok) {
        const errorText = await response.text();
        alert('Giriş başarısız: ' + errorText);
        return;
      }

      const data = await response.json(); // { token: "...", expiresIn: 3600 }

      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('Giriş başarılı!');
        window.location.href = '/'; // yönlendirme
      } else {
        alert('Token alınamadı!');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('Hata oluştu: ' + error.message);
      } else {
        alert('Bilinmeyen bir hata oluştu.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Giriş Yap</h2>

      <div>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <br />
        <button onClick={handleLogin} className={styles.button}>
          Giriş Yap
        </button>
      </div>

      <div>
        <p>veya</p>
        <GoogleLoginButton/>
      </div>
    </div>
  );
}

export default LoginPage;
