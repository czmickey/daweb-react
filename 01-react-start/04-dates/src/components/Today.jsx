import React from 'react';

const Today = ({ day, month, year }) => (
  <div className="date">
    <span className="day">{day}</span>.<span className="month">{month}</span>.
    <span className="year">{year}</span>
  </div>
);

export default Today;
