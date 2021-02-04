//구조 분해 문법 (Destructuring)

// 구조란, 이러한 전형적인 객체,배열의 선언 방식을 뜻함
var arr = [1,2,3];
var obj = {
  a: 10,
  b: 20,
  c: 30,
}

//예제 살펴보기
function fetchData() {
  return {
    data: {
      name: 'capt',
      age: 100
    },
    config: {},
    statusText: '',
    headers: {}
  }
}

var result = fetchData();
console.log(result);

//기존
console.log(result.data);

//구조분해 (객체의 속성에 쉽게 접근)
// var { data } = fetchData();
// console.log(data);

//이름을 바꾸고 싶은 경우. :을 붙이고 변수이름을 쓰면 됨.
//ex
var {data: capt} = fetchData();
console.log(capt);






//Async & Await
// 비동기 처리 패턴의 최신 문법.
// Promise와 callback에서 주는 단점을 해결함.

// 기본 문법

// async function fetchData() {
//     await getUserList();
// }

//예전 비동기는 이런 식. (callback필수)
// function fetchData() {
//   var user = $.ajax('users/1', function(user) {
//     console.log(user);
//   });
//   console.log(user);
// }

// promise의 chaining
// fetchData().then().then().catch()

//최신 비동기 처리방식
// async function fetchData() {
//     var user = await $.ajax('users/1');
//     console.log(user);
// }


