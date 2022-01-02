# KakaoTalk Plus Freined Clone
 
> 카카오톡 플러스 친구 채팅창 UI + 기능을 HTML + CSS + 순수 자바스크립트로 구현하기

## 미리 보기

- [배포 링크](https://yongveloper.github.io/kakaotalk_plus_friend_chat_clone_coding/)

## 1. 구현 내용

### 1-1 화면 구성

![반응형](https://user-images.githubusercontent.com/64254228/147873433-18324571-e7bd-4518-bb8e-77e9e8acecb6.gif)
CSS Media Query를 이용한 실제 카카오톡과 비슷하게 모바일 화면에서만 보여지게 구성


### 1-2 채팅 동작

![채팅](https://user-images.githubusercontent.com/64254228/147873440-a3408a30-d48e-4b7d-a091-f0bf0268b9cc.gif)
- newDate 메서드를 활용해 현재시간, 보낸 시간, 받은 시간을 보여줌
- 실제 데이터가 통신하는 것처럼 채팅 내용을 json 파일에 작성후 비동기 통신으로 데이터를 받아와서 처리해서 보여주도록 함
- 질문 클릭 시 질문 별로 switch 문을 통해서 innerHTML을 활용해 답변을 질문에 맞게 보여줌

### 1-3 메뉴

![메뉴](https://user-images.githubusercontent.com/64254228/147874649-786579d8-be84-452b-b1e9-f150e74a5d40.gif)
- 메뉴 버튼 클릭 시 class add & remove 를 통해서 transform을 제어함

## 느낀점
- 화면 요소 배치를 하면서 어떤 요소들을 class로 묶을 건지, CSS flex 에 대해서 복습하는 시간을 가졌음
- 순수 자바스크립로 구현 하면서 DOM, Event 등 전보다 익숙하게 다룰 수 있는 경험을 했다.
- 이 프로젝트는 구현 중심으로 만들어보며 자바스크립트에 익숙해지는 것을 목표로 삼았으나, 구조를 잘 설계할 필요가 있어보인다.
