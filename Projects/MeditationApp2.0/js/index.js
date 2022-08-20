//select Play and Pause Buttons
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

//select audio element
const audio = document.querySelector('.audio audio')

//Play Audio
play.addEventListener('click', () => {
    audio.play()
    updateTime()
})

//Pause Audio
pause.addEventListener('click', () => {
    audio.pause()
})

//select the Seasons and the video

const seasons = document.querySelectorAll('.season')
const video = document.querySelector('.video video')

//Change Video
seasons.forEach((season) => {
    season.addEventListener('click', () => {
        video.src= season.getAttribute('video-src')
    })
})

//select duration buttons
const durations = document.querySelectorAll('.duration')

//default audio duration
let audioDuration = 120

//change duration
durations.forEach((duration) => {
    duration.addEventListener('click', () => {
        audioDuration = duration.getAttribute('audio-duration')
        audio.currentTime = 0
        updateTime()
    } )
})

//select Rect and remaining time element

const path = document.querySelector('.rect')
const remainingTime = document.querySelector('.audio-remaining-time')

//total length of the path
const pathLength = path.getTotalLength()

//set the length of a dash to pathlength
path.style.strokeDasharray = pathLength

const updateTime = () => {

    if (audio.currentTime >= audioDuration) { 
        audio.pause() // pause audio
        audio.currentTime = 0 //stop audio
    }

    //Portion Played
    let portionPlayed = audio.currentTime / audioDuration
    //Stroke dashoffset is proportional to portion played.
    path.style.strokeDashoffset = -portionPlayed * pathLength

    //claculate remaining Time
    let remainingTimeInSec = audioDuration - audio.currentTime
    renderRemainingTime(remainingTimeInSec)


    if (!audio.paused) {
        requestAnimationFrame(updateTime)
    }
} 
updateTime()

//Render remaining time 
 function renderRemainingTime (timeInsec) {
    let min = Math.floor(timeInsec / 60)
     let sec = Math.floor(timeInsec % 60)
     min = min < 10 ? `0${min}` : min
     sec = sec < 10 ? `0${sec}` : sec
    remainingTime.innerHTML = `${min}:${sec}`
}