import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const plushy1 = {
  name: 'Bluephant',
  image:
    'https://kodim.cz/czechitas/daweb/react/uvod-do-reactu/excs/plysaci/assets/elephant.jpg',
  text:
    'Modroslon rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
};

const plushy2 = {
  name: 'Jerry',
  image:
    'https://kodim.cz/czechitas/daweb/react/uvod-do-reactu/excs/plysaci/assets/mouse.jpg',
  text:
    'Jerry tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
};

const plushy = (props) => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={props.image} />
      <h2 className="plushy__name">{props.name}</h2>
      <p className="plushy__text">{props.text}</p>
    </div>
  );
};

const App = () => (
  <>
    <h1>Plyšáci</h1>
    <div className="plushies">
      {plushy(plushy1)}
      {plushy(plushy2)}
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
