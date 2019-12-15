const row = document.querySelector(".row");
const beerLoad = document.querySelector("#beerLoading");

let allBeer = "";

const fecthBeers = async () => {
  // console.log(text)
  const url = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`;
  // console.log(url);
  const beerData = await fetch(url);
  const beer = await beerData.json();
  console.log(beer);

  //   let drinkData = "";
  //   beer.drinks.forEach( data => {
  //     drinkData +=`<div class="mx-auto">
  //             <img src=${data.strDrinkThumb} alt="#" >
  //             <p class= "text-white">${data.strDrink}</p>
  //         </div>`
  //   } )
  //  row.innerHTML = drinkData;
  // let allBeer = "";
  for (let z = 0; z < 3; z++) {
    for (let i = 0; i < beer.length; i++) {
      let picture = `<div id="append" class="img" >
    <h4>${beer[i].name}</h4>
    <h4></h4>
    <img src=${beer[i].image_url} alt="" id=${beer[i].id} onclick="generic(id) ">
  </div> `;
      allBeer += picture;
    }
  }

  row.innerHTML = allBeer;
  // console.log(allBeer);
};

// const type = prompt("Enter the drink you want?");
// var myId;

fecthBeers();
function generic(val) {
  console.log(val);
  
  // localStorage.setItem('ID',beer.val);
  document.location.href = "./lastpage.html";
  // const id = document.querySelector("#val");
  // id.addEventListener("click", () => {

  // })
  // row.innerHTML = `<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  // <div class="modal-dialog modal-xl" role="document">
  //   <div class="modal-content">
  //     ...
  //   </div>
  // </div>`;
}

// setTimeout(function() {
//   document.location.href = "waterfall/firstpage.html";
// }, 3000);

// console.log(beer);
// beerLoad.addEventListener("click", () => {
//   document.location.href =
//     "waterfall/firstpage.html";
// });

//   const fecthBeers = async () => {
//     const url = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`;
//     // console.log(url);
//     const beerData = await fetch(url);
//     const beer = await beerData.json();

//     console.log(beer);
//   };

//   function generic(val) {
//     console.log(val);
//   }
//   fecthBeers();
