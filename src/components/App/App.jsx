import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(100 / ((good + neutral + bad) / good)) + '%';
  };

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break;

      case 'bad':
        setBad(bad => bad + 1)
        break;

      default:
        return;
    }
  }

  return (
    <>
      <Section title={"Please leave feedback"}>
          <FeedbackOptions options={['good', 'neutral', 'bad']}
           onLeaveFeedback={onLeaveFeedback} />
        </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback(good, neutral, bad) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
        </Section>
      </>
  )
  };

export default App;
