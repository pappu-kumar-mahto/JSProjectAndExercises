const cartItemLength = document.getElementById('cart-item-length')
const cartItems = []

const addToCart= (id) => {
    cartItems.push(id)
    cartItemLength.innerText = cartItems.length
}