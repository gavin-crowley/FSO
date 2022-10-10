import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  // useEffect(() => {
  //   axios
  //     // .get('https://restcountries.eu/rest/v3.1/all')
  //     .get('https://restcountries.com/v3.1/all')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setAllCountries(response.data)
  //     })
  // }, [])
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      // const names = response.data.map((i) => i.name.common);
      setAllCountries(response.data);
      // console.log(allCountries);
    });
  }, []);

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
    if (newFilter) {
      const regex = new RegExp(newFilter, 'i');
      const filteredCountries = () =>
      console.log(allCountries)
        allCountries.filter((country) => country.name.common.toLowerCase().includes(newFilter.toLowerCase()));
        // allCountries.filter((country) => country.name.match(regex));
      setCountries(filteredCountries);
    }
  };

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      {countries}
      <Content countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
