// import s from './Feedback.module.scss';
//  className={(s['list'], s['feedback-button'])}

export const FeedbackOptions = ({
  options: { feedbackGood, feedbackNeutral, feedbackBad },
}) => {
  return (
    <>
      <ul>
        <li>
          <button
            type="button"
            text="Good"
            onClick={() => feedbackGood()}
          ></button>
        </li>
        <li>
          <button
            type="button"
            text="Neutral"
            onClick={() => feedbackNeutral()}
          ></button>
        </li>
        <li>
          <button
            type="button"
            text="Bad"
            onClick={() => feedbackBad()}
          ></button>
        </li>
      </ul>
    </>
  );
};
