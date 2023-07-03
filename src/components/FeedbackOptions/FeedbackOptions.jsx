import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { good, neutral, bad } = options;

  return (
    <>
      <ul className={css.buttonsWrapper}>
        <li>
          <button
            className={css.good}
            onClick={() => onLeaveFeedback({ good })}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.neutral}
            onClick={() => onLeaveFeedback({ neutral })}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.bad} onClick={() => onLeaveFeedback({ bad })}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
