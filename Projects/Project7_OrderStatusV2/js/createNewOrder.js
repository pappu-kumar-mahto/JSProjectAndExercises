let inputOrderId = document.getElementById("inputOrderId");
let parentDiv = document.getElementById("parentDiv");

const createNewCol = (OrderId) => {
  let newColDiv = document.createElement("div");
  let newCardDiv = document.createElement("div");
  let newCardHeaderDiv = document.createElement("div");
  let newCardBodyDiv = document.createElement("div");
  let newCardTitleH5 = document.createElement("h5");
  let newCardTextP = document.createElement("p");
  let newCardStatusDiv = document.createElement("div");
  let newCardButtonA = document.createElement("a");

  newCardHeaderDiv.innerText = "Oredr ID: " + OrderId;
  newCardTitleH5.innerText = "Bill Amount: ";
  newCardTextP.innerText = "Order Product: ";
  newCardStatusDiv.innerText = "Order Status: ";
  newCardButtonA.innerText = "Cancel Order!";

  newColDiv.classList = "col-md-4";
  newCardDiv.classList = "card text-center outerBlock";
  newCardHeaderDiv.classList = "card-header";
  newCardBodyDiv.classList = "card-body";
  newCardTitleH5.classList = "card-title";
  newCardTextP.classList = "card-text";
  newCardButtonA.classList = "btn btn-danger footerBtn";

  newCardStatusDiv.id = inputOrderId.value;

  parentDiv.appendChild(newColDiv);
  newColDiv.appendChild(newCardDiv);
  newCardDiv.appendChild(newCardHeaderDiv);
  newCardDiv.appendChild(newCardBodyDiv);
  newCardBodyDiv.appendChild(newCardTitleH5);
  newCardBodyDiv.appendChild(newCardTextP);
  newCardBodyDiv.appendChild(newCardStatusDiv);
  newCardDiv.appendChild(newCardButtonA);

  newCardButtonA.addEventListener("click", () => {
    newColDiv.style.display = "none";
  });
};