import { useState } from "react"

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter valuer ', counter)

  const increaseByOne = () => {
    console.log('increasing,value before ', counter)
    setCounter(counter + 1)
  }
  const decrementByOne = () => {
    console.log('decreaing,value before ', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('setting to zero,value before ', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne}
        text="plus"
      />
      <Button 
        onClick={setToZero}
        text="zero"
      />
      <Button 
        onClick={decrementByOne}
        text="minus"
      />
    </>
  )
}

export default App
