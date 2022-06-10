const cartItemBody = document.getElementById('cartItemBody')
const emptyCartImg = document.getElementById('empty-cart-img')

const createCartItem = (cartItem) => {
    emptyCartImg.style.display = 'none'
    const productDiv = document.createElement("div");
    const cartRow = document.createElement("div");
    const cartColImg = document.createElement("div")
    const cartColDetail = document.createElement("div")
    const productImg = document.createElement("img");
    const productBody = document.createElement("div");
    const productHeader = document.createElement("div");
    const productTitle = document.createElement("h6");
    const productPrice = document.createElement("h5");
    const cardButtonOuter = document.createElement("div");
    const removeFromCartBtn = document.createElement("a");
    
    productDiv.classList = "card product";
    cartRow.classList = "row"
    cartColImg.classList = "col-md-6"
    cartColDetail.classList = "col-md-6"
    productImg.classList = "card-img-top cart-item-img";
    productBody.classList = "card-body cart-body";
    productHeader.classList = "product-header";
    productTitle.classList = "card-title";
    productPrice.classList = "card-title product-price";
    cardButtonOuter.classList = "btn-outer";
    removeFromCartBtn.classList = "btn btn-primary buy-btn";
  
    productDiv.id = `cart-item-${cartItem.id}`;
  
    productImg.src = cartItem.image;
    productImg.alt = "product-img";
  
    productTitle.innerText = `${cartItem.title.slice(0, 35)}...`;
    productPrice.innerText = `$${cartItem.price}`;
    removeFromCartBtn.innerText = "Remove Item";
  
    cartItemBody.appendChild(productDiv);
    productDiv.appendChild(cartRow);
    cartRow.appendChild(cartColImg)
    cartRow.appendChild(cartColDetail)
    cartColImg.appendChild(productImg);
    cartColDetail.appendChild(productBody);
    productBody.appendChild(productHeader);
    productHeader.appendChild(productTitle);
    productHeader.appendChild(productPrice);
    productBody.appendChild(cardButtonOuter);
    cardButtonOuter.appendChild(removeFromCartBtn); 

    removeFromCartBtn.addEventListener('click', () => {
        const removedCartItem = document.getElementById(`add-to-cart-${cartItemIds.filter(cartItemId => cartItemId == cartItem.id)[0]}`)
        removedCartItem.innerHTML =
        '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
        cartItemBody.removeChild(productDiv)
        cartItemIds = cartItemIds.filter(cartItemId => cartItemId != cartItem.id)
        cartItemLength.innerText = cartItemIds.length
        if (cartItemIds.length==0) {
            emptyCartImg.style.display = 'inline-block'
        }
    })
}