import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

const addName = (event) => {
  event.preventDefault()
  const nameObject = {
    name: newName,
  }

  setPersons(persons.concat(nameObject))
  setNewName('')
}  

const handleNameChange = (event) => {
  setNewName(event.target.value)
}


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  );
};

export default App;
