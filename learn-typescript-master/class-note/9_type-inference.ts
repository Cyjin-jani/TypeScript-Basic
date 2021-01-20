//타입 추론
// 기본적으로 변수를 선언하거나 초기화할 때 타입이 추론된다. 
// 또한, 변수나 속성, 함수의 디폴트 인자(파라미터)값, 리턴 값 등을 설정할 때에도 타입 추론이 된다.

//vs코드에 내장된 타입스크립트의 랭귀지서버의 기능이라고 할 수 있음...

//타입추론 기본 1
var a = 'abc';
//변수와 함수의 기본 인자값, 리턴값의 타입을 추론함.
function getB(b = 10) {
    var c = 'cc';
    return b + c;
}
//문자열 + 숫자는 문자열이 되기 때문에 위의 함수의 리턴 타입은 string이 되어있다.


//타입추론 기본2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// //속성의 타입을 추론함.
// var foodItem: Dropdown<string> = {
//     value: 'food',
//     title: 'hotdog'
// }

//타입추론 기본 3
//복잡한 구조에서의 타입추론 
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown<K>{
    desc: string;
    tag: K;
}
//이렇게 선언하면, Dropdown을 상속 받았기 때문에,
//Dropdown의 속성들인 value와 title도 사용이 가능하다.
//여기서, Dropdown에도 value의 타입이 제네릭이었기에, DetailDropdown에서 선언한 제네릭인 K의 타입이
//상속 받은 Dropdown의 제네릭에도 그대로 적용이 된다.
//그 결과, 아래와 같이 사용이 가능하다.

//제네릭이 string인 경우
var detailFoodItem: DetailDropdown<string> = {
    title: 'hotdog',
    desc: 'delicious',
    value: 'food',
    tag: 'hd'
}
//제네릭이 number인 경우
var detailFoodItem2: DetailDropdown<number> = {
    title: 'hotdog',
    desc: 'delicious',
    value: 5000,
    tag: 1
}


//베스트 커먼 타입 (Best common type)
//가장 적절한(근접한) 타입

var arr = [1,2,true, false, 'abc'];

//결국 모든 타입들을 포함하도록 유니온 타입으로 묶어나감...