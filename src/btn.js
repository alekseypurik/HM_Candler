export const menuBtn = document.querySelector('.menu__btn');
export const menuMobile = document.querySelector('.header__menu-list');

export default menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});