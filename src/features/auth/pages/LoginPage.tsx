import GoogleLoginButton from '../components/GoogleLoginButton';

function LoginPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Giriş Yap</h2>
      
      <GoogleLoginButton onClick={() => alert("Google Login butonuna tıklandı")} />
    </div>
  );
}

export default LoginPage;
