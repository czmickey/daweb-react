# Poznámky k lekci

- Formulářové prvky

  - odlišný způsob k ovládání políček - bez přístupu k DOM
  - využíváme událost `onX` - např. `onChange` a hodnotu vytáhneme z eventu
  - hodnotu políčka ukládáme do stavu => data binding
    - jednosměrný - změna políčka => stav
    - obousměrný - kromě změny stavu řešíme ještě hodnotu políčka v elementu (`value`) a nastavujeme ji z proměnné
  - jiné pojmenování: Kontrolované komponenty (Controlled components):
    - [Dokumentace](https://reactjs.org/docs/forms.html#controlled-components)

- Cvičení

- Efekty

  - Použití v případě potřeby reagovat na vykreslování komponenty
  - Například při prvním vykreslení komponenty
    - První vykreslení - `useEffect` a jako druhý parametr prázdné pole
    - například pro volání API
  - Příklad - načítání aktuálního svátku

- Cvičení
  - ve 4. a 5. cvičení je problém s URL (více u konkrétního cvičení)
