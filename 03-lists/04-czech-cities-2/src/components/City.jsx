import React from 'react';

const City = (props) => (
  <div className="city">
    {props.name} (počet obyvatel: {props.population}, rozloha: {props.area})
  </div>
);

export default City;
