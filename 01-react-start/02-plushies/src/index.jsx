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

const App = (
  <>
    <h1>Plyšáci</h1>
    <div className="plushies">
      <div className="plushy">
        <img className="plushy__image" src={plushy1.image} />
        <h2 className="plushy__name">{plushy1.name}</h2>
        <p className="plushy__text">{plushy1.text}</p>
      </div>
      <div className="plushy">
        <img className="plushy__image" src={plushy2.image} />
        <h2 className="plushy__name">{plushy2.name}</h2>
        <p className="plushy__text">{plushy2.text}</p>
      </div>
    </div>
  </>
);

render(App, document.querySelector('#app'));
