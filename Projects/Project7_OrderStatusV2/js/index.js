let emptyImgId = document.getElementById('emptyImgId')

const executeOrder = () => {
  

  if (!inputOrderId.value.length) {
    emptyImgId.style.display = "block";
    alert("Pleasee Enter a  Valid OrderID!!");
    return;
  }
  emptyImgId.style.display = "none";

  createNewCol(inputOrderId.value.toUpperCase());
  
    
    let orderIdStatus = inputOrderId.value;
  
    addFooterP(orderIdStatus, "Order Placed");
  
    chefRecieve(orderIdStatus)
    .then(pizzaSauceAdded)
    .then(firstLayerAdded)
    .then(toppingAdded)
    .then(secondLayerAdded)
    .then(pizaaBaked)
    .then(oreganoAdded)
    .then(packageRecievedAtCounter)
    .then(() =>
      addFooterP(orderIdStatus, "Order is ready and handed over to Zomato guy!")
    )
    .catch((err) => alert(err));
};

const clearOrder = () => {
    
}
