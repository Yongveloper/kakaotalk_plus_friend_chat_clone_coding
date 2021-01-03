'use strict';

let newDate = new Date();

// 타이틀 날짜 받아오기
function getDate() {
  const dateTitle = document.querySelector('.chatting_date');
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const date = newDate.getDate();
  const day = newDate.getDay();
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  dateTitle.innerText = `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일`;
}

// 톡 시간(현재시간) 받아오기
function getTime(section) {
  const time = section.querySelector('.chatting_time');
  newDate = new Date();
  let hours = newDate.getHours(),
    minutes = newDate.getMinutes();

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
const questions = {
  birthday: '깐돌이의 생일은 언제예요??',
  place: '깐돌이는 어디서 태어났어용??',
  food: '깐돌이가 좋아하는 음식은 뭔가요!!??',
  time: '깐돌이가 좋아하는 시간은 언제죠??',
  weight: '깐돌이의 몸무게는 몇 키로인가요??',
  photo: '깐돌이 사진 좀 보여주세요ㅎㅎ',
};
const answers = {
  greethings:
    '[깐돌 고객센터] 깐돌이의 궁금한 점을 알려드립니다.<br /><br />깐돌이에 대해서 어떠한 것들이 궁금하신가요?',
  birthday: '깐돌이의 생일은<br>2007년 10월 23일날 태어났습니다.^^<br>참고로 누나 몽실이가 있습니다!',
  place: '깐돌이는 경기도 수원시 팔달구 화서동에서 이쁘게 잘 태어났습니다~ 수원견!',
  food:
    '깐돌이는 천하장사 소세지 정말 너무 좋아해요~<br>그래서 까달라고 갖고 올 때도 있고, 쌀튀밥이라는 간식도 정말 좋아한답니다.^^<br>그리고 사람음식도 엄청 좋아했는데 이제는 절대 주지 않고 있어요.',
  time:
    '깐돌이가 좋아하는 시간은 역시 산책시간이겠죠?^^<br>그리고 형아가 인형가지고 놀아줄 때도 정말 즐겁게 지칠줄 모르고 잘 놀아요!',
  weight: '깐돌이의 몸무게는 3.8kg 이에요.<br>깐돌이가 젊었을 때는 4.5kg 까지 나갔었답니다:)',
  photo: '<img src="images/깐돌사진1.jpeg" />',
};

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
      <p>${question}</p>
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
        <p>${answer}</p>                        
      </div>
  </div>                
  </div>
  <div class="chatting_time">
    00:00
  </div>`;
}

function createSection(user, talk) {
  const mainContainer = document.querySelector('.chatting_main_container');
  const newSection = document.createElement('section');
  newSection.classList.add(user);
  if (user === 'chatting_me') {
    newSection.innerHTML = createMyHTMLString(talk);
  } else {
    newSection.innerHTML = createFriendHTMLString(talk);
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
function converse(e) {
  const type = e.target.dataset.type;
  switch (type) {
    case 'birthday':
    case 'place':
    case 'food':
    case 'time':
    case 'weight':
    case 'photo':
      iSay(questions[type]);
      setTimeout(friendSay, 1000, answers[type]);
      break;
  }
}

function init() {
  const questionList = document.querySelector('.chatting_questions_list');
  getDate();
  setTimeout(friendSay, 1000, answers.greethings);
  questionList.addEventListener('click', (e) => converse(e));
}

init();
