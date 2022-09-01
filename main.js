const buttonMenu = document.querySelector('.header__menu');
const sideMenu = document.querySelector('.side-menu');

// show/hide side menu when clicked
buttonMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('side-menu--active');
})