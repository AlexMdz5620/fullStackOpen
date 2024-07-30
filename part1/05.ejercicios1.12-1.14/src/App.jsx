import { useState } from "react"

const Title = (props) => (
  <h1>{props.title}</h1>
)

const Button = (props) => (
  <button onClick={props.handleRound}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'Adding manpower to a late software project makes it later!',
    'The best way to get a project done faster is to start sooner -- Jim Highsmith',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time. -- Tom Cargill',
    'Even the best planning is not so omniscient as to get it right the first time. -- Fred Brooks',
    'How does a project get to be a year late?... One day at a time. -- Fred Brooks',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging. -- Fred Brooks',
    'Plan to throw one (implementation) away; you will, anyhow. -- Fred Brooks',
    "Every good work of software starts by scratching a developer's personal itch",
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away --Antoine de Saint-Exupery',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. --Martin Fowler'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))


  const handleRound = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }
  
  return (
    <>
      <Title title="Anecdote of the Day" />
      <div>
        {anecdotes[selected]}
        <p>Has {points[selected]} vote</p>
      </div>
      <Button handleRound={handleVote} text={'Vote'}/>
      <Button handleRound={handleRound} text={'Next Anecdote'}/>
      <Title title="Anecdote with most Votes" />
      <div>
        {anecdotes[points.indexOf(Math.max(...points))]}
        <p>Has {Math.max(...points)} votes</p>
      </div>
    </>
  )
}

export default App
