import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <GoogleOAuthProvider clientId="963825452496-tnraf21dgmtf9bq16godr6d3bo1kaltk.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  
  </StrictMode>,
)
