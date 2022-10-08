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

  onLeaveFeedback = e => {
    const feedbackType = e.target.attributes.text.nodeValue;
    this.setState(prevState => ({
      [feedbackType]: Number((prevState[feedbackType] += 1)),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={good + neutral + bad}
              positivePercentage={(good / (good + neutral + bad)) * 100}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
