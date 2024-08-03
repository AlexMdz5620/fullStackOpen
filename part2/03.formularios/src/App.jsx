import { useState } from "react"
import Notes from "./components/Notes"


function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNotes, setNewNotes] = useState('')
  const [showAll, setshowAll] = useState(true)  

  const addnote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNotes,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNotes(e.target.value)
  }

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setshowAll(!showAll)}>
          Show { showAll ? 'Important' : 'All'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note => {
          return (
            <Notes key={note.id} note={note} />
          )
        })}
      </ul>
      <form onSubmit={addnote}>
        <input 
          value={newNotes}
          onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
