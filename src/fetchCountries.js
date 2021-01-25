import {useState} from 'react';
const cities_list = require('../assets/cities_list.json');

const fetchCountries = (query) => {
  const t = cities_list.filter(
    (city) => city.name.toUpperCase().indexOf(query.toUpperCase()) !== -1,
  );
  cities = t.slice(0, 5);
};

export default fetchCountries;

// (city) => city.name.toUpperCase() == query.toUpperCase(),
