import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import styles from './LoginPage.module.css';

const SITE_KEY = '6Lf7flErAAAAAO012YJ5j4nZ85gjyzkXd2mGvBqn'; // Google'dan aldığın reCAPTCHA v2 site key

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

 const handleCaptchaChange = (token: string | null) => {
  console.log("Captcha Token Geldi:", token);
  setRecaptchaToken(token);
};


  const handleLogin = async () => {
    if (!recaptchaToken) {
      alert('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
      return;
    }

    try {
      const response = await fetch('https://localhost:7277/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail: email,
          password: password,
          recaptchaToken: recaptchaToken, // reCAPTCHA token backend'e gidiyor
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert('Giriş başarısız: ' + errorText);
        return;
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('Giriş başarılı!');
        window.location.href = '/';
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

      
        <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />

        <button onClick={handleLogin} className={styles.button}>
          Giriş Yap
        </button>
      </div>

      <div>
        <p>veya</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
