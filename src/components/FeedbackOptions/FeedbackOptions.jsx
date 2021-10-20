import PropTypes from 'prop-types';

import styles from '../FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.list}>
      {options.map(option => {
        return (
          <li className={styles.item} key={option}>
            <button
              className={styles.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;