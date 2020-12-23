'use strict';

// Menu Show & Hide
const menuBtn = document.querySelector('.chatting_navbar_bars');
const menuBackground = document.querySelector('.chatting_menu');
const menuContents = document.querySelector('.chatting_menu_content');
const outButton = document.querySelector('.fa-sign-out-alt');

function showMenu() {
  menuBackground.classList.add('show');
  menuContents.classList.add('show');
}

function hideMenu() {
  menuBackground.classList.remove('show');
  menuContents.classList.remove('show');
}

menuBtn.addEventListener('click', showMenu); //메뉴 아이콘 클릭시 메뉴 활성화
menuBackground.addEventListener('click', hideMenu); // 검은 배경 클릭시 메뉴 비활성화
outButton.addEventListener('click', hideMenu);

// Chat Menu Show & Hide
const chatMenuList = document.querySelector('.chatting_questions_list');
const chatMenuContainer = document.querySelector('.chatting_questions_container');

function hideChat() {
  chatMenuContainer.style.transform = 'translateY(145px)';
}

function showChat() {
  chatMenuContainer.style.transform = 'translateY(0)';
}

chatMenuList.addEventListener('click', hideChat);
chatMenuContainer.addEventListener('mouseout', hideChat);
chatMenuContainer.addEventListener('mouseover', showChat);
