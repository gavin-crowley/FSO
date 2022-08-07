import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const Heading = ({ text }) => <h1>{text}</h1>;

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  const Display = ({ text, value, symbol }) => (
    <div>
      {text} {value} {symbol}
    </div>
  );

  const Statistics = () => {
    return (
      <>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {good + neutral + bad}</div>
        <div>average {(good - bad) / (good + neutral + bad)}</div>
        <div>positive {good / (good + neutral + bad)} %</div>
      </>
    );
  };

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Heading text="statistics" />
      {/* <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={good + neutral + bad} />
      <Display text="average" value={(good - bad) / (good + neutral + bad)} />
      <Display
        text="positive"
        value={good / (good + neutral + bad)}
        symbol="%"
      /> */}
      <Statistics />
    </div>
  );
};

export default App;
