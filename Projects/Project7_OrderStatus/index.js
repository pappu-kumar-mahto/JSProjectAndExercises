let orderPlace = document.getElementById("orderPlace");
let chefRecieve = document.getElementById("chefRecieve");
let pizzaSause = document.getElementById("pizzaSause");
let firstCheeze = document.getElementById("firstCheeze");
let toppingAdded = document.getElementById("toppingAdded");
let secondCheeze = document.getElementById("secondCheeze");
let pizzaBaked = document.getElementById("pizzaBaked");
let oreganoAdded = document.getElementById("oreganoAdded");
let packageAtCounter = document.getElementById("packageAtCounter");
let finalCall = document.getElementById("finalCall");
let orderHeading = document.getElementById("orderHeading");

const statusBlocks = document.getElementsByClassName("orderStatus");

const addDoneClass = (index) => statusBlocks[index].classList.add("done");

const executeOrder = (callback) => {

	const orderID = document.getElementById("orderId").value;
	orderHeading.innerText = "Status for orderID: " + orderID;
  let x = 0;
  addDoneClass(x++);

  setTimeout(() => {
    addDoneClass(x++);
    setTimeout(() => {
      addDoneClass(x++);
      setTimeout(() => {
        addDoneClass(x++);
        setTimeout(() => {
          addDoneClass(x++);
          setTimeout(() => {
            addDoneClass(x++);
            setTimeout(() => {
              addDoneClass(x++);
              setTimeout(() => {
                addDoneClass(x++);
                setTimeout(() => {
                  addDoneClass(x++);
                  callback();
                }, 2000);
              }, 8000);
            }, 15000);
          }, 5000);
        }, 12000);
      }, 5000);
    }, 10000);
  }, 2000);
};
