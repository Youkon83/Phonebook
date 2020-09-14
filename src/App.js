import React, { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Contacts from './components/contacts'

const App = () => {
  //person array
  const [persons, setPersons ] = useState([
    { name: '', number: '' }
  ]) 
  //new name state
  const [newName, setNewName ] = useState('')
  //new number state
  const [newNumber, setNewNumber] = useState('')
  //filter state
  const [filter, setFilter] = useState('')
 
  //add name to list
  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

  //check if name already exist in array, display alert if it does
  const nameList =  persons.map(person => person.name)
  if (nameList.includes(newName)) {
    alert(`${newName} is already added to phonebook`)
    return
  }
    //concat name to array
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const nameFilter = filter === ''
  ? persons
  : persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase()))
  
  //name change handler
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  //number change handler
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  //filter change handler
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  //list persons, and their numbers
  const contacts = () => 
    nameFilter.map(person => 
      <p key={person.name}>{person.name} {person.number}</p>
    )
  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new contact</h2>
      <PersonForm  onSubmit={addContact}
        name={{value: newName, onChange: handleNameChange}}
        number={{value: newNumber, onChange: handleNumberChange}}
        />
      <h2>Numbers</h2>
      <Contacts persons = {contacts()}/>
    </div>
  )
}

export default App
