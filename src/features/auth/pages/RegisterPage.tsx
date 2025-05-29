import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Register logic here
        alert(`Kayıt başarılı!\nKullanıcı adı: ${form.username}\nEmail: ${form.email}`);
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: 24 }}>
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Kullanıcı Adı:
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Şifre:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
};

export default RegisterPage;