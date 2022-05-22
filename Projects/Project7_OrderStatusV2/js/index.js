
const executeOrder = () => {

    if (!inputOrderId.value.length) {
        alert("Please Enter a  Valid OrderID!!")
        return
    }

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
    .catch((err) => console.log(err));
};

const clearOrder = () => {
    
}
