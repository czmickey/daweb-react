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
