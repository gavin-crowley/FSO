import React from 'react'

export default function Filter({setSearchTerm}) {
  return (
    <><div>
    filter shown with
    <input
      type='text'
      placeholder='Search here...'
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
  </div></>
  )
}
