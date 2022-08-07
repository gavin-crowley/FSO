import { useState } from "react";

const App = () => {
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

  const StatisticLine = ({ text, value, symbol }) => (
    <>
      <tr>
        <td>
          {text}
        </td>
        <td>
          {value} {symbol}
        </td>
      </tr>
    </>
  );

  const Statistics = () => {
    if ((good || neutral || bad) === 0) {
      return <div>No feedback given</div>;
    } else {
      return (
        <>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={good + neutral + bad} />
              <StatisticLine
                text="average"
                value={(good - bad) / (good + neutral + bad)}
              />
              <StatisticLine
                text="positive"
                value={good / (good + neutral + bad)}
                symbol="%"
              />
            </tbody>
          </table>
        </>
      );
    }
  };

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Heading text="statistics" />

      <Statistics />
    </div>
  );
};

export default App;
