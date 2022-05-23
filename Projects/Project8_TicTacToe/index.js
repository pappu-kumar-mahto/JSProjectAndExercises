let grids = document.getElementsByClassName('colBlock')
let currentTurnText = document.getElementById('currentTurnText')
let currentPlayerTurn = 1
let gameOver = false

const switchPlayer = {
    1: 'X',
    2: 'O'
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8,],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const singleMove = (index) => {
    if (!gameOver && !grids[index].innerText) {
        grids[index].innerText = currentPlayerTurn === 1 ? switchPlayer[1] : switchPlayer[2]
        let winningPlayer = checkWiningStatus()

        if (winningPlayer !== 'No Winner') {
            gameOver = true
            currentTurnText.innerText = `Player ${winningPlayer} won!`
            return
        }
    }
    currentPlayerTurn = currentPlayerTurn === 1 ? 2 : 1
    currentTurnText.innerText = `Player ${currentPlayerTurn}'s turn`
}

const checkWiningStatus = () => {
    for (let i = 0; i < winningCombinations.length; i++){
        combination = winningCombinations[i]
        let value = grids[combination[0]].innerText

        if (combination.every(index => grids[index].innerText && grids[index].innerText === value)) {
            addBorderStyle(combination)
            return value === 'X' ? 1 : 2
        }
    }
    return 'No Winner'
}

const addBorderStyle = (indexArray)=> {
    indexArray.forEach(index => grids[index].style.cssText = 'background-color: rgba(247, 191, 129, 1)')
}