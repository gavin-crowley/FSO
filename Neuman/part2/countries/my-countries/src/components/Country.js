import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {

    function numberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div>
            <h1>{country.name.common}</h1>
            <div><strong>Capital:</strong>{country.capital}</div>
            <div><strong>Population:</strong>{numberWithCommas(country.population)}</div>
            <div><strong>Languages:</strong></div>
            <ul>
            {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}</ul>
            {/* <ul>
                {country.languages.map(language => <li key={language.iso639_2}>{language.name}</li>)}
            </ul> */}
            <img src={country.flags.png} alt={'Flag of ' + country.name.common} width="200px"></img>
            <Weather
                capital={country.capital}
                countryCode={country.cca2}
            />
        </div>
    );
}



export default Country;