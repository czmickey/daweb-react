// 1.
/*
const isEmail = (str) => {
  return str.includes('@');
};
*/
const isEmail = (str) => str.includes('@');

// 2.
/*
const roll = () => {
  return Math.floor(Math.random(6)) + 1;
};
*/

const roll = () => Math.floor(Math.random() * 6) + 1;

// 3.
/*
const getNumber = (id) => {
  return Number(document.querySelector(`#${id}`).value);
};
*/

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

// 4.
/*
const Searchbox = (props) => {
  return `
    <div className="searchbox">
      <label>
        ${props.label}
        <input type="text" />
      </label>
    </div>
  `;
};
*/

const Searchbox = (props) =>
  `
    <div className="searchbox">
      <label>
        ${props.label}
        <input type="text" />
      </label>
    </div>
  `;

// 5.
/*
const weather = (temperature) => {
  if (temperature > 16) {
    return 'teplo';
  }

  return 'zima';
};
*/

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');
