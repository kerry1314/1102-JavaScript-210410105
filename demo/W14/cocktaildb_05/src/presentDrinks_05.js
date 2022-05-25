import fetchDrinks from "./fetchDrinks_05.js";

const presentDrinks = async (url) => {
    // fetch drinks
      const data = await fetchDrinks(url);
      console.log('drinks data', data)
};

export default presentDrinks;