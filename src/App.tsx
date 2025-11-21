import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn 
} from "@clerk/clerk-react";

import HomePage from "./pages/home";
import OpenPage from "./pages/open";

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Rota 1: Raiz (/) - Rota Protegida */}
        <Route 
          path="/" 
          element={
            <>
              {/* Se o usuário estiver logado, mostra a HomePage */}
              <SignedIn>
                <HomePage />
              </SignedIn>
              {/* Se não estiver logado, redireciona para a tela de Login do Clerk */}
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Rota 2: /open - Rota Pública */}
        <Route path="/open" element={<OpenPage />} />

        {/* Rota 3: Catch-all (*) - Lidar com Rotas Não Encontradas */}
        {/* Aqui, qualquer rota desconhecida redireciona para o login se não estiver logado */}
        <Route 
          path="*" 
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
