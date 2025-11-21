import React from 'react';
import styles from './MissionaryList.module.css';

const MissionaryListSkeleton: React.FC = () => (
    <div className={styles.listContainer}>
        {[1, 2, 3].map(i => (
            <div key={i} className={`${styles.skeletonCard} ${styles.card}`}>
                <div className={styles.skeletonLine} style={{ width: '70%', height: '20px' }} />
                <div className={styles.skeletonLine} style={{ width: '40%', height: '14px', marginTop: '8px' }} />
            </div>
        ))}
    </div>
);

export default MissionaryListSkeleton;
