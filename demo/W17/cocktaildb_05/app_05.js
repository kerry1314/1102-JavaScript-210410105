import presentDrinks from "./src/presentDrinks_05.js";

import './src/searchForm_05.js';

import { LOCAL_URL, hasNetwork,searchItems } from './api/search/config_05.js'

// console.log('config_05.js', { LOCAL_URL, hasNetwork,searchItems });

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ke`

window.addEventListener('DOMContentLoaded', ()=> {
  if (hasNetwork){
    presentDrinks(URL);
  }else{
    presentDrinks(LOCAL_URL+'ke.json');
  }
});