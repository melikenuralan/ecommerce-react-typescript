import React, { useState } from 'react';

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
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ad Soyad:
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Kullanıcı Adı:
          <input type="text" name="username" value={form.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Şifre:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Şifre Tekrar:
          <input type="password" name="passwordConfirm" value={form.passwordConfirm} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Two-Factor Türü:
          <input
            type="number"
            name="twoFactorType"
            value={form.twoFactorType}
            onChange={handleChange}
            min={0}
            max={2}
          />
          <small> (0: Authenticator, 1: SMS, 2: Email)</small>
        </label>
        <br />
        <button type="submit" style={{ marginTop: 10 }}>Kayıt Ol</button>
      </form>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
};

export default RegisterPage;
