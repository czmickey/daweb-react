import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container">
      <header>
        <h1>Facebook</h1>
      </header>
      <main>
        <p>
          <strong>Blábot:</strong> Třít dá mlynář sázavu u spálilo, bys eh máme
          probíraje dře vybavil. Znamenitosti, bojí kouk tvé projít, pec ví
          karies doma co pánaboha zemřeli. Lži grófinka řeči ji porotě ji ferry
          nádraží nemůžu. Nebo od děsným tím?
        </p>
        <div>Lajky: {likes}</div>
        <button onClick={handleClick}>Lajknout</button>
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
