const row = document.querySelector(".row");
const beerLoad = document.querySelector("#beerLoading");
const information = document.querySelector(".information");
let beer;

let allBeer = "";
let allInfo = "";

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
    <img src=${beer[i].image_url} alt="" id=${beer[i].id} onmouseover="generic(id) ">
  </div> `;
      allBeer += picture;
    }
  }

  row.innerHTML = allBeer;

  for (let i = 0; i < beer.length; i++) {
    let picture = `<div id="append" class="img" >
    <h4>${beer[i].name}</h4>
    <h4></h4>
    <img src=${beer[i].image_url} alt="" id=${beer[i].id} onmouseover="generic(id) ">
  </div> `;
    allInfo += picture;
  }
  
  information.innerHTML = `
  
          
        <div class="card text-white" style="max-width: 500px; max-height:200px; margin-left:72%; box-shadow:5px 5px 5px black; background-image: linear-gradient(45deg,brown,red,yellow); position:absolute" >
          <div class="row no-gutters" >
            <div class="col-md-12 ">
              <div class="card-body ">
                <h5 class="card-title ">${beer[20].name}</h5>
                <h6 class="card-text">
                  ${beer[20].description}
                </h6>
                <p class="card-text">
                  <small >${beer[20].tagline}</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card text-white" style="margin-left:1250px ;max-width: 500px; max-height:200px; box-shadow:5px 5px 5px black; background-image: linear-gradient(45deg,brown,red,yellow); z-index:-1; " >
          <div class="row no-gutters" >
            <div class="col-md-12 ">
              <div class="card-body ">
                <h5 class="card-title ">${beer[21].name}</h5>
                <h6 class="card-text">
                  ${beer[21].description}
                </h6>
                <p class="card-text">
                  <small >${beer[21].tagline}</small>
                </p>
              </div>
            </div>
          </div>
        </div>

      
  
  

`;
  // console.log(allBeer);
};

// const type = prompt("Enter the drink you want?");
// var myId;

fecthBeers();
async function generic(val) {
  console.log(val);

  const url = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`;
  // console.log(url);
  const beerData = await fetch(url);
  const beer = await beerData.json();

  console.log(beer);
  for (let i = 0; i < 25; i++) {
    if (beer[i].id == val) {
      // information.innerHTML = `${beer[i].name}`;
    }
  }

  // localStorage.setItem('ID',beer.val);
  // document.location.href = "./lastpage.html";
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
