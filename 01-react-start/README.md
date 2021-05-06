# Poznámky k lekci

## Odkazy

- [Kódím - Úvod do Reactu](https://kodim.cz/czechitas/daweb/react/uvod-do-reactu)
- [Úvodní balíček (react starter pack)](https://github.com/Czechitas-podklady-WEB/project-starter/archive/react-starter.zip)
- React Developer Tools
  - [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Tutoriály

- ReactJS.org
  - [Getting Started](https://reactjs.org/docs/getting-started.html) _(rozcestník)_
  - [Hello World](https://reactjs.org/docs/hello-world.html)
  - [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
  - [Courses](https://reactjs.org/community/courses.html)
  - [Wes Bos - React For Beginners](https://reactforbeginners.com/)
- [React Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)

---

## Vanilla JS

- Jak můžeme vytvářet stránku?

### innerHTML

\- zvýrazňování syntaxe

```
const obsah = '<h1 class="title">Moje stránka</h1>';

const appElm = document.querySelector('#app');
appElm.innerHTML = obsah;
```

### Vytváření elementů

\- velmi dlouhý kód

```
const obsah = document.createElement('h1');
obsah.className = 'title';
obsah.textContent = 'Moje stránka';

const appElm = document.querySelector('#app');
appElm.appendChild = obsah;
```

## React

- JS knihovna od Facebooku (2011, představen 2013)
- Open Source (otevřený zdrojový kód): https://github.com/facebook/react
- [reactjs.org](https://reactjs.org)

### Proč?

- Přehledné strukturování do komponent (bez opakování kódu)
- Komunikace mezi komponentami
- Výkon aplikace
- Usnadněné napojení události
- Úprava jen části stránky, která se změní

## Jak to psát

### Funkce z Reactu

```
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!');
```

Příklad - [HTML struktura](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwEwlgbgBAxgNgQwM5IHIILYFMC8AiJACwHsAHUsAOwHMBaOMJAFzwD4AoKKYQgRlYDKJclWpQAMoyZQAZsQBOUAN6l5ZJADpKmLAF9gAej4cuwAK5wTXbg1YBJSswTV5mQ7c7XgtgOqEETEgAguTuYFamtgDyMBZmSGFWhhYchuAQrADc7EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.14.0&externalPlugins=)

### JSX (JavaScript XML)

```
const heading = <h1 className="site-heading">Hello, React</h1>;
```

- vypadá jako HTML, ale má odlišnosti
- blíže JS než HTML
  - atributy pomocí camelCase konvence
  - rozdíly:
    - `class` => `className`
    - `data-*` a `aria-*` s pomlčkou
    - Další informace: [React - DOM Elements](https://reactjs.org/docs/dom-elements.html)
- hodnoty parametrů klasicky do uvozovek
- nový typ hodnoty - elementy ukládáme do proměnných

## Stránka v Reactu

### Vykreslení

- funkce pro React z `react`
- vykreslení zajišťuje funkce `render` z `react-dom`, parametry:
  - struktura k vykreslení
  - DOM element, kam to chceme vykreslit
- vkládáme pouze jeden hlavní element
- lze využít speciální ("neviditelný") element `Fragment`
- pro zpřehlednění vkládáme strukturu do proměnné
- ukázka přes React DEV Tools
  - je nutné povolit vykreslení základní elementů jako `div` apod.

### Vkládání hodnot (výrazů)

- JS přes `` `${nejakyVyraz}` ``
- JSX pouze `{vyraz}`

```
<title>{titulek}</title>
```

- hodnoty pouze pro obsah elementu, nelze např. název elementu, **následující nelze!**

```
const obsah = <{znacka} className={trida}>{nazev}</{znacka}>;
```

_Vykreslovanou komponentu změnit lze, ale jiným způsobem._

- hodnoty jsou ošetřené proti XSS ("escapované"), nelze tedy vykreslit HTML z textu
- můžete vložit i jakýkoliv JS výraz - např. sčítání

---

## 1. a 2. cvičení

- vycházejí ze "starter packu"

---

## Komponenty a props

- struktura v proměnné nám kód jen zjednodušší
- uděláme z ní funkci, které můžeme předat parametry (props) a bude vracet JSX
  - říkáme jim **komponenty**
- do return strukturu v JSX
- za return vložit závorky (kvůli [ASI](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi) - automatic semicolon insertion)
- zároveň za `return` musí být mezera (není to funkce)

```
const ShoppingItem = (props) => {
  return (
    <div className="item">
      <span className="item__name">{props.name}</span>
      <span className="item__amount">{props.amount}</span>
    </div>
  );
};
```

- pro vykreslení komponenty využijeme zápis jako HTML element:

```
<Componenta />
```

- setkáte se také se zápisem komponent jako třídy (`React.Component`)
  - funkcionální zápis je kratší
  - je možné využít [hooky](https://reactjs.org/docs/hooks-intro.html) (pozdější lekce)

## Doporučené postupy

### Hlavní komponenta

- hlavní sktrukturu do `App` a v render použijeme pouze `<App />`

### Rozdělení do složek

- komponenty vložíme do samostatných souborů (používá se zanoření do `components`)
- komponenty musíme exportovat (_default_ nebo _named_ export)
- následně komponenty importujeme (způsob podle použitého exportu)
- pojmenování - první písmeno velké: `Hlavicka.jsx` jinak si React při vykreslení bude myslet, že jde o DOM element

---

## 3. a 4. cvičení

---

## Dodatečné poznámky

- komentáře
  - využívají složené závorky jako výrazy: `{ /* komentar */ }`
  - nelze vložit komentář mimo hlavní element
- hodnoty pro parametry se neobalují do uvozovek: `className={vyraz}`

```
// JS
<button onclick="activateLasers()">...

// React
<button onClick={activateLasers}>...
```

- [Create React App](https://create-react-app.dev/)
  - obsahuje buildění, ale třeba i testy
  - odstínění od webpacku
