import presentDrinks from "./src/presentDrinks_05.js";

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ke`

window.addEventListener('DOMContentLoaded', ()=> {
  presentDrinks(URL);
});