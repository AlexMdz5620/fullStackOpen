import { useState } from 'react'

const Statistics = ({good, neutral, bad, count, avg, positive}) => (
  <>
    <StatisticsLine text='Good' value={good} />
    <StatisticsLine text='Neutral' value={neutral} />
    <StatisticsLine text='Bad' value={bad} />
    <StatisticsLine text='All' value={count} />
    <StatisticsLine text='Average' value={avg} />
    <StatisticsLine text='Positive' value={positive} extra={'%'}/>
  </>
)

const StatisticsLine = ({ text, value, extra}) => (
  <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value} {extra}</td>
      </tr>
    </tbody>
  </table>
  )

const Button = (props) =>  (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let [count, setCount] = useState(0)
  let [point, setPoint] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGood = () => {
    const countGood = good + 1
    setGood(countGood)
    setCount(count += 1)
    setPoint(point += 1)
    setAvg(point / count)
    setPositive(countGood * 100 / count)
  }
  const handleNeutral = () => {
    const countNeutral = neutral + 1
    setNeutral(countNeutral)
    setCount(count += 1)
    setPoint(point += 0)
    setAvg(point / count)
  }
  const handleBad = () => {
    const countBad = bad + 1
    setBad(countBad)
    setCount(count += 1)
    setPoint(point -= 1)
    setAvg(point / count)
  }

  return (
    <>
      <h1>Givme Feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h1>Statistics</h1>
      {count === 0 
        ? <p>No feedback given</p>
        :
          <>
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              count={count}
              avg={avg}
              positive={positive}/>
          </>
      }
      
    </>
  )
}

export default App
