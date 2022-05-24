let inputId = document.getElementById('inputId')
let previousGuess = document.getElementById('previousGuess')
let leftGuess = document.getElementById('leftGuess')
let rightGuess = document.getElementById('rightGuess')
let newGame = document.getElementById('newGame')

let gussesLeft = 10

let actualNum = Math.trunc(Math.random() * 100) + 1
let ansArray = []
document.getElementById('submitBtn').addEventListener('click', () => {
    ansArray.push(Number(inputId.value))
    checkEquality(Number(inputId.value))
    inputId.value = ""
})

const checkEquality = (numGussed) => {
    console.log(actualNum)
    console.log(gussesLeft)
    gussesLeft--;

    if (gussesLeft > 0 && numGussed < actualNum)
    {
        rightGuess.innerText = "Try Higher value"
    }
    else if (gussesLeft > 0 && numGussed > actualNum)
    {
        rightGuess.innerText = "Try Lower value"
    }
    else
    {
        if (gussesLeft == 0 && numGussed !== actualNum)
        {
            leftGuess.innerText = "Guesses Left: " + gussesLeft;
            rightGuess.innerText = "Game Over! Right Answer was " + actualNum;
            newGame.innerText = "Start a New Game";
        }
        else if (gussesLeft == 0 && numGussed === actualNum)
        {
            rightGuess.innerText = "You Gussed It Right!";
            newGame.innerText = "Start a New Game";
        }
        else
        {
            rightGuess.innerText = "You Gussed It Right!";
            newGame.innerText = "Start a New Game";
        }
    }
    leftGuess.innerText = "Guesses Left: " + gussesLeft;
    previousGuess.innerText = "previousGuess: "+ansArray.join(",")
    console.log(previousGuess.innerText)
}
newGame.addEventListener("click", () => {
    actualNum = Math.trunc(Math.random() * 100) + 1
    leftGuess.innerText = "Guesses Left: "
    rightGuess.innerText = ""
    newGame.innerText = ""
    gussesLeft = 10
})
