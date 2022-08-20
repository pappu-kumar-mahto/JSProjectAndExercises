const openMenuBtn = document.querySelector('.toggle-menu')
const seasonMenu = document.querySelector('.seasons')

openMenuBtn.addEventListener('click', () => {
    seasonMenu.classList.toggle('open')
    openMenuBtn.classList.toggle('rotate')
})