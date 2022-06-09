const cartItemLength = document.getElementById('cart-item-length')
const cartItemIds = []

const addToCart= (id) => {
    cartItemIds.push(id)
    cartItemLength.innerText = cartItemIds.length

    let cartItem = globalProducts.find(product => product.id == id)
    createCartItem(cartItem)
}