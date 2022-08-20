const app = document.querySelector('.app')

//inactive time
const inactiveTime = 3000

//last time mouse move
let mouseMoveLastTime = new Date()

//listen for mouse move
document.addEventListener('mousemove', () => {
    mouseMoveLastTime = new Date()

    //show App
    app.classList.remove('inactive')
})

//Deactivate app

const deactiveApp = () => {
    //check if the user is inactive for certain time 
    let now = new Date()
    let deltaTime = now - mouseMoveLastTime

    if (deltaTime >= inactiveTime) { 
        //hide App
        app.classList.add('inactive')
    }

    //Loop
    requestAnimationFrame(deactiveApp)
}
deactiveApp()