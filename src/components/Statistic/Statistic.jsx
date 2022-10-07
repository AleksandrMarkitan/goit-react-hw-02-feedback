// import PropTypes from 'prop-types';

// import s from './Statistic.module.scss';
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
      <ul>
        <li>
          <p>{good}</p>
        </li>
        <li>
          <p>{neutral}</p>
        </li>
        <li>
          <p>{bad}</p>
        </li>
        <li>
          <p>{total}</p>
        </li>
        <li>
          <p>{positivePercentage}</p>
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
