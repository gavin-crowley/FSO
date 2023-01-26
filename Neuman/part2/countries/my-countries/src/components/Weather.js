import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital, countryCode }) => {
  const [weather, setWeather] = useState(null);
//   console.log('capital', capital);
//   console.log('countrycode', countryCode);

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
//   const apiKey = '8e64341d2040d3b33c77344eb5c33395';

  const updateWeather = () => {
    // if there is no capital or country code property then don't get weather data
    if (!capital || !countryCode) return;

    const params = {
      q: `${capital},${countryCode}`,
      units: 'metric',
      appid: apiKey,
    };

    // .get('https://api.openweathermap.org/data/2.5/weather?q=${capital},${countryCode}&APPID=8e64341d2040d3b33c77344eb5c33395', { params })
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', { params })
      .then((response) => {
        // console.log('response', response.data);
        setWeather(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.error(error.response.data.message);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error('Error', error.message);
        }
      });
  };

  useEffect(updateWeather, [apiKey, capital, countryCode]);

  const degreeToDirection = (degree) => {
    const directions = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];

    // return index from 0 to 15 that corresponds to closest cardinal direction
    const directionsIndex = Math.round(degree / 22.5) % 16;

    return directions[directionsIndex];
  };

  // convert m/s to km/h
  const convertWindSpeed = (windSpeed) => (windSpeed * 1000) / 3600;

  if (!weather) {
    return <div>No weather data</div>;
  }

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <div>
        <strong>Temperature:</strong>
        {weather.main.temp} °C
      </div>
      <div>
        <strong>Wind:</strong>
        {Math.round(10 * convertWindSpeed(weather.wind.speed)) / 10} km/h{' '}
        {degreeToDirection(weather.wind.deg)}
      </div>
      {weather.weather.map((condition) => {
        return (
          <div key={condition.id}>
            <img
              src={`http://openweathermap.org/img/wn/${condition.icon}@2x.png`}
              alt={condition.description}
            />
            <div>{condition.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
