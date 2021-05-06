import React from 'react';

const Bulb = ({ on }) => {
  const bulbClass = on ? 'bulb bulb--on' : 'bulb';
  return <div className={bulbClass}></div>;
};

export default Bulb;
