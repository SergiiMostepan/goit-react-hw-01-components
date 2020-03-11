import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stata.module.css';

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const StataCard = ({ statistic, title }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {statistic.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{
            backgroundColor: `#${randomColor()}`,
          }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

StataCard.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StataCard;
