import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Ürünler", href: "/products" },
  { name: "Kampanyalar", href: "/campaigns" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

const basketItems = [
  { productId: "1", name: "Kırmızı Tişört", quantity: 2 },
  { productId: "2", name: "Siyah Ayakkabı", quantity: 1 },
];

const totalQuantity = basketItems.reduce((sum, item) => sum + item.quantity, 0);

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link to="/">eCommercial</Link>
      </div>

      <ul className={styles.navbar__links}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.navbar__actions}>
        <button
          className={styles.navbar__cart}
          onClick={() => navigate("/basket")}
        >
          <span role="img" aria-label="cart">
            🛒 ({totalQuantity})
          </span>
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
