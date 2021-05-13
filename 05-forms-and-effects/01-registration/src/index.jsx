import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input type="text" onChange={handleChange} value={userName} />
      </label>
      <button type="submit" disabled={userName === ''}>
        Registrovat
      </button>
      <div>
        {userName === ''
          ? 'Uživatelské jméno je povinný údaj'
          : `Registrován nový uživatel ${userName}`}
      </div>
    </form>
  );
};

render(<App />, document.querySelector('#app'));
