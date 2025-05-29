import React from 'react';

interface GoogleLoginButtonProps {
    onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px',
                backgroundColor: '#4285F4',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Sign in with Google
        </button>
    );
};

export default GoogleLoginButton;