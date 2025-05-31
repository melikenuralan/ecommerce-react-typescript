import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Ürünler", href: "/products" },
  { name: "Kampanyalar", href: "/campaigns" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <a href="/">eCommercial</a>
      </div>
      <ul className={styles.navbar__links}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.navbar__actions}>
        <button className={styles.navbar__cart}>
          <span role="img" aria-label="cart">🛒</span>
        </button>
        <button
          className={styles.navbar__login}
          onClick={() => navigate("/login")}
        >
          Giriş Yap
        </button>
        <button
          className={styles.navbar__register}
          onClick={() => navigate("/register")}
        >
          Kayıt Ol
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
