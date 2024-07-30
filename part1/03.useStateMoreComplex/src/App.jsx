import { useState } from "react";

/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
}; */

/* const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
}; */


/* const App = () => {
  const [click, setClick] = useState({
    left:0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClick({ ...click, left: click.left + 1 })
  }

  const handleRightClick= () => {
    setAllClicks(allClicks.concat('R'))
    setClick({ ...click, right: click.right + 1 })
  }

  return (
    <div>
      {click.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {click.right}
      <History allClicks={allClicks} />
    </div>
  )
}
 */

/* const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(updateLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(updateRight + left);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  );
}; */

const Display = (props) => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
      console.log('value now', newValue)
      setValue(newValue)
    }


  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text='thousand' />
      <Button handleClick={() => setToValue(0)} text='reset' />
      <Button handleClick={() => setToValue(value + 1)} text='increment' />
    </div>
  )
}

export default App;
