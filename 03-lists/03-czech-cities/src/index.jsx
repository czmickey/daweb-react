import React from 'react';
import { render } from 'react-dom';
import './index.html';

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

const App = () => (
  <>
    <header>
      <h1>Česká města</h1>
    </header>
    {cities.map((city, index) => (
      <div className="city" key={index}>
        {city}
      </div>
    ))}
  </>
);

render(<App />, document.querySelector('#app'));
