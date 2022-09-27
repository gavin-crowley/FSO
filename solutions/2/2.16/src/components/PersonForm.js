import React from 'react';

export default function PersonForm({addPerson, handleNameInput, newName, handleNumberInput, newNumber}) {
  return (
    <>
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
    </>
  );
}
