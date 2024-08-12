import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
import phonebookServices from './services/phenobook'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    phonebookServices
      .getAll()
      .then(initialPhones => {
        setPersons(initialPhones)
      })
  }, [])

  const replacePhone = id => {
    const person = persons.find(p => p.id === id)
    if (person) {
      const updatedPerson = { ...person, phone: newPhone }
      phonebookServices
      .update(id, updatedPerson)
      .then(updated => {
        setPersons(persons.map(p => p.id !== id ? p : updated))
        setNewName('')
        setNewPhone('')
      })
    }
  }

  const addPerson = (e) => {
    e.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)

    if(existingPerson){
      if(window.confirm(`${newName} is already added to Phonebook, replace the old number with a new one?`)){
        replacePhone(existingPerson.id)
      }
    } else {
      const personObject = { 
        name: newName,
        phone: newPhone,
        id: persons.length + 1
      }

      phonebookServices
      .create(personObject)
      .then(returnedPhone => {
        setPersons(persons.concat(returnedPhone))
        setNewName('')
        setNewPhone('')
      })
    }
  }

  const deletePhone = (person) => {
    if(window.confirm(`Delete ${person.name}`)){
      phonebookServices
        .deletePhone(person.id)
        .then(() => {
            setPersons(persons.filter(p => p.id !== person.id))
        })
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

      <Persons 
        findPerson={findPerson}
        deletePhone={deletePhone}
      />
      
    </div>
  )
}

export default App
