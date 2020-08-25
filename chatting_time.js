'use strict';


const dateContainer = document.querySelector('.chatting_date'),
      dateTitle = dateContainer.querySelector('span');

const time = document.querySelectorAll('.chatting_time');

const newDate = new Date(),
      year = newDate.getFullYear(),
      month = newDate.getMonth(),
      date = newDate.getDate(),
      day = newDate.getDay(),
      week = new Array ('일','월','화','수','목','금','토'),
      minutes = newDate.getMinutes();


function getDate() {
    dateTitle.innerText = `${year}년 ${month+1}월 ${date}일 ${week[day]}요일`;
}

getDate();

time.forEach(time => {
    let hours = newDate.getHours();
    if(hours > 12) {
        hours = hours - 12;
        time.innerText = 
        `오후 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    } else {
        hours = hours ? hours : 12;
        time.innerText = 
        `오전 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    }    
});