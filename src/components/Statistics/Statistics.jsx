import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
        <div>
                <ul>
                <li className={styles.item}>
                    <p>
                        Good: <span className={styles.value}>{good}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Neutral: <span className={styles.value}>{neutral}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Bad: <span className={styles.value}>{bad}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Total: <span className={styles.value}>{total(good, neutral, bad)}</span>
                    </p>
                </li>
                <li className={styles.item}>
                    <p>
                        Positive feedback:
                        <span className={styles.value}>{positivePercentage(good, neutral, bad)}</span>
                    </p>
                </li>
                </ul>
        
        </div>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;



    