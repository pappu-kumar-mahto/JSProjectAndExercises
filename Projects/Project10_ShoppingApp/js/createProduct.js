const parentDiv = document.getElementById('products')

const createProductDiv = () => {
    const colDiv = document.createElement('div')
    const productDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productBody = document.createElement('div')
    const productHeader = document.createElement('div')
    const productTitle = document.createElement('h5')
    const productPrice = document.createElement('h4')
    const productDescription = document.createElement('p')
    const productRating1 = document.createElement('span')
    const productRating2 = document.createElement('span')
    const productRating3 = document.createElement('span')
    const productRating4 = document.createElement('span')
    const productRating5 = document.createElement('span')
    const productRatingCount = document.createElement('span')
    const cardButtonOuter = document.createElement('div')
    const addToCartButton = document.createElement('a')
    const buyButton = document.createElement('a')

    colDiv.classList = 'col-md-3'
    productDiv.classList = 'card product'
    productImg.classList = 'card-img-top'
    productBody.classList = 'card-body'
    productHeader.classList = 'product-header'
    productTitle.classList = 'card-title'
    productPrice.classList = 'card-title product-price'
    productDescription.classList = 'card-text'
    productRating1.classList = 'fa fa-star checked'
    productRating2.classList = 'fa fa-star checked'
    productRating3.classList = 'fa fa-star checked'
    productRating4.classList = 'fa fa-star checked'
    productRating5.classList = 'fa fa-star'
    productRatingCount.classList = 'rating-count'
    cardButtonOuter.classList = 'btn-outer'
    addToCartButton.classList = 'btn btn-primary'
    buyButton.classList = 'btn btn-primary'

    parentDiv.appendChild(colDiv)
    colDiv.appendChild(productDiv)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productBody)
    productBody.appendChild(productHeader)
    productHeader.appendChild(productTitle)
    productHeader.appendChild(productPrice)
    productBody.appendChild(productDescription)
    productBody.appendChild(productRating1)
    productBody.appendChild(productRating2)
    productBody.appendChild(productRating3)
    productBody.appendChild(productRating4)
    productBody.appendChild(productRating5)
    productBody.appendChild(productRatingCount)
    productBody.appendChild(cardButtonOuter)
    cardButtonOuter.appendChild(addToCartButton)
    cardButtonOuter.appendChild(buyButton)
}