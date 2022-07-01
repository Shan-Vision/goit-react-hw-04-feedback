import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Section title="Statistics" />
      {total > 0 ? (
        <List>
          <Item>Good: {good}</Item>
          <Item>Neutral:{neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total} </Item>
          <Item>Positiv feedback: {positivePercentage}%</Item>
        </List>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
