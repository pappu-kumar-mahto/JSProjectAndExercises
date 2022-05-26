/*************************DOM NODE SELECTION***********************/

const toDoBlock = document.getElementById("toDoBlock");
const addNewTask = document.getElementById("addNewTask");
const toDoInput = document.getElementById("toDoInput");
const selectPriority = document.getElementById("selectPriority");
const toDoDeadLine = document.getElementById("toDoDeadLine");

/**********************CREATE A NEW TO-DO TASK CARD***************/

const createToDoCard = (newToDo, priority, deadline) => {
  const toDoCardDiv = document.createElement("div");
  const cardHeaderDiv = document.createElement("div");
  const cardHeaderSpan = document.createElement("span");
  const cardHeaderDeadline = document.createElement("span");
  const cardBodyDiv = document.createElement("div");
  const cardTitleH5 = document.createElement("h5");
  const delButton = document.createElement("a");

  toDoCardDiv.classList = "card toDoCard";
  cardHeaderDiv.classList = "card-header";
  cardBodyDiv.classList = "card-body";
  cardTitleH5.classList = "card-title";
  delButton.classList = "btn btn-danger btn-sm";
  delButton.id = "deleteToDo";

  switch (priority) {
    case "High":
      cardHeaderSpan.classList = "badge rounded-pill bg-danger";
      break;
    case "Medium":
      cardHeaderSpan.classList = "badge rounded-pill bg-warning text-dark";
      break;
    case "Low":
      cardHeaderSpan.classList = "badge rounded-pill bg-info text-dark";
      break;
  }

  cardTitleH5.innerText = `${newToDo[0].toUpperCase()}${newToDo.slice(1)}`;
  cardHeaderSpan.innerText = `${priority} Priority`;
  cardHeaderDeadline.innerText = deadline;
  delButton.innerText = "Delete";

  toDoBlock.appendChild(toDoCardDiv);
  toDoCardDiv.appendChild(cardHeaderDiv);
  cardHeaderDiv.appendChild(cardHeaderSpan);
  cardHeaderDiv.appendChild(cardHeaderDeadline);
  toDoCardDiv.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(cardTitleH5);
  cardBodyDiv.appendChild(delButton);
};

/******************ADD NEW TASK TO "To-Do" SECTION*********************/

addNewTask.addEventListener("click", () => {
  const Datevalue = moment(toDoDeadLine.value).format("YYYY/MM/DD h:mm A");
  console.log(Datevalue);
  console.log(newDate)
  if (
    !toDoInput.value ||
    selectPriority.value === "Select Priority" ||
    !toDoDeadLine.value ||
    newDate > Datevalue
  ) {
    alert("Please Enter a TO-DO, Select Priority and Enter a valid DateTime");
    return;
  }
  createToDoCard(toDoInput.value, selectPriority.value, Datevalue);
});

/******************CURRENT DATE and TIME*********************/

const newDate = moment(new Date()).format("YYYY/MM/DD h:mm A");