let boxes = document.querySelectorAll('.box')
let rgbStatus = document.querySelector('#rgbSpan')

let colors = generateRandomColor(6)

let pickedColor = colors[Math.trunc(Math.random() * 6)]

rgbStatus.textContent = pickedColor

let playBtn = document.querySelector('#newGame')
let easyBtn = document.querySelector('#easyBtn')
let hardBtn = document.querySelector('#hardBtn')

let boxCount = 6
let statusText = document.querySelector('#status')
statusText.textContent = "Let's Play!!"

easyBtn.addEventListener('click', () => {
    document.querySelector('h1').style.background = "rgb(245, 168, 181)"
    statusText.textContent = "Let's Play!!"

    easyBtn.style.background = "rgb(245, 168, 181)"
    easyBtn.style.color = "#ffffff"
    hardBtn.style.background = "#ffffff"
    hardBtn.style.color = "rgb(245, 168, 181)"
    playBtn.style.background = "#ffffff"
    playBtn.style.color = "rgb(245, 168, 181)"
    
    boxCount = 3
    colors = generateRandomColor(boxCount)
    pickedColor = colors[Math.trunc(Math.random() * 3)]
    rgbStatus.textContent = pickedColor
    
    for (let i = 0; i < boxes.length; i++){
        if (colors[i]) {
            boxes[i].style.background = colors[i]
        } else {
            boxes[i].style.display = 'none'
        }
    }
})

hardBtn.addEventListener('click', () => {
    document.querySelector('h1').style.background = "rgb(245, 168, 181)"
    statusText.textContent = "Let's Play!!"

    hardBtn.style.background = "rgb(245, 168, 181)"
    hardBtn.style.color = "#ffffff"
    easyBtn.style.background = "#ffffff"
    easyBtn.style.color = "rgb(245, 168, 181)"
    playBtn.style.background = "#ffffff"
    playBtn.style.color = "rgb(245, 168, 181)"
    boxCount = 6
    colors = generateRandomColor(boxCount)
    pickedColor = colors[Math.trunc(Math.random() * 6)]
    rgbStatus.textContent = pickedColor
    
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i]
        boxes[i].style.display = 'block'
    }
})

playBtn.addEventListener('click', () => {
    document.querySelector('h1').style.background = "rgb(245, 168, 181)"
    statusText.textContent = "Let's Play!!"
    
    colors = generateRandomColor(boxCount)
    pickedColor = colors[Math.trunc(Math.random() * boxCount)]
   
    rgbStatus.textContent = pickedColor
   
    playBtn.style.background = "rgb(245, 168, 181)"
    playBtn.style.color = "#ffffff"
    easyBtn.style.background = "#ffffff"
    easyBtn.style.color = "rgb(245, 168, 181)"
    hardBtn.style.background = "#ffffff"
    hardBtn.style.color = "rgb(245, 168, 181)"

    for (let i = 0; i < boxes.length; i++){
        boxes[i].style.background = colors[i]
    }
})

for (let i = 0; i < colors.length; i++){
    boxes[i].style.background = colors[i]
    boxes[i].addEventListener('click', () => {
        let selectColor = boxes[i].style.background
        if (selectColor === pickedColor)
            win()
        else {
            boxes[i].style.backgroundColor = "aquamarine"
            statusText.textContent = "Try Again!"
        }
    })
}

const win = () => {
    for (let i = 0; i < colors.length; i++){
        boxes[i].style.background = pickedColor
    }
    document.querySelector('h1').style.background = pickedColor
    statusText.textContent = "Correct!"
}


function generateRandomColor(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    let r = Math.trunc(Math.random() * 255)
    let g = Math.trunc(Math.random() * 255)
    let b = Math.trunc(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`

}