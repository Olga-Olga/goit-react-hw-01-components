import propTypes from 'prop-types';
// import style from './Statistics.module.scss';
import { Title, Statlist, Item, Section } from './StatisticsStyle';

export const Statistics = ({ stats, title }) => {
  const markup = stats.map(el => {
    return (
      <Item key={el.id} style={{ backgroundColor: getRandomHexColor() }}>
        <span>{el.label} </span>
        <span>{el.percentage}</span>
      </Item>
    );
  });

  return (
    <Section>
      {title ? <Title>{title}</Title> : null}
      <Statlist>{markup}</Statlist>
    </Section>
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
