import Part from "./Part"

function Content({ parts }) {

    const total = parts.reduce((sum, part) => {
          return sum + part.exercises
      }, 0)

    return(
        <>
            {parts.map(part => <Part key={part.id} part={part}/>)}
            <b>Total of {total} exercises</b>
        </>
    )
}

export default Content