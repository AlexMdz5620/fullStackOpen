 
const ButtonDelete = ({ person, deletePhone }) => {
  const handleDelte = () => deletePhone(person)

  return (
    <button onClick={handleDelte}>Delete</button>
  )
}

export default ButtonDelete