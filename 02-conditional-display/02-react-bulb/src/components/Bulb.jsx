import React from 'react';

const Bulb = (props) => {
  const bulbClass = props.on ? 'bulb bulb--on' : 'bulb';
  return <div className={bulbClass}></div>;
};

export default Bulb;
