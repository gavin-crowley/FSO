import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3003/persons').then((response) => {
      console.log(response);
      setPersons(response.data);
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
      : axios
          .post('http://localhost:3003/persons', newPersonObj)
          .then((response) => {
            setPersons(persons.concat(response.data));
          });

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setSearchTerm={setSearchTerm} />

      <PersonForm
        addPerson={addPerson}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
