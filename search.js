const searchInputs = document.querySelector(".search");
const searchMobile = document.querySelector(".search1");
const jacketContainer = document.querySelector('.container');
const spinner = document.querySelector('.spinner');
const BASEURL = "https://api.noroff.dev/api/v1/";
const ALLPRODUCTS = "rainy-days";
const SINGLEPRODUCT = "rainy-days/" //id for each product needs to be included

let allJackets = [];


function filterJackets() {
  const searchTerm = searchInputs.value.toLowerCase();
  const searchTermMobile = searchMobile.value.toLowerCase();
  const filteredJackets = allJackets.filter(jacket => jacket.title.toLowerCase().includes(searchTerm) && jacket.title.toLowerCase().includes(searchTermMobile));  
  jacketContainer.innerHTML = '';
  filteredJackets.forEach(jacket => {
    jacketContainer.innerHTML += `
      <div>
        <div class="jacket-img">
          <a href="details.html?id=${jacket.id}"><img src="${jacket.image}" alt="jacket 1" class="img1"></a>
        </div>
        <section class="content-c">
          <div class="h2btn">
            <h2 class="jacket-text">${jacket.title}</h2>
            <div class="btns">
              <div class="cart"><a href="Checkout.html">Add to cart</a></div>
              <select name="sizes" id="sizes1" class="sizes-box">
                <option value="">Pick size</option>
                <option value="'small">${jacket.sizes[1]}</option>
                <option value="'medium">${jacket.sizes[2]}</option>
                <option value="'big">${jacket.sizes[3]}</option>
                <option value="'XL">${jacket.sizes[4]}</option>
              </select>
            </div>
            <div class="jacket1-p">
              <p>€${jacket.price}</p>
            </div>
          </div>
        </section>
      </div>`;
  });
}

function fetchJackets() {
  spinner.classList.add('spinner-visible');

  fetch(BASEURL + ALLPRODUCTS)
    .then(response => response.json())
    .then(data => {
      allJackets = data;
      filterJackets();

      spinner.classList.remove('spinner-visible');
    })
    .catch(error => {
      console.log('An error occurred:', error);
      spinner.classList.remove('spinner-visible');
    });
}
searchInputs.addEventListener('input', filterJackets);
searchMobile.addEventListener('input', filterJackets);
fetchJackets();