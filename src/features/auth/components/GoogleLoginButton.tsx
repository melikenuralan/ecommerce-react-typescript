import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton: React.FC = () => {
    const handleSuccess = async (credentialResponse: any) => {
        const idToken = credentialResponse.credential;

        try {
            const response = await fetch("https://localhost:7277/api/auth/google-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken: idToken , provider: "Google"}),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem("token", result.token.accessToken);
                alert("✅ Giriş başarılı!");
                // İsteğe göre yönlendir
                // window.location.href = "/";
            } else {
                const err = await response.text();
                alert("❌ Hata: " + err);
            }
        } catch (err) {
            console.error(err);
            alert("❌ Sunucuya bağlanırken hata oluştu.");
        }
    };

    const handleError = () => {
        alert("Google oturum açma başarısız oldu");
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
        />
    );
};

export default GoogleLoginButton;