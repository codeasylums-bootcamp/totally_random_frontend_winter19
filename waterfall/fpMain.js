const row = document.querySelector(".row");
const beerLoad = document.querySelector("#beerLoading");
const information = document.querySelector(".information");

// const id1 = document.querySelector("")
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
  
          <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

  <div class="mini-card-grid">
      <article
        class="mini-card module module-article article"
        id="${beer[0].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[0].name}
            </div>
            <h2 class="">
              ${beer[0].description}
            </h2>
          </div>
 
 
 <br>         <div class="mini-article-meta">
          ${beer[0].tagline}
        </div>         <br>
         
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[1].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[1].name}
            </div>
            <h2 class="">
              ${beer[1].description}
            </h2>
          </div>
 
 
 <br>         <div class="mini-article-meta">
          ${beer[1].tagline}
        </header>         <br>
         
        </article>

      <article
        class="mini-card module module-article article"
        id="${beer[2].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[2].name}
            </div>
            <h2 class="">
              ${beer[2].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[2].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[4].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[4].name}
            </div>
            <h2 class="">
              ${beer[4].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[4].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[5].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[5].name}
            </div>
            <h2 class="">
              ${beer[5].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[5].tagline}
        </div>
        </header>
       
      </article>



      <article
        class="mini-card module module-article article"
        id="${beer[7].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[7].name}
            </div>
            <h2 class="">
              ${beer[7].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[7].tagline}
        </div>
        </header>
       
      </article>






      <article
        class="mini-card module module-article article"
        id="${beer[9].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[9].name}
            </div>
            <h2 class="">
              ${beer[9].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[9].tagline}
        </div>
        </header>
       
      </article>


            <article
        class="mini-card module module-article article"
        id="${beer[10].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[10].name}
            </div>
            <h2 class="">
              ${beer[10].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[10].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[11].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[11].name}
            </div>
            <h2 class="">
              ${beer[11].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[11].tagline}
        </div>
        </header>
       
      </article>


      <article
        class="mini-card module module-article article"
        id="${beer[14].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[14].name}
            </div>
            <h2 class="">
              ${beer[14].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[14].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[15].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[15].name}
            </div>
            <h2 class="">
              ${beer[15].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[15].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[16].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[16].name}
            </div>
            <h2 class="">
              ${beer[16].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[16].tagline}
        </div>
        </header>
       
      </article>

      <article
        class="mini-card module module-article article"
        id="${beer[17].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[17].name}
            </div>
            <h2 class="">
              ${beer[17].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[17].tagline}
        </div>
        </header>
       
      </article>

       <article
        class="mini-card module module-article article"
        id="${beer[20].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[20].name}
            </div>
            <h2 class="">
              ${beer[20].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[20].tagline}
        </div>
        </header>
       
      </article>

       <article
        class="mini-card module module-article article"
        id="${beer[21].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[21].name}
            </div>
            <h2 class="">
              ${beer[21].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[21].tagline}
        </div>
        </header>
       
      </article>

       <article
        class="mini-card module module-article article"
        id="${beer[22].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[22].name}
            </div>
            <h2 class="">
              ${beer[22].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[22].tagline}
        </div>
        </header>
       
      </article>

       <article
        class="mini-card module module-article article"
        id="${beer[23].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[23].name}
            </div>
            <h2 class="">
              ${beer[23].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[23].tagline}
        </div>
        </header>
       
      </article>


       <article
        class="mini-card module module-article article"
        id="${beer[24].id}"
      >
        <header class="mini-article-card-header">
          <div class="mini-article-card-title">
            <div class="mini-article-subhead">
              ${beer[24].name}
            </div>
            <h2 class="">
              ${beer[24].description}
            </h2>
          </div>
          <br>
           <div class="mini-article-meta">
          ${beer[24].tagline}
        </div>
        </header>
       
      </article>
   
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
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
      const id1 = document.querySelector("#val")
      console.log(id1);
      
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
