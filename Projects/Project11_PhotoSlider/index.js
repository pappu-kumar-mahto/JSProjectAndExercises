const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".right-slide")
const slideLeft = document.querySelector(".left-slide")

const upButton = document.querySelector(".up-btn")
const downButton = document.querySelector(".down-btn")

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))

let activeSlideIndex = 0
const sliderLength = 4

const changeSlide = (direction) => {
    const sliderContainerHeight = sliderContainer.clientHeight;
    
    if (direction === "up") { 
        activeSlideIndex++
        if (activeSlideIndex > sliderLength -1) {
            activeSlideIndex = 0
        }
    } else if (direction === "down"){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${sliderContainerHeight * activeSlideIndex}px)`
    slideLeft.style.transform = `translateY(-${sliderContainerHeight * activeSlideIndex}px)`
}