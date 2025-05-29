import React from "react";

const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Ürünler", href: "/products" },
    { name: "Kampanyalar", href: "/campaigns" },
    { name: "Hakkımızda", href: "/about" },
    { name: "İletişim", href: "/contact" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="/">eCommercial</a>
            </div>
            <ul className="navbar__links">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
            <div className="navbar__actions">
                <button className="navbar__cart">
                    <span role="img" aria-label="cart">🛒</span>
                </button>
                <button className="navbar__login">Giriş Yap</button>
                 <button className="navbar__login">Kayıt Ol</button>
            </div>
            <style>
                {`
                    .navbar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0.75rem 2rem;
                        background: linear-gradient(90deg, #0f2027, #2c5364);
                        color: #fff;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.07);
                    }
                    .navbar__logo a {
                        font-size: 1.7rem;
                        font-weight: bold;
                        color: #fff;
                        text-decoration: none;
                        letter-spacing: 1px;
                    }
                    .navbar__links {
                        display: flex;
                        gap: 2rem;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .navbar__links a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 1.1rem;
                        transition: color 0.2s;
                    }
                    .navbar__links a:hover {
                        color: #ffd700;
                    }
                    .navbar__actions {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                    }
                    .navbar__cart {
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 1.5rem;
                        cursor: pointer;
                    }
                    .navbar__login,
                    .navbar__register {
                        background: #ffd700;
                        color: #222;
                        border: none;
                        border-radius: 4px;
                        padding: 0.5rem 1.2rem;
                        font-weight: 500;
                        cursor: pointer;
                        transition: background 0.2s;
                    }
                    .navbar__login:hover,
                    .navbar__register:hover {
                        background: #fff;
                        color: #0f2027;
                    }
                    @media (max-width: 768px) {
                        .navbar__links {
                            display: none;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;