const productSpinner = document.getElementById('products-spinner')

const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    productSpinner.style.display = 'none'
    data.forEach(product => createProductDiv(product))  
}