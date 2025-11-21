import React, { useMemo } from 'react';
import { Missionary } from '../../data';
import styles from './MissionaryCard.module.css';
import { Globe } from 'lucide-react';

interface MissionaryCardProps {
    missionary: Missionary;
}

const getCountryFlag = (countryCode: string): string => {
    switch (countryCode) {
        case 'BR': return '🇧🇷';
        case 'US': return '🇺🇸';
        case 'KR': return '🇰🇷';
        default: return '🗺️';
    }
};

const MissionaryCard: React.FC<MissionaryCardProps> = React.memo(({ missionary }) => {

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
