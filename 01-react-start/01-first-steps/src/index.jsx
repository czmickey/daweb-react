import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const name = 'Michal Oktábec';
const cssIntro = 'intro';

const App = () => {
  return (
    <>
      <header>
        <h1>{name}</h1>
      </header>
      <main>
        <p className={cssIntro}>Moje první React stránka</p>
      </main>
      <footer>Martin Podloucký</footer>
    </>
  );
};

render(<App />, document.querySelector('#app'));
