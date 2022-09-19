import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allCountryData, setAllCountryData] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const names = response.data.map((i) => i.name.common);
      setCountries(names);
      setAllCountryData(response.data);
      // setAllCountryData(response.data.slice(0, 10));
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8e64341d2040d3b33c77344eb5c33395'
      )
      .then((response) => {console.log(response)});
  }, []);

  const filteredCountries = countries.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  // console.log(filteredCountries);
  // console.log(countries);
  // console.log(allCountryData);

  const CountryView = ({ allCountryData, filteredCountries }) => {
    return (
      <>
        <div>
          <h1>
            {
              allCountryData[countries.indexOf(filteredCountries.join())].name
                .common
            }
          </h1>
          <p>
            capital{' '}
            {
              allCountryData[countries.indexOf(filteredCountries.join())]
                .capital
            }
          </p>
          <p>
            area{' '}
            {allCountryData[countries.indexOf(filteredCountries.join())].area}
          </p>
          <p>
            <strong>languages:</strong>{' '}
            {Object.values(
              allCountryData[countries.indexOf(filteredCountries.join())]
                .languages
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </p>
          <p>
            <img
              style={{ width: 100 }}
              src={
                allCountryData[countries.indexOf(filteredCountries.join())]
                  .flags.svg
              }
              alt='flag'
            />
          </p>
          <p>
            <h2>
              Weather in{' '}
              {
                allCountryData[countries.indexOf(filteredCountries.join())]
                  .capital
              }
            </h2>
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <label>
          <span>find countries</span>
          <input
            type='text'
            placeholder='Search here...'
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
        <div>
          {filteredCountries.length === 1 ? (
            <CountryView
              filteredCountries={filteredCountries}
              allCountryData={allCountryData}
            />
          ) : filteredCountries.length < 10 ? (
            filteredCountries.map((item) => (
              <div key={item}>
                <span>
                  {item}{' '}
                  <button onClick={() => setSearchTerm(item)}>show</button>
                </span>
              </div>
            ))
          ) : (
            'Too many matches, specify another filter'
          )}
        </div>
      </div>
    </>
  );
};

export default App;
