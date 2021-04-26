import React from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.html';
import Main from './Main';

const App = () => {
  return (
    <>
      <Header title="Titulek stránka" />
      <Main content="Text z komponenty Main" />
      <Footer author="Já" />
    </>
  );
};

render(
  <App />,
  document.querySelector('#app'),
);
