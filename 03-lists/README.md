# Poznámky k lekci

- Vypisování seznamu

  - Využití funkce `map`
  - Zkracování zápisu

  ```
  (name) => {
    return `${name}@mejlik.cz`;
  };

  (name) => `${name}@mejlik.cz`;
  ```

  - Pokud by to bylo delší, použijeme kulaté závorky
  - Zkrácený return - můžeme použít, pokud komponenta obsahuje pouze JSX
  - Příklad zkráceného zápisu map + vrácení komponenty

- Seznamy v JSX
  - Pole s výpisem položek v JSX
  - "Children" se vypisuje stejně jako klasický řetězec
  - Varování: `Each child in a list should have a unique "key" prop`
    - Každý element by měl mít unikátní klíč vzhledem k "sourozencům" (na jiném místě se může použít stejný)
    - React podle identifikátorů zjišťuje, co se přesně změnilo
    - Můžeme využít `index` za `map` (pokud nebudeme upravovat obsah)
    - Další čtení: [Dokumentace](https://reactjs.org/docs/lists-and-keys.html)
  - Se seznamy JSX komponent pracujeme stejně - využijeme `map` funkci
  - Použití `map` přímo ve výrazu a zkrácení tak zápisu
  - Složitější komponenty
    - Při zesložitění kódu je vhodné vytvořit další komponenty
