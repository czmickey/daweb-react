import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './index.html';
import './style.css';

const App = () => (
  <>
    <Header user="Radovan Holátko" />
    <Header />
  </>
);

render(<App />, document.querySelector('#app'));
