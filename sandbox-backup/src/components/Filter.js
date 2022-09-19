import React from "react";

const Filter = ({ handleSearch, searchValue }) => {
  return (
    <>
      <div>
        filter shown with{' '}
        <input
          type='text'
          name='search'
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
    </>
  );
};

export default Filter;
