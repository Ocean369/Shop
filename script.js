let btn = document.querySelector('.header-menu_catalog');
let menu = document.querySelector('.menu');
let btnClose = document.querySelector('.close');
let filterActive = document.querySelector('.filter');
let btnFilter = document.querySelector('.basic');
let categoryActive = document.querySelector('.categoryMenu');
let brandActive = document.querySelector('.brandMenu');
let designerActive = document.querySelector('.designerMenu');
let menuItems = document.querySelector('.menuItems');
let btnSize = document.querySelector('.size a');
let formSize = document.querySelector('.size-sort');


btn.onclick = function () {
    menu.classList.toggle("show-grid");
}

btnClose.onclick = function () {
    menu.classList.remove("show-grid");
}

btnFilter.onclick = function () {
    filterActive.classList.toggle("filter-active");
}

categoryActive.onclick = function () {
    let title = categoryActive.querySelector(".title");
    title.classList.toggle("active");
    menuItems.classList.toggle('show-flex');
}

btnSize.onclick = function () {
    formSize.classList.toggle('show-flex');
}
