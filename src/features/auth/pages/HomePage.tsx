import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div style={{ maxWidth: 800, margin: '64px auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to ECommercial</h1>
                <h3 style={{ color: '#666', fontWeight: 400 }}>
                    Your one-stop shop for all your needs.
                </h3>
                <a
                    href="/products"
                    style={{
                        display: 'inline-block',
                        marginTop: 32,
                        padding: '12px 32px',
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        fontSize: 18,
                        border: 'none',
                        borderRadius: 4,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'background 0.2s'
                    }}
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default HomePage;