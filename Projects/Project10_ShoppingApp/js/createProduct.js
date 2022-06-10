const parentProductDiv = document.getElementById("products");

const createProductDiv = (product) => {
  const colDiv = document.createElement("div");
  const productDiv = document.createElement("div");
  const productImg = document.createElement("img");
  const productBody = document.createElement("div");
  const productHeader = document.createElement("div");
  const productTitle = document.createElement("h6");
  const productPrice = document.createElement("h5");
  const productDescription = document.createElement("p");
  const productRating1 = document.createElement("span");
  const productRating2 = document.createElement("span");
  const productRating3 = document.createElement("span");
  const productRating4 = document.createElement("span");
  const productRating5 = document.createElement("span");
  const productRating6 = document.createElement("span");
  const productRatingCount = document.createElement("span");
  const cardButtonOuter = document.createElement("div");
  const addToCartButton = document.createElement("a");
  const buyButton = document.createElement("a");

  colDiv.classList = "col-md-3";
  productDiv.classList = "card product";
  productImg.classList = "card-img-top";
  productBody.classList = "card-body";
  productHeader.classList = "product-header";
  productTitle.classList = "card-title";
  productPrice.classList = "card-title product-price";
  productDescription.classList = "card-text";
  productRating1.classList = "fa fa-star checked";
  productRating2.classList = "fa fa-star checked";
  productRating3.classList = "fa fa-star checked";
  productRating4.classList = "fa fa-star checked";
  productRating5.classList = "fa fa-star checked";
  productRating6.classList = "fa fa-star-half-full";
  productRatingCount.classList = "rating-count";
  cardButtonOuter.classList = "btn-outer";
  addToCartButton.classList = "btn btn-primary add-to-cart-btn";
  buyButton.classList = "btn btn-primary buy-btn";

  colDiv.id = `product-${product.id}`;
  addToCartButton.id = `add-to-cart-${product.id}`;

  productImg.src = product.image;
  productImg.alt = "product-img";

  productTitle.innerText = `${product.title.slice(0, 15)}...`;
  productPrice.innerText = `$${product.price}`;
  productDescription.innerText = `${product.description.slice(0, 45)}...`;
  productRatingCount.innerText = `(${product.rating.count})`;
  addToCartButton.innerHTML =
    '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
  buyButton.innerText = "Buy Now";

  parentProductDiv.appendChild(colDiv);
  colDiv.appendChild(productDiv);
  productDiv.appendChild(productImg);
  productDiv.appendChild(productBody);
  productBody.appendChild(productHeader);
  productHeader.appendChild(productTitle);
  productHeader.appendChild(productPrice);
  productBody.appendChild(productDescription);
  productBody.appendChild(cardButtonOuter);
  cardButtonOuter.appendChild(addToCartButton);
  cardButtonOuter.appendChild(buyButton);

  const ratingStars = product.rating.rate;
  ratingStars >= 1 &&
    productBody.appendChild(productRating1) &&
    productBody.appendChild(productRating6);
  ratingStars >= 2 &&
    productBody.appendChild(productRating2) &&
    productBody.appendChild(productRating6);
  ratingStars >= 3 &&
    productBody.appendChild(productRating3) &&
    productBody.appendChild(productRating6);
  ratingStars >= 4 &&
    productBody.appendChild(productRating4) &&
    productBody.appendChild(productRating6);
  ratingStars >= 5 && productBody.appendChild(productRating5);

  productBody.appendChild(productRatingCount);

  addToCartButton.addEventListener("click", function () {
    addToCart(product.id);
    addToCartButton.innerHTML =
      '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
  });
};
