import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [datetime, setDatetime] = useState('');
  useEffect(() => {
    // setDatetime(new Date().toLocaleString());
    // http://worldtimeapi.org/api/timezone/Europe/Prague, { mode: 'no-cors' }
    fetch('http://worldclockapi.com/api/json/cet/now')
      .then((response) => response.json())
      .then((data) => setDatetime(data.currentDateTime));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>{datetime}</h1>
      </header>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
