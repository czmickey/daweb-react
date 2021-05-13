import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState('cet');

  useEffect(() => {
    fetch(`http://worldclockapi.com/api/json/${timezone}/now`)
      .then((response) => response.json())
      .then((data) => setDatetime(data.currentDateTime));
  }, [timezone]);

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <h1>{datetime}</h1>
      </header>
      <label>
        Vyber časovou zónu: <br />
        <select onChange={handleTimezoneChange} value={timezone}>
          <option value="est">Eastern Standard Time</option>
          <option value="utc">Coordinated Universal Time</option>
          <option value="cet">Central European Standard Time</option>
        </select>
      </label>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
