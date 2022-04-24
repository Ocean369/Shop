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
let title = categoryActive.querySelector(".title");

function setHight() {
    if (title.classList.contains('active')) {

        filterActive.style.height = "531px";
    } else {
        filterActive.style.height = "211px";
    }
}

btn.onclick = function () {
    menu.classList.toggle("show-flex");
}

btnClose.onclick = function () {
    menu.classList.remove("show-flex");
}

btnFilter.onclick = function () {
    filterActive.classList.toggle("filter-active");
    setHight();
}

categoryActive.onclick = function () {
    title.classList.toggle("active");
    menuItems.classList.toggle('show-flex');
    window.setTimeout(setHight, 0);
}

btnSize.onclick = function () {
    formSize.classList.toggle('show-flex');
}
