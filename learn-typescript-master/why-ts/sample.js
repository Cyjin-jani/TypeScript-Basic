// 아래의 경우는 숫자와 문자를 더하기 때문에, 문자열로 취급되어 30이 아니라 1020이라는 문자열이 리턴될 것이다.
// function sum(a, b) {
//     return a + b;
// }

// sum(10, '20');
// var result = sum(10, 20);

// // a와 b, 그리고 반환 값 까지 number타입임을 명시
// function sum(a: number, b:number): number {
//     return a + b;
// }

// sum(10, '20'); //타입스크립트에서는 에러가 남.

// var result = sum(10, 20);
// result.toLocaleString(); //제공하는 api를 자동완성으로 손 쉽게 확인 및 사용이 가능함.
// result.


//타입스크립트처럼 코딩하기

//@ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
 function sum(a, b) {
     return a + b;
 }
 sum(10,20);
//  sum(10,"20"); //@ts-check가 없다면 이게 잘못 되었다고 알려주지 않음.
// sum(10, '20'); //type이 검증됨.