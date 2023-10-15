import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Calculate the total number of collected feedback
  const totalFeedback = good + neutral + bad;

  // Calculate the average score
  const averageScore = (good - bad) / totalFeedback || 0; // Handle division by zero

  // Calculate the percentage of positive feedback
  const positiveFeedbackPercentage = (good / totalFeedback) * 100 || 0; // Handle division by zero

  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>all: {totalFeedback}</p>
      <p>Average Score: {averageScore.toFixed(2)}</p>
      <p>Positive Feedback Percentage: {positiveFeedbackPercentage.toFixed(2)}%</p>
    </div>
  );
};

export default App;
