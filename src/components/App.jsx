import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackGood = () => {};

  feedbackNeutral = () => {};

  feedbackBad = () => {};

  onLeaveFeedback = () => {};

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

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
          />
        </Section>
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
