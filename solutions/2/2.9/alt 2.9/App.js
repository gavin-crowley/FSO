import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
      : setPersons(persons.concat(newPersonObj));

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          type='text'
          placeholder='Search here...'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input onChange={handleNameInput} value={newName} />
          </div>
          <div>
            number: <input onChange={handleNumberInput} value={newNumber} />
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
      </div>

      <h2>Numbers</h2>
      {persons
        // eslint-disable-next-line array-callback-return
        .filter((item) => {
          if (searchTerm === '') {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((person, i) => (
          <div key={i}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};

export default App;
