const BASEURL = "https://api.noroff.dev/api/v1/";
const ALLPRODUCTS = "rainy-days";
const SINGLEPRODUCT = "rainy-days/" //id for each product needs to be included

const spinner = document.querySelector('.spinner');
spinner.classList.add('spinner-visible');

fetch(BASEURL + ALLPRODUCTS)
.then(response => response.json())
.then(data => {
    spinner.classList.remove('spinner-visible');
    const CONTAINER = document.querySelector(".grid-container");
    CONTAINER.innerHTML =  `
                            <a href="Jackets.html">
                            <div class="jacket-box">
                            <div class="cardContent">
                            <div>
                            <img src="${data[1].image}" alt="Rainy Days M83 Jacket" class="jackethome-img">
                            </div>
                            <h3>${data[1].title}</h3>
                            <div class="cardP">
                            <p>${data[1].description}</p>
                            </div>
                            </div>
                            </div>
                            </a>
                            <a href="Jackets.html">
                            <div class="jacket-box">
                            <div class="cardContent">
                            <img src="${data[2].image}" alt="Soft-Shell Hi V Jacket" class="jackethome-img">
                            <h3>${data[2].title}</h3>
                            <div class="cardP">
                            <p>${data[2].description}</p>
                            </div>
                            </div>
                            </div>
                            </a>
                            <a href="Jackets.html">
                            <div class="jacket-box">
                            <div class="cardContent">
                            <img src="${data[0].image}" alt="First Watch AC 1100 Flotation Coat" class="jackethome-img">
                            <h3>${data[0].title}</h3>
                            <div class="cardP">
                            <p>${data[0].description}</p>
                            </div>
                            </div>
                            </div>
                            </a>`
})
.catch(error => { console.log('An error occurred:', error);
spinner.classList.remove('spinner-visible');
});
