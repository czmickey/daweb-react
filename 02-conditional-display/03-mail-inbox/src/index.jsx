import React from 'react';
import { render } from 'react-dom';
import Inbox from './components/Inbox';
import './index.html';
import './style.css';

const App = () => (
  <>
    <Inbox account="radovan.holatko@mejlik.cz" messages={0} />
  </>
);

render(<App />, document.querySelector('#app'));
