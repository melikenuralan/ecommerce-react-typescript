import React from "react";

const Footer: React.FC = () => (
    <footer style={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "1rem 0",
        marginTop: "2rem"
    }}>
        <div>
            &copy; {new Date().getFullYear()} ECommercial. Tüm hakları saklıdır.
        </div>
    </footer>
);

export default Footer;