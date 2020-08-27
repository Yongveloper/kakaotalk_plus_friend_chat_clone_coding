'use strict';

const dateTitle = document.querySelector('.chatting_date');     

let time = document.querySelector('.chatting_time');

let newDate = new Date();           

// 타이틀 날짜 받아오기
function getDate() {
    const year = newDate.getFullYear(),
      month = newDate.getMonth(),
      date = newDate.getDate(),
      day = newDate.getDay(),
      week = new Array ('일','월','화','수','목','금','토');

    dateTitle.innerText = `${year}년 ${month+1}월 ${date}일 ${week[day]}요일`;
}
getDate();

// 톡 시간(현재시간) 받아오기
function getTime() {
    newDate = new Date();
    let hours = newDate.getHours(),
         minutes = newDate.getMinutes();    

    if(hours > 12) {
        hours = hours - 12;
        time.innerText = 
        `오후 ${hours < 10 ? `${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    } else {
        hours = hours ? hours : 12;
        time.innerText = 
        `오전 ${hours < 10 ? `${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    }    
}
getTime();

// 질문 답변
const mainContainer = document.querySelector('.chatting_main_container');

const questionContainer = document.querySelector('.chatting_questions_list'),
questionList = questionContainer.querySelectorAll('li');

const audio = new Audio('카톡.mp3');

// 나의 질문 톡
function myQuestion(question) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('chatting_me');
    mainContainer.append(newDiv);
    newDiv.innerHTML = 
    `<div class="chatting_time">
        00:00
     </div>
     <div class="chatting_me_talk">
     <div class="chatting_me_talk_section">
        <p>${question}</p>
    </div>
    </div>`;
    
    time = newDiv.querySelector('.chatting_time');    
    getTime();
}
// 깐돌이의 답변
function friendAnswer(answer) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('chatting_friend');
    mainContainer.append(newDiv);
    newDiv.innerHTML =
    `<div class="chatting_friend">
    <div class="chatting_friend_image">
        <img src="images/깐돌프사.jpg" />
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
    </div>
</div>`;

time = newDiv.querySelector('.chatting_time');    
getTime();

audio.play(); //답변과 동시에 카톡알림음
}
// 질문 리스트 클릭시 
function questionAnswer() {
let question = this.className;
switch (question) {
    case 'question_birthday' :
        myQuestion('깐돌이의 생일은 언제예요??');
        setTimeout(friendAnswer,1000,'깐돌이의 생일은<br>2007년 10월 23일날 태어났습니다.^^<br>참고로 누나 몽실이가 있습니다!');       
        break;
    case 'question_birth_place' :
        myQuestion('깐돌이는 어디서 태어났어용??');
        setTimeout(friendAnswer,1000,'깐돌이는 경기도 수원시 팔달구 화서동에서 이쁘게 잘 태어났습니다~ 수원견!');
        break;
    case 'question_favorite_food' :
        myQuestion('깐돌이가 좋아하는 음식은 뭔가요!!??');
        setTimeout(friendAnswer,1000,'깐돌이는 천하장사 소세지 정말 너무 좋아해요~<br>그래서 까달라고 갖고 올 때도 있고, 쌀튀밥이라는 간식도 정말 좋아한답니다.^^<br>그리고 사람음식도 엄청 좋아했는데 이제는 절대 주지 않고 있어요.');
        break;
    case 'question_favorite_time' :
        myQuestion('깐돌이가 좋아하는 시간은 언제죠??');
        setTimeout(friendAnswer,1000,'깐돌이가 좋아하는 시간은 역시 산책시간이겠죠?^^<br>그리고 형아가 인형가지고 놀아줄 때도 정말 즐겁게 지칠줄 모르고 잘 놀아요!');
        break;
    case 'question_weight' :
        myQuestion('깐돌이의 몸무게는 몇 키로인가요??');
        setTimeout(friendAnswer,1000,'깐돌이의 몸무게는 3.8kg 이에요.<br>깐돌이가 젊었을 때는 4.5kg 까지 나갔었답니다:)'); 
        break;
    case 'question_photo' :
        myQuestion('깐돌이 사진 좀 보여주세요ㅎㅎ');
        setTimeout(friendAnswer,1000,'<img src="images/깐돌사진1.jpeg" />');
        setTimeout(friendAnswer,2000,'<img src="images/깐돌사진2.jpeg" />');
        setTimeout(friendAnswer,3500,'우리 깐돌이 정말 귀엽고 이쁘죠!?');
        break;
}
};

questionList.forEach(questionList => questionList.addEventListener('click', questionAnswer));