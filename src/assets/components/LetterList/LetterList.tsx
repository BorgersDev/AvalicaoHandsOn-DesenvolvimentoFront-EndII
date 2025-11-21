import React, { useEffect, useState } from 'react';
import LetterCard from '../LetterCard/LetterCard';
import { Letter, fetchLetters } from '../../data';
import styles from './LetterList.module.css';
import { Inbox } from 'lucide-react';

const LetterList: React.FC = () => {
    const [letters, setLetters] = useState<Letter[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLetters().then(data => {
            setLetters(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p className={styles.loadingMessage}>Buscando cartas...</p>;
    }

    if (letters.length === 0) {
        return (
            <div className={styles.emptyState}>
                <Inbox size={48} color="#007bff" />
                <p>Nenhuma carta recente disponível. Volte mais tarde!</p>
            </div>
        );
    }

    return (
        <div className={styles.listContainer}>
            {letters.map(l => (
                <LetterCard key={l.id} letter={l} />
            ))}
        </div>
    );
};

export default LetterList;
