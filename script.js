let btn = document.querySelector('.header-menu_catalog');
let menu = document.querySelector('.menu');
let btnclose = document.querySelector('.close');

btn.onclick = function () {
    menu.classList.toggle("menu-active");
}

btnclose.onclick = function () {
    menu.classList.remove("menu-active");
}