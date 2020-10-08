"use strict";

// Menu Show & Hide

const menuBtn = document.querySelector(".chatting_navbar_bars");
const menuBackground = document.querySelector(".chatting_menu");
const menuContents = document.querySelector(".chatting_menu_content");

function menuShowHandler() {
  menuBackground.classList.add("show");
  menuContents.classList.add("show");
}

function menuHideHandler() {
  menuBackground.classList.remove("show");
  menuContents.classList.remove("show");
}

menuBtn.addEventListener("click", menuShowHandler); //메뉴 아이콘 클릭시 메뉴 활성화
menuBackground.addEventListener("click", menuHideHandler); // 검은 배경 클릭시 메뉴 비활성화
