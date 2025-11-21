import React, { useMemo } from 'react';
import { Missionary } from '../../data';
import styles from './MissionaryCard.module.css';
import { Globe } from 'lucide-react';

interface MissionaryCardProps {
    missionary: Missionary;
}

// Função auxiliar para simular o cálculo pesado da bandeira
// Geralmente seria uma chamada a uma API ou uma função de processamento de string.
const getCountryFlag = (countryCode: string): string => {
    // Simulação de cálculo 'pesado' com switch/case
    switch (countryCode) {
        case 'BR': return '🇧🇷';
        case 'US': return '🇺🇸';
        case 'KR': return '🇰🇷';
        default: return '🗺️';
    }
};

// PASSO 4: Implementação de React.memo para evitar re-renderizações desnecessárias
// Se a prop 'missionary' não mudar (shallow comparison), o componente não renderiza.
const MissionaryCard: React.FC<MissionaryCardProps> = React.memo(({ missionary }) => {
    
    // PASSO 4: Uso do useMemo em renderizações de cálculos 'pesados'
    // A bandeira só será recalculada se missionary.country realmente mudar.
    const flag = useMemo(() => getCountryFlag(missionary.country), [missionary.country]);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.name}>{missionary.name}</h3>
                <span className={styles.flag}>
                    {flag}
                </span>
            </div>
            <p className={styles.role}>{missionary.role} - <Globe size={14} /> {missionary.country}</p>
            <span 
                className={`${styles.status} ${missionary.isFunded ? styles.funded : styles.notFunded}`}
            >
                {missionary.isFunded ? 'Financiado' : 'Aguardando Apoio'}
            </span>
        </div>
    );
});

export default MissionaryCard;
