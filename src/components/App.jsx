import { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/Feedbackoptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateButtons = Object.keys(this.state);

  handekFeedbackClick = ({ option }) => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <div>
        <FeedbackOptions
          options={this.stateButtons}
          onLeaveFeedback={this.handekFeedbackClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
