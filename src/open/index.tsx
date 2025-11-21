import React from 'react';
import { SignInButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

const OpenPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Página Pública (Acesso Livre)</h1>
      <p>Você pode acessar esta página sem estar logado.</p>
      
      <div style={{ marginTop: '20px' }}>
        <SignInButton mode="modal">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Fazer Login
          </button>
        </SignInButton>
        <p style={{ marginTop: '10px' }}><Link to="/">Ir para a Home (Protegida)</Link></p>
      </div>
    </div>
  );
};

export default OpenPage;
