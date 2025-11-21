import React, { Suspense } from 'react';
import styles from './App.module.css';

import MissionaryListSkeleton from './components/MissionaryList/MissionaryListSkeleton';
import LetterListSkeleton from './components/LetterList/LetterListSkeleton';

const MissionaryList = React.lazy(() => import('./components/MissionaryList/MissionaryList'));
const LetterList = React.lazy(() => import('./components/LetterList/LetterList'));

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            {/* PASSO 1: Header */}
            <header className={styles.header}>
                <h1>Dashboard de Missões</h1>
                <p>Monitoramento de Missionários e Cartas</p>
            </header>

            {/* PASSO 1: Main Content */}
            <main className={styles.main}>
                
                {/* Seção 1: Missionários */}
                <section className={styles.section}>
                    <h2>Missionários em Destaque</h2>
                    
                    {/* PASSO 6: Usando Suspense para lidar com o Lazy Loading */}
                    <Suspense fallback={<MissionaryListSkeleton />}>
                        <MissionaryList />
                    </Suspense>
                </section>

                {/* Seção 2: Cartas */}
                <section className={styles.section}>
                    <h2>Últimas Cartas</h2>
                    
                    {/* PASSO 6: Usando Suspense para lidar com o Lazy Loading */}
                    <Suspense fallback={<LetterListSkeleton />}>
                        <LetterList />
                    </Suspense>
                </section>
            </main>

            {/* PASSO 1: Footer */}
            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Sistema de Gestão de Missões. Otimizado com React.lazy e Memo.
            </footer>
        </div>
    );
};

export default App;
