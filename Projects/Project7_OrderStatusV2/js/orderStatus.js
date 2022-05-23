const addFooterP = (orderNumber, orderStatus) => {
  let footerData = document.getElementById(orderNumber)
  footerData.innerText = orderStatus;
};

const chefRecieve = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber,"Chef received the order and started preparing");
      resolve(orderNumber);
    }, 2000);
  });
};

const pizzaSauceAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Pizza Sauce added");
      resolve(orderNumber);
    }, 5000);
  });
};

const firstLayerAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "First layer of cheeze added");
      resolve(orderNumber);
    }, 10000);
  });
};

const toppingAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Toppings added");
      resolve(orderNumber);
    }, 12000);
  });
};

const secondLayerAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Second layer of cheeze added");
      resolve(orderNumber);
    }, 5000);
  });
};

const pizaaBaked = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Pizza baked!");
      resolve(orderNumber);
    }, 15000);
  });
};

const oreganoAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Oregano added and packed");
      resolve(orderNumber);
    }, 8000);
  });
};

const packageRecievedAtCounter = (orderNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      addFooterP(orderNumber, "Package received at counter");
      resolve(orderNumber);
    }, 2000);
  });
};
