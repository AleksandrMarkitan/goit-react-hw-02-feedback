import s from './Feedback.module.scss';

export const FeedbackOptions = ({
  options: { feedbackGood, feedbackNeutral, feedbackBad },
}) => {
  return (
    <>
      <ul className={s.list}>
        <li>
          <button
            className={s.button}
            type="button"
            text="Good"
            onClick={() => feedbackGood()}
          >
            {' '}
            Good
          </button>
        </li>
        <li>
          <button
            className={s.button}
            type="button"
            text="Neutral"
            onClick={() => feedbackNeutral()}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={s.button}
            type="button"
            text="Bad"
            onClick={() => feedbackBad()}
          >
            {' '}
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};
