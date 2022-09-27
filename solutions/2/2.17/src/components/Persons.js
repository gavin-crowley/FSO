import React from 'react';

export default function Persons({persons, searchTerm, handleDelete}) {
  return (
    <>
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
            <span>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button></span>
          </div>
        ))}
    </>
  );
}
