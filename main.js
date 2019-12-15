const row = document.querySelector(".row")

const fecthBeers = async text => {
    // console.log(text)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  console.log(url);
  const beerData = await fetch(url);
  const beer = await beerData.json();
  console.log(beer);

  let drinkData = "";
  beer.drinks.forEach( data => {
    drinkData +=`<div class="mx-auto">
            <img src=${data.strDrinkThumb} alt="#" >
            <p class= "text-white">${data.strDrink}</p>
        </div>`
  } )
 row.innerHTML = drinkData;
};

const type = prompt("Enter the drink you want?");

fecthBeers(type);