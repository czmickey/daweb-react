import React from 'react';
import { render } from 'react-dom';
import Bulb from './components/Bulb';
import './index.html';
import './style.css';

const App = () => (
  <>
    <Bulb on={false} />
    <Bulb on />
    <Bulb on={false} />
    <Bulb on />
  </>
);

render(<App />, document.querySelector('#app'));
