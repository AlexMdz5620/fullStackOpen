const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = { props.part1 } exercises = { props.exercises1 }/>
      <Part part = { props.part2 } exercises = { props.exercises2 }/>
      <Part part = { props.part3 } exercises = { props.exercises3 }/>
    </div>
  )
}

const Part = (props) => {
  return (
      <p>
        {props.part} {props.exercises}
      </p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const array = [
    { part1 : 'Fundamentals of React', exercises1 : 10 },
    { part2 : 'State of a component', exercises2 : 7 },
    { part3 : 'Fundamentals of React', exercises3 : 14 }
  ]

  return (
    <div>
      
      {/* <h1>{course}</h1> */}
      <Header course={course} />

      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      <Content 
        part1={array[0].part1} exercises1={array[0].exercises1}
        part2={array[1].part2} exercises2={array[1].exercises2}
        part3={array[2].part3} exercises3={array[2].exercises3}        
      />

      {/* <p>Number of exercises {array[0].exercises1 + array[1].exercises2 + array[2].exercises3}</p> */}
      <Total exercises1={array[0].exercises1} exercises2={array[1].exercises2} exercises3={array[2].exercises3} />

    </div>
  )
}

export default App