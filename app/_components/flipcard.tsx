import React from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
    front: string;
    back: string;
    buttonText: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, buttonText }) => {
    return (
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <h3 className={styles.flipCardTitle}>{front}</h3>  
          </div>
          <div className={styles.flipCardBack}>
            <h3 className={styles.flipCardDescription}>{back}</h3>  
            <button className={styles.flipCardButton}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
};

export default FlipCard;
