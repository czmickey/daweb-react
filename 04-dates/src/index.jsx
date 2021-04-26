import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.html';
import './style.css';

render(
  <App />,
  document.querySelector('#app'),
);
