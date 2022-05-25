import presentDrinks from "./src/presentDrinks_05.js";

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=htc`

window.addEventListener('DOMContentLoaded', ()=> {
  presentDrinks(URL);
});