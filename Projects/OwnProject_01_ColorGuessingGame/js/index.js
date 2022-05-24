/**************************************Disappearing Wrong Selection*************************************/

for (let i = 0; i < colors.length; i++){
    boxes[i].style.background = colors[i]
    boxes[i].addEventListener('click', () => {
        let selectColor = boxes[i].style.background
        if (selectColor === pickedColor)
            win()
        else {
            boxes[i].style.transition = "all 1s ease-in-out"
            boxes[i].style.backgroundColor = "aquamarine"
            statusText.textContent = "Try Again!"
        }
    })
}

/**************************************Winning Condition*************************************/

const win = () => {
    for (let i = 0; i < colors.length; i++){
        boxes[i].style.background = pickedColor
    }
    document.querySelector('h1').style.background = pickedColor
    statusText.textContent = "Correct!"
}