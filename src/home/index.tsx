import React from 'react';
import { UserButton, useUser, SignOutButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { user } = useUser(); // Hook para acessar dados do usuário logado

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bem-vindo, {user?.firstName || 'Usuário'}! 🎉</h1>
      <p>Esta é a **Área Protegida**. Você só pode vê-la se estiver logado.</p>
      
      <div style={{ margin: '20px 0' }}>
        <UserButton afterSignOutUrl="/" /> {/* Botão de perfil do Clerk */}
      </div>

      <p><Link to="/open">Ir para a Página Pública</Link></p>
      <div style={{ marginTop: '20px' }}>
        <SignOutButton>
          <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
            Sair
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default HomePage;
