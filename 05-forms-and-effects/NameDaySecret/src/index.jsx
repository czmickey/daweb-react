import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './index.html';

const App = () => {
  const [nameday, setNameday] = useState('..načítám');
  const [namedaySecret, setNamedaySecret] = useState('..načítám');
  const [secretText, setSecretText] = useState('');

  useEffect(() => {
    fetch('https://api.abalin.net/today?country=cz')
      .then((response) => response.json())
      .then((json) => setNameday(json.data.namedays.cz));

    if (secretText === 'tajny-text') {
      fetch('https://api.abalin.net/today?country=us')
        .then((response) => response.json())
        .then((json) => setNamedaySecret(json.data.namedays.us));
    }
  }, [secretText]);

  return (
    <>
      <h1>Svátky</h1>
      <div className="nameday">Svátek má {nameday}</div>
      {secretText === 'tajny-text' ? <p>...a taky {namedaySecret}</p> : null}
      <input
        type="text"
        onChange={(event) => setSecretText(event.target.value)}
      />
    </>
  );
};

render(<App />, document.querySelector('#app'));
