# Poznámky k lekci

- Události v Reactu
  - usnadněné napojení na událost - rovnou `onClick` místo `addEventListener`
  - použitelné události je možné vyčíst na [MDN - HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
  - používáme funkci např. `handleClick` s parametrem `event`
  - stejně je možné zjistit hodnotu inputu - `onChange` a pak `event.target.value`
- V Reactu neměníme DOM stránky napřímo (pomocí querySelector, textContent, className apod.)

- Cvičení

- Stav

  - vlastnosti v aplikaci, které se mohou v čase měnit (nastavení uživatele, vyplněný text, stav počítadla)
  - při změně je pak nutné obsah stránky překreslit - React to dokáže dělat automaticky
  - pro práci se stavem využijeme `useState`
    - vrací proměnnou a funkci pro nastavení
    - v parametru je výchozí hodnota
    - při změně stavu React obsah automaticky překreslí
    - překresluje se pouze část, která se změnila
  - příklad - "lajky" (počítadlo)
    - zdrojový kód: [Likes](Likes)
  - pravidla
    - můžeme použít libovolný počet `useState`
    - pořadí vykonávání `useState` stále stejné - nelze uvnitř podmínky
    - pojmenování libovolné, ale jsou zažité způsoby

- Cvičení
  - Vypracování jsou v samostatném repozitáři

---

- Objektový přístup k psaní Reactu

  - píšeme třídy a dědíme od `React.Component`

  ```
  // Funkcionálně
  const ShoppingList = () => {
    return (
      <div>
        <span>Web</span>
      </div>
    );
  };

  // Objektově
  class ShoppingList extends React.Component {
    render() {
      return (
        <div>
          <span>Web</span>
        </div>
      );
    }
  }
  ```
