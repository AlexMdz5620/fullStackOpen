import { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteServices from "./services/notes"

const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Notes app, Departament of Computer Science, University of Helsinki 2024</em>
    </div>
    )
}

const App = () => {
  const [notes, setNotes] = useState(null);
  const [newNotes, setNewNotes] = useState("");
  const [showAll, setshowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Some error happened...');

  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes);
      })
  }, []);

  if(!notes){
    return null
  }

  const toggleImportance = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteServices
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `The note "${note.content}" was already delete from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addnote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNotes,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    noteServices
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNotes("")
      })
  }

  const handleNoteChange = (e) => {
    setNewNotes(e.target.value);
  };

  const noteToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setshowAll(!showAll)}>
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {noteToShow.map((note) => {
          return <Note 
                    key={note.id}
                    note={note}
                    toggleImportance={() => toggleImportance(note.id)}
                 />;
        })}
      </ul>
      <form onSubmit={addnote}>
        <input value={newNotes} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
