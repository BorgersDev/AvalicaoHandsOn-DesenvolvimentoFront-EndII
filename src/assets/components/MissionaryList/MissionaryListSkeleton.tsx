import React from 'react';
import styles from './MissionaryList.module.css';

// PASSO 6: Componente Skeleton para Missionary List
const MissionaryListSkeleton: React.FC = () => (
    <div className={styles.listContainer}>
        {/* Simula 3 cartões para o esqueleto */}
        {[1, 2, 3].map(i => (
            <div key={i} className={`${styles.skeletonCard} ${styles.card}`}>
                <div className={styles.skeletonLine} style={{ width: '70%', height: '20px' }} />
                <div className={styles.skeletonLine} style={{ width: '40%', height: '14px', marginTop: '8px' }} />
            </div>
        ))}
    </div>
);

export default MissionaryListSkeleton;
