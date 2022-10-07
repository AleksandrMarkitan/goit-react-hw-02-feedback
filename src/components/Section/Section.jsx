import PropTypes from 'prop-types';

// import s from './Section.module.scss';
//  className={s['section']}

export const Section = ({ children, title }) => {
  return (
    <Section>
      {<h2>{title}</h2>}
      {children}
    </Section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
