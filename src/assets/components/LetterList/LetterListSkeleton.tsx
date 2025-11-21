import React from 'react';
import styles from './LetterList.module.css';

// PASSO 6: Componente Skeleton para Letter List
const LetterListSkeleton: React.FC = () => (
    <div className={styles.listContainer}>
        {/* Simula 2 cartões de carta */}
        {[1, 2].map(i => (
            <div key={i} className={`${styles.skeletonCard} ${styles.card}`}>
                <div className={styles.skeletonLine} style={{ width: '85%', height: '18px' }} />
                <div className={styles.skeletonLine} style={{ width: '100%', height: '40px', marginTop: '10px' }} />
            </div>
        ))}
    </div>
);

export default LetterListSkeleton;
