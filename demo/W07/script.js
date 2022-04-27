const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateBtn = document.querySelector('#calculate-wealth');

let data = [];

const config = {
    numRandom: 5,
    ratio: 1.5,
    showCondition: 2000000
};


// const getUsers = ()=> {
//     for(let i= 0; i< config.numRandom; i++ ){
//         getRandonUser();
//     }
// }

// getUsers();


// const changeBtnText = ()=> {
//     addUserBtn.innerHTML=`Add User ${config.numRandom} User`
//     doubleBtn.innerHTML=`Raise Money ${config.ratio} Money 💰`
// showMillionairesBtn.innerHTML=`Show> ${config.showCondition}`
// }

// changeBtnText();

addUserBtn.innerHTML=`Add ${config.numRandom} User`
showMillionairesBtn.innerHTML=`Show> ${config.showCondition}`
doubleBtn.innerHTML=`Raise ${config.ratio} Money 💰`



const updateDOM = (providedData = data)=> {
  let tempData =  providedData.map((item)=> {
      return `<div class="person"><strong>${item.name}</strong> ${formatMoney(item.money)}</div>`
  });
  tempData = tempData.join('');
  console.log('tempData', tempData);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
}


const addData = (obj) => {
    data.push(obj);
    console.log('data', data);
    updateDOM();
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

const getRandomUser = async () => {
   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();
   console.log('random user data ', data);
   const user = data.results[0];
   const newUser = {
       name: `${user.name.last}`,
       money: Math.floor(Math.random()*10000000)
   }
   addData(newUser);
}

for(let i=1;i<=config.numRandom;i++){
    getRandomUser();
}

const doubleMoney = () => {
  data =  data.map( (user) => {
      return {
          name: user.name,
          money: user.money * config.ratio
      }
  });
  updateDOM();
}

const showMillionaires = () => {
    const filteredData = data.filter((user)=>{
        return user.money> config.showCondition
    });
    console.log('filteredData', filteredData);
    updateDOM(filteredData);
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);


