import React from 'react';

const Today = (props) => (
  <>
    {/* prettier-ignore */}
    <div className="date">
      <span className="day">{props.day}</span>.
      <span className="month">{props.month}</span>.
      <span className="year">{props.year}</span>
    </div>
  </>
);

export default Today;
