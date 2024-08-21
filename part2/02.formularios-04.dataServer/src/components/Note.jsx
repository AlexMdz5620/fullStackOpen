const Notes = ({ note, toggleImportance }) => {
  const label = note.importance
    ? 'Make no Important' : 'Make Important'

  return (
    <li className="note">
      <p>{note.content}</p>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Notes