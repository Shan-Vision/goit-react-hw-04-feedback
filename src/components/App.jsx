import { useState } from 'react';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/Feedbackoptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedbackClick = ({ option }) => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  const handleCount = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    handleCount() && Math.round((good / handleCount()) * 100);

  const optionStates = ['good', 'neutral', 'bad'];
  const total = handleCount();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={optionStates}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {handleCount() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
