'use strict';

let newDate = new Date();

// 타이틀 날짜 받아오기
function getDate() {
  const dateTitle = document.querySelector('.chatting_date');
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const day = newDate.getDay();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  dateTitle.innerText = `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일`;
}

// 톡 시간(현재시간) 받아오기
function getTime(section) {
  const time = section.querySelector('.chatting_time');
  newDate = new Date();
  let hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  if (hours > 12) {
    hours = hours - 12;
    time.innerText = `오후 ${hours < 10 ? `${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  } else {
    hours = hours ? hours : 12;
    time.innerText = `오전 ${hours < 10 ? `${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }
}
//
// 질문 답변
//
// JSON 데이터 받아오기
function loadData() {
  return fetch('data/data.json').then((response) => response.json());
}

// 톡 도착시 스크롤 최하로 이동
function scrollDowun() {
  const scrollHeight = document.body.scrollHeight;
  scrollTo(0, scrollHeight);
}

function createMyHTMLString(question) {
  return `
  <div class="chatting_time">
      00:00
  </div>
    <div class="chatting_me_talk">
    <div class="chatting_me_talk_section">
      ${question}
  </div>
  </div>
  `;
}

function createFriendHTMLString(answer) {
  return `
  <div class="chatting_friend_image">
    <img src="images/깐돌프사.jpg" alt="profile" />
  </div>
  <div class="chatting_freind_contents">
  <div class="chatting_friend_name">
    깐돌 고객센터
  </div>
  <div class="chatting_friend_talk">
      <div class="chatting_friend_header">
        알림톡 도착
      </div>
      <div class="chatting_friend_talk_section">
        ${answer}                      
      </div>
  </div>                
  </div>
  <div class="chatting_time">
    00:00
  </div>
  `;
}

function createSection(user, content) {
  const mainContainer = document.querySelector('.chatting_main_container');
  const newSection = document.createElement('section');
  newSection.classList.add(user);
  if (user === 'chatting_me') {
    newSection.innerHTML = createMyHTMLString(content);
  } else {
    newSection.innerHTML = createFriendHTMLString(content);
  }
  mainContainer.appendChild(newSection);

  return newSection;
}

// 나의 톡
function iSay(question) {
  const me = 'chatting_me';
  const mySection = createSection(me, question);
  getTime(mySection);
  scrollDowun();
}
// 깐돌이 톡
function friendSay(answer) {
  const audio = new Audio('audio/카톡.mp3');
  const friend = 'chatting_friend';
  const friendSection = createSection(friend, answer);
  getTime(friendSection);
  audio.play();
  scrollDowun();
}
// 질문 리스트 클릭시
function converse(e, data) {
  const type = e.target.dataset.type;
  switch (type) {
    case 'birthday':
    case 'place':
    case 'food':
    case 'time':
    case 'weight':
    case 'photo':
      iSay(data.questions[type]);
      setTimeout(friendSay, 1000, data.answers[type]);
      break;
  }
}

function setEventHandler(data) {
  const questionList = document.querySelector('.chatting_questions_list');
  questionList.addEventListener('click', (e) => converse(e, data));
}

loadData() //
  .then((data) => {
    getDate();
    setTimeout(friendSay, 1000, data.answers.greethings);
    setEventHandler(data);
  })
  .catch((error) => console.log(error));
