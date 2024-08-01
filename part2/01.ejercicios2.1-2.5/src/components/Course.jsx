import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {

  return (
    <>
    {
        course.map(course => {
            return (
                <div key={course.id}>
                    <Header title={course.name} />
                    <Content parts={course.part} />
                </div>
            )
        })
    }
    </>
  )
}

export default Course