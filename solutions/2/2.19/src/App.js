import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import personService from './services/persons';

import './index.css'

import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('')

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };

    JSON.stringify(persons).includes(JSON.stringify(newName))
      ? alert(`${newName} is already added to phonebook`)
      : personService.create(newPersonObj).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
        });

    setNewName('');
    setNewNumber('');

    setMessage(`added ${newName}`)
    setTimeout(() => {
      setMessage(null)
    }, 2000)
  };
  
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      `Delete ${persons.find((person) => person.id === id).name}`
    );

    if (confirmed) {
      personService.deletePerson(`${id}`);
      setPersons(
        persons.filter((person) => {
          return person.id !== id;
        })
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />


      <Filter setSearchTerm={setSearchTerm} />

      <PersonForm
        addPerson={addPerson}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        searchTerm={searchTerm}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
