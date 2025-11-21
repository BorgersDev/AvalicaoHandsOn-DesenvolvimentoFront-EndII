import React from 'react';
import { Letter } from '../../data';
import styles from './LetterCard.module.css';
import { Mail } from 'lucide-react';

interface LetterCardProps {
    letter: Letter;
}

// PASSO 4: Implementação de React.memo
const LetterCard: React.FC<LetterCardProps> = React.memo(({ letter }) => {
    return (
        <div className={styles.card}>
            <h4 className={styles.title}><Mail size={16} /> {letter.title}</h4>
            <span className={styles.date}>Data: {letter.date}</span>
            <p className={styles.preview}>{letter.contentPreview}</p>
        </div>
    );
});

export default LetterCard;
