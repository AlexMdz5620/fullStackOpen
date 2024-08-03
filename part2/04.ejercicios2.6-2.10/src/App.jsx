import { useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"

function App() {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-123456',
      id: 1
    },
    { 
      name: 'Ada Lovelace',
      phone: '39-44-5323523',
      id: 2
    },
    { 
      name: 'Dan Abramov',
      phone: '12-43-234345',
      id: 3
    },
    {
      name: 'Mary Poppendieck',
      phone: '39-23-6423122',
      id: 4
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = { 
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to Phonebook`)
    } else if(persons.some(person => person.phone === newPhone)){
      alert(`${newPhone} is already added to Phonebook`)
    } else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearchName = (e) => {
    setSearchName(e.target.value)
  }
  
  const findPerson = searchName
      ? persons.filter(person => {
          return person.name.toLowerCase().includes(searchName.toLowerCase())
        })
      : persons
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
      
      <h2>Add a New</h2>

      <Form 
        addPerson={addPerson}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />

      <h2>Numbers</h2>

      <Persons findPerson={findPerson}/>
      
    </div>
  )
}

export default App
