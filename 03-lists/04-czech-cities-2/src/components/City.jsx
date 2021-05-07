import React from 'react';

const City = ({ name, population, area }) => (
  <div className="city">
    {name} (počet obyvatel: {population}, rozloha: {area})
  </div>
);

export default City;
