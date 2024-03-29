spinner.classList.add('spinner-visible');

fetch(BASEURL + ALLPRODUCTS)
  .then(response => response.json())
  .then(data => {

    data.forEach(function(jacket) {
        const JACKETCONTAINER = document.querySelector(".container");
        JACKETCONTAINER.innerHTML +=`<div>
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
                                    </select>
                                    </div>
                                    <div class="jacket1-p">
                                    <p>${jacket.price}</p>
                                    </div>
                                    </div>
                                    </section>`;
    });
  })
  .catch(error => { console.log('An error occurred:', error);
    spinner.classList.remove('spinner-visible');
  });





