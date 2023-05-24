const BASEURL = "https://api.noroff.dev/api/v1/";
const ALLPRODUCTS = "rainy-days";
const SINGLEPRODUCT = "rainy-days/" //id for each product needs to be included

const QUERYSTRING = document.location.search;

const PARAMS = new URLSearchParams(QUERYSTRING)

const ID = PARAMS.get("id");

const URLID = BASEURL + SINGLEPRODUCT + ID;
const spinner = document.querySelector('.spinner');




fetch(URLID)
  .then(response => response.json())
  .then(data => {
    const PRODUCTCONTAINER = document.querySelector(".jacket-container");
    PRODUCTCONTAINER.innerHTML = `
        <img src="${data.image}" alt="jacket 1">
      <div class="product-title">
        <h1>${data.title}</h1>
      </div>
      <div class="add-price-wrapper">
        <h2>${data.price}</h2>
        <div class="cart-product">
          <a href="../Checkout.html">Add to cart</a>
        </div>
      </div>
      <div class="p-wrapper">
        <p>${data.description}</p>
      </div>`; 
      document.title = `${data.title}`;
  })
  .catch(error => { console.log('An error occurred:', error);
    spinner.classList.remove('spinner-visible');
  });