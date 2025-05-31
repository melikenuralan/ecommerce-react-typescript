import React, { useState } from 'react';
import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    twoFactorType: 0,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "twoFactorType" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Buraya reCAPTCHA doğrulama da eklenebilir (isteğe bağlı)
    try {
      const response = await fetch('https://localhost:7277/api/Auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.text();

      if (response.ok) {
        setMessage('✅ Kayıt başarılı!');
      } else {
        setMessage(`❌ Hata: ${result}`);
      }
    } catch (error: any) {
      setMessage(`❌ İstek hatası: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Üye Ol</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Ad Soyad:
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.formLabel}>
          Kullanıcı Adı:
          <input type="text" name="username" value={form.username} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.formLabel}>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.formLabel}>
          Şifre:
          <input type="password" name="password" value={form.password} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.formLabel}>
          Şifre Tekrar:
          <input type="password" name="passwordConfirm" value={form.passwordConfirm} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.formLabel}>
          Two-Factor Türü:
          <input
            type="number"
            name="twoFactorType"
            value={form.twoFactorType}
            onChange={handleChange}
            min={0}
            max={2}
            className={styles.input}
          />
          <small className={styles.smallText}>(0: Authenticator, 1: SMS, 2: Email)</small>
        </label>

      
<div className={styles.recaptchaPlaceholder}>
  [reCAPTCHA alanı buraya gelecek]
</div>

        <button type="submit" className={styles.button}>Üye Ol</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      
    </div>
    
  );
};

export default RegisterPage;
