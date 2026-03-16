const open = document.querySelector('.burgerMenu');
const menu = document.querySelector('.nav__list_burger');
open.addEventListener ('click', ()=>{
        console.log(menu)
        console.log(menu.classList)
        menu.classList.toggle('--open');
    })