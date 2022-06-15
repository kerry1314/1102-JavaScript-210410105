import get from './getElement.js';
import presentDrinks from './presentDrinks_05.js';

import { LOCAL_URL, hasNetwork, searchItems } from '../api/search/config_05.js';

const form = get('.search-form');

const input = get('[name="drink"]');

// console.log('form',form);
// console.log('input',input);

console.log('config_05.js', { LOCAL_URL, hasNetwork,searchItems });


const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup',(e)=>{
    e.preventDefault();
    console.log('input',input.value);
    const value = input.value;
    if(!value) return;
    if(hasNetwork){
        presentDrinks(`${baseURL}${value}`); 
    }else{
        if( searchItems.find((item) => item === value)){
            presentDrinks(`${LOCAL_URL}${value}.json`); 
        }
    }
});