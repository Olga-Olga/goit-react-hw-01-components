import propTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  const markup = stats.map(el => {
    return (
      <li
        key={el.id}
        className={style.item}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className={style.label}>{el.label} </span>
        <span className={style.percentage}>{el.percentage}</span>
      </li>
    );
  });
  //   const mark = stats.map(el => {
  //     `<li key=${el.id} className="item">
  //       <span className="label">${el.lable}</span>
  //       <span className="percentage">${el.percentage}</span>
  //     </li>`;
  //   });
  return (
    <section className={style.section}>
      {title ? <h2 className={style.title}>{title}</h2> : null}
      <ul className={style.statlist}>{markup}</ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  stats: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
};
