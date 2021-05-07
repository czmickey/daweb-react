import React from 'react';

const City = ({ name, population, area, district, photo }) => (
  <div className="city" style={{ margin: '10px' }}>
    <strong>{name}</strong>
    <img src={photo} style={{ display: 'block' }} />
    Okres: {district}
    <br />
    Počet obyvatel: {population}
    <br />
    Rozloha: {area}
  </div>
);

export default City;
