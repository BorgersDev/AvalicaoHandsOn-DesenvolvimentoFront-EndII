import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ClerkProvider } from "@clerk/clerk-react";

// Passo 3: Carrega a chave do ambiente
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk publishable key is missing.");
}

// Assumindo que AppContextProvider é um wrapper de contexto existente.
// Se não existir, basta remover AppContextProvider e usar apenas <App />
const AppContextProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolve toda a aplicação no ClerkProvider */}
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl='/' // Redireciona para a raiz após o logout
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </StrictMode>
);
