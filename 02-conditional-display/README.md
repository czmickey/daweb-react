# Poznámky k lekci

- Komentáře
  - využívají složené závorky jako výrazy: `{ /* komentar */ }`
  - nelze vložit komentář mimo hlavní element
- Hodnoty z proměnných pro parametry se neobalují do uvozovek: `className={vyraz}`

```
// JS
<button onclick="activateLasers()">...

// React
<button onClick={activateLasers}>...
```

- Destrukturing

  - Získání hodnoty z objektu

  ```
  const person = { name: 'Pavlína', city: 'České Budějovice' };
  const { name } = person;
  ```

  - Props

  ```
  const person = { name: 'Pavlína', city: 'České Budějovice' };
  const PersonDetail = ({ name, city }) => {
    return (
      <div>
        <p>Jméno: {name}</p>
        <p>Město: {city}</p>
      </div>
    )
  }
  ```

- Rest - objekt do props

```
const user = { id: 1, name: 'Pavlína' };

const ShoppingCart = () => {
  return (
    <div>
      <UserDetail {...user} />
      <Cart />
    </div>
  );
};

const UserHeader = ({id, name, orders}) => {
  return (
    <div>
      <p>Přihlášen/a jako: {name} (ID: {id})</p>
    </div>
  );
};
```

- Vytváření projektu - pomocí "create" balíčků
  - [Create React App](https://create-react-app.dev/)
    - obsahuje buildění, ale třeba i testy
    - odstínění od webpacku

---

- Ternární operátor
- Předávání hodnot pomocí props
  - Logické hodnoty také bez uvozovek
  - Samotné `true` lze zkrátit
- Stylování JSX elementů
  - Atribut `style`
  - CSS je nutné zapisovat v camelCase notaci
  - Do `style` vkládáme objekt (dvakrát závorky nebo proměnná)
  - Všechny hodnoty jsou řetězce
  - Jako hodnotu můžeme použít výraz (například rozhodnutí o barvě)
- Podmíněné zobrazení
  - Složené závorky, ternár a potřebný výraz
  - Pokud nechceme nic, vracíme `null`
