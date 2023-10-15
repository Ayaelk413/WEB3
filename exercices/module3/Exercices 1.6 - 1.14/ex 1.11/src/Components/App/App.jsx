import React, { useState } from 'react';
import Button from '../Button/Button';
import StatisticLine from '../StatisticLine/StatisticLine';


const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback || 0;
  const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0;

  // Si aucune rétroaction n'a été donnée, affiche un message approprié.
  if (totalFeedback === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total Feedback" value={totalFeedback} />
          <StatisticLine text="Average Score" value={averageScore.toFixed(2)} />
          <StatisticLine
            text="Positive Feedback Percentage"
            value={positiveFeedbackPercentage.toFixed(2) + '%'}
          />
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const feedbackGiven = good + neutral + bad > 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given yet.</p>
      )}
    </div>
  );
};

export default App;
