# Poznámky

- Nejdříve si musíme rozbalit archiv se zadáním
- Z archivu nás zajímá pouze soubor `style.css` a adresář `img` - obojí si nakopírujte do adresáře `src`
  - Obrázky by se nevkládaly do takovéto adresářové struktury, většinou by se vytvořil ještě adresář assets (tj. "zdroje") a až do něj by se nakopíroval adresář `img`
  - Pak byste ale museli upravovat použitý soubor `style.css`, takže můžeme ponechat cestu `src/img`
- Když vykreslíte více žárovek, tak ta horní na stránce není vidět - jedno z řešení je zakomentovat ve `style.css` část `align-items: center;` pro `body`
  - Není ale potřeba se stylování příliš věnovat, aktuálně nás zajímá hlavně React
