import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input type="text" onChange={handleChange} value={userName} />
      </label>
      <label>
        Země původu:
        <select onChange={handleChangeCountry} value={country}>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>
      <button type="submit" disabled={userName === ''}>
        Registrovat
      </button>
      <div>
        {userName === ''
          ? 'Uživatelské jméno je povinný údaj'
          : `Registrován nový uživatel ${userName} ze země ${country}`}
      </div>
    </form>
  );
};

render(<App />, document.querySelector('#app'));
