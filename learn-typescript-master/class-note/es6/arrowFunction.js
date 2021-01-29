//ES5
//함수 선언문
function sum(a, b) {
    return a + b;
}
//함수 표현식
var sum = function(a, b) {
    return a + b;
} 

// ES6부터
//함수 표현식(화살표 함수)
var sum = (a, b) => {
    return a + b;
    //위를 이렇게도 줄일 수 있음.
}
var sum = (a, b) => a + b;

//화살표 함수에서 타입 정의는?
//타입스크립트의 화살표 함수 타입 정의.
// var sum = (a: number, b: number): number => {
//     return a + b;
// }
