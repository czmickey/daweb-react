import React from 'react';
import { render } from 'react-dom';
import City from './components/City';
import './index.html';
import { cities } from './cz-cities';

const App = () => (
  <>
    <header>
      <h1>Česká města</h1>
    </header>
    {cities.map((city, index) => (
      <City {...city} key={index} />
    ))}
    {/* 
        bez Rest operátoru:  
        
        <City
          name={city.name}
          photo={city.photo}
          population={city.population}
          area={city.area}
          district={city.district}
          key={index}
        />
    */}
  </>
);

render(<App />, document.querySelector('#app'));
