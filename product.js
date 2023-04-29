const QUERYSTRING = document.location.search;

const PARAMS = new URLSearchParams(QUERYSTRING)

const ID = PARAMS.get("id");

const URLID = BASEURL + SINGLEPRODUCT + ID;


fetch(URLID)
.then(response => response.json())
.then(data => {
    const PRODUCTCONTAINER = document.querySelector(".jacket-container")
    PRODUCTCONTAINER.innerHTML = `<div class="jacket-container">
                                 <img src="${data.image}" alt="jacket 1">
                                 </div>
                                 <div class="product-title">
                                 <h1>${data.title}</h1>
                                </div>
                                <div class="add-price-wrapper">
                                <h2>€149</h2>
                                <div class="cart-product">
                                <a href="../Checkout.html">Add to cart</a>
                                </div>
                                </div>
                                <div class="desc-wrapper">
                                <p>Description:</p>
                                </div>
                                <div class="p-wrapper">
                                <p>${data.description}</p>
                                </div>`
})