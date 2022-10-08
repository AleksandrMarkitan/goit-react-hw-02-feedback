// import PropTypes from 'prop-types';

import s from './Statistic.module.scss';
// className={(s['list'], s['statistic'])}

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={s.list}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total(good, neutral, bad)}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage(good, neutral, bad)} %</p>
        </li>
      </ul>
    </>
  );
};

// User.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired, // name of the users  object  being
//   }).isRequired,
// };
