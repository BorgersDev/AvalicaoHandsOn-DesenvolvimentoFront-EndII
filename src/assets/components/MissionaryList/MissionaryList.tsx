import React, { useEffect, useState } from 'react';
import MissionaryCard from '../MissionaryCard/MissionaryCard';
import { Missionary, fetchMissionaries } from '../../data';
import styles from './MissionaryList.module.css';

const MissionaryList: React.FC = () => {
    const [missionaries, setMissionaries] = useState<Missionary[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMissionaries().then(data => {
            setMissionaries(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p className={styles.loadingMessage}>Carregando dados dos missionários...</p>; 
    }

    return (
        <div className={styles.listContainer}>
            {missionaries.map(m => (
                <MissionaryCard key={m.id} missionary={m} />
            ))}
        </div>
    );
};

export default MissionaryList;
