import React from 'react';
import styles from './Card.module.css';


interface CardProps {
    title: string;
    description: string;
}


const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>

    );
};

export default Card;


