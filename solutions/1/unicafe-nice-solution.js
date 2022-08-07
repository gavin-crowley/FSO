import { useState } from 'react';

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={good + neutral + bad} />
          <StatisticsLine
            text='average'
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticsLine
            text='positive'
            value={(good / (good + neutral + bad)) * 100}
          />
        </tbody>
      </table>
    </>
  );
};

const StatisticsLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = (props) => {
  const { text, value, action } = props;
  return <button onClick={() => action(value + 1)}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log(good, neutral, bad);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' value={good} action={setGood} />
        <Button text='neutral' value={neutral} action={setNeutral} />
        <Button text='bad' value={bad} action={setBad} />
      </div>
      {good + neutral + bad !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>
          <h3>No feedback given</h3>
        </div>
      )}
    </div>
  );
};

export default App;
