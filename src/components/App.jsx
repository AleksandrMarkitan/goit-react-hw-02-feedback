import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGood = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };

  feedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };

  feedbackBad = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };

  onLeaveFeedback = () => {};

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return parseInt((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              feedbackGood: this.feedbackGood,
              feedbackNeutral: this.feedbackNeutral,
              feedbackBad: this.feedbackBad,
            }}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          ;
        </Section>
      </>
    );
  }
}
