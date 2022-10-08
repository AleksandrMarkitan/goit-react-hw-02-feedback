import s from './Feedback.module.scss';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.list}>
        <li>
          <button
            className={s.button}
            type="button"
            text="good"
            onClick={e => onLeaveFeedback(e)}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={s.button}
            type="button"
            text="neutral"
            onClick={e => onLeaveFeedback(e)}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={s.button}
            type="button"
            text="bad"
            onClick={e => onLeaveFeedback(e)}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
