import { Country ,State } from 'country-state-city';
import { useEffect, useState } from 'react';

// console.log(Country);

const allCountries = Country.getAllCountries();

const CountryData = allCountries.map((country, index) => {
  return {
    label: country.name,
    value: country.name, // Modify this according to your needs
    key: `country_${index}`, // Add a unique key for each country
  };
});

// console.log(countriesData);

const getstatedata = State.getAllStates().map((state, index) => {
  return {
    label: state.name,
    isoCode: state.isoCode, // Modify this according to your needs
    key: `state_${index}`, // Add a unique key for each state
  };
});

export { CountryData, getstatedata };
