
let parentDiv = document.getElementById('parentDiv')

const createNewCol = (OrderId) => {
  let newColDiv = document.createElement('div')
  let newCardDiv = document.createElement('div')
  let newCardHeaderDiv = document.createElement('div')
  let newCardBodyDiv = document.createElement('div')
  let newCardTitleH5 = document.createElement('h5')
  let newCardTextP = document.createElement('p')
  let newCardButtonA = document.createElement('a')
  let newCardFooterDiv = document.createElement('div')

  newCardHeaderDiv.innerText = "Oredr ID: " + OrderId
  newCardTitleH5.innerText = "Bill Amount: "
  newCardTextP.innerText = "Order Product: "
  newCardButtonA.innerText = "Cancel Order!"
  newCardFooterDiv.innerText = "Order Status: "

  newColDiv.classList = "col-md-4 outerBlock"
  newCardDiv.classList = "card text-center"
  newCardHeaderDiv.classList = "card-header"
  newCardBodyDiv.classList = "card-body"
  newCardTitleH5.classList = "card-title"
  newCardTextP.classList = "card-text"
  newCardButtonA.classList = "btn btn-danger"
  newCardFooterDiv.classList = "card-footer text-muted"

  parentDiv.appendChild(newColDiv)
  newColDiv.appendChild(newCardDiv)
  newCardDiv.appendChild(newCardHeaderDiv)
  newCardDiv.appendChild(newCardBodyDiv)
  newCardBodyDiv.appendChild(newCardTitleH5)
  newCardBodyDiv.appendChild(newCardTextP)
  newCardBodyDiv.appendChild(newCardButtonA)
  newCardDiv.appendChild(newCardFooterDiv)
}

const executeOrder = () => {
  let inputOrderId = document.getElementById('inputOrderId').value
  createNewCol(inputOrderId.toUpperCase())
}