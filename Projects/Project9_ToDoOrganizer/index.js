/*************************DOM NODE SELECTION***********************/

const toDoBlock = document.getElementById('toDoBlock')
const addNewTask = document.getElementById('addNewTask')
const modalInputID = document.getElementById('modalInputID')
const selectPriority = document.getElementById('selectPriority')

/**********************CREATE A NEW TO-DO TASK CARD***************/

const createToDoCard = (newToDo, priority) => {
    let toDoCardDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let cardHeaderSpan = document.createElement('span')
    let cardBodyDiv = document.createElement('div')
    let cardTitleH5 = document.createElement('h5')
    let delButton = document.createElement('a')

    toDoCardDiv.classList = 'card'
    cardHeaderDiv.classList = 'card-header'
    cardHeaderSpan.classList = 'badge rounded-pill bg-danger'
    cardBodyDiv.classList = 'card-body'
    cardTitleH5.classList = 'card-title'
    delButton.classList = 'btn btn-danger btn-xs'
    toDoCardDiv.id = "cardID"
    delButton.id = 'deleteToDo'

    cardTitleH5.innerText = newToDo
    cardHeaderSpan.innerText = priority
    delButton.innerText = 'Delete'

    toDoBlock.appendChild(toDoCardDiv)
    toDoCardDiv.appendChild(cardHeaderDiv)
    cardHeaderDiv.appendChild(cardHeaderSpan)
    toDoCardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild(delButton)
}

/******************ADD NEW TASK TO "To-Do" SECTION*********************/

addNewTask.addEventListener('click', () => {
    if (!modalInputID.value || selectPriority.value === "Select Priority") {
        alert('Please Enter a TO-DO and Select Priority')
        return
    }
    createToDoCard(modalInputID.value, selectPriority.value)
    const cardBlock = document.getElementById('cardID')
    console.log(cardBlock)
    const deleteToDo = document.getElementById("deleteToDo")
    deleteToDo.addEventListener("click", () => {
        // cardBlock.style.display = "none"
        toDoBlock.removeChild(cardBlock)
    })
})

