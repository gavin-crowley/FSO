import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [capital, setCapital] = useState('sweden');
  const [countryCode, setCountryCode] = useState('se');
  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countries = response.data.map((country) => country);
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    console.log(capital);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital},${countryCode}&APPID=8e64341d2040d3b33c77344eb5c33395`
        // `https://api.openweathermap.org/data/2.5/weather?q=${capital},uk&APPID=8e64341d2040d3b33c77344eb5c33395`
      )
      .then((response) => {
        console.log(response);
        const icon = response.data.weather.map((icon) => icon.icon).toString();
        setWeatherIcon(icon);

        setWeatherData(response);

        // setSearchTerm(response.nam);
        // setCapital(country.capital.toString())
        // setCountryCode(country.cca2.toLowerCase())
      });
  }, []);
  // console.log(weatherData);
  // console.log(weatherData.data.weather.icon)

  const filteredCountries = countries.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (
      item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      console.log(item);
      // setCapital(item.capital.toString());
      return item;
    }
  });
  // console.log(filteredCountries)

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
              {/* {console.log(country.cca2.toLowerCase())} */}
              {/* {console.log(country.capital.toString())} */}

              <h2>Weather in {country.capital}</h2>
              <div>
                temperature {(weatherData.data.main.temp - 273).toFixed(2)}{' '}
                Celsius
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt='icon'
              />
              <div>wind {weatherData.data.wind.speed} m/s</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
