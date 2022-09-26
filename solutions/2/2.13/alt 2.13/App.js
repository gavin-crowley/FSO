import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countries = response.data.map((country) => country);
      setCountries(countries);
    });
  }, []);

  const filteredCountries = countries.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (
      item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <>
      <div>
        find countries{' '}
        <input
          type='text'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {filteredCountries.length > 10 ? (
          <div>Too many matches, specify another filter</div>
        ) : filteredCountries.length < 10 && filteredCountries.length > 1 ? (
          filteredCountries.map((country) => {
            return (
              <React.Fragment key={country.name.common}>
                <div>
                  <span>{country.name.common}</span>
                  <button onClick={() => setSearchTerm(country.name.common)}>
                    show
                  </button>
                </div>
              </React.Fragment>
            );
          })
        ) : (
          filteredCountries.map((country) => (
            <div key={country.name.common}>
              <h1>{country.name.common}</h1>
              <div>capital {country.capital}</div>
              <div>area {country.area}</div>
              <h4>languages:</h4>
              <ul>
                {Object.values(country.languages).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <img
                src={country.flags.png}
                alt='flag'
                style={{ width: '20%' }}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}
