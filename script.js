const hamButton = document.getElementById('hamburger-icon');
const hamMenu = document.getElementById('hamburger-menu');
const hamCloseBtn = document.getElementById('ham-close-btn')

hamButton.addEventListener('click', () => {
    hamMenu.classList.add('show');
});
hamCloseBtn.addEventListener('click', () => {
    hamMenu.classList.remove('show');
})