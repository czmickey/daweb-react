import React from 'react';

const City = (props) => (
  <div className="city" style={{ margin: '10px' }}>
    <strong>{props.name}</strong>
    <img src={props.photo} style={{ display: 'block' }} />
    Okres: {props.district}
    <br />
    Počet obyvatel: {props.population}
    <br />
    Rozloha: {props.area}
  </div>
);

export default City;
