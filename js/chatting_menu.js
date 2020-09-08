'use strict';

const menuBtn = document.querySelector('.chatting_navbar_bars');
const menuBackground = document.querySelector('.chatting_menu');
const menuContents = document.querySelector('.chatting_menu_content');

function menuShowHandler() {
    menuBackground.classList.add('menu_background_show');
    menuContents.classList.add('menu_contents_show');
}

function menuHideHandler() {
    menuBackground.classList.remove('menu_background_show');
    menuContents.classList.remove('menu_contents_show');
}

menuBtn.addEventListener('click', menuShowHandler);
menuBackground.addEventListener('click', menuHideHandler);