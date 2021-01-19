//제네릭에 대하여

//일반적인 타입 미지정 함수의 경우
// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('hi'); //문자열 hi
// logText(20); //숫자 20
// logText(true); //진위값 true
//위와 같은 형태는 암묵적으로 타입을 정의하지 않았기에 타입이 any로 되어져 어떠한 형태의 값도 받을 수 있음.


//기본 제네릭 문법
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText('hi'); //어딘가 어색한 제네릭의 활용

// 호출되서 함수가 작동되는 시점에, 문자열이던 숫자던 타입까지 전달해서 받을 수 있는게 제네릭.
// 타입에 대한 명시가 없으면, 'hi'라는 게 타입으로 들어가게 되는데, 
//문자열이기 때문에 타입스크립트의 추론을 통해 문자열로 인식한다.
//사실 그래서 제대로 제네릭을 활용하고자 한다면 위와 같은 호출 대신 아래와 같이 사용한다.
//string이라는 타입을 넘기는 경우.
// logText<string>('hi'); //제대로 parameter부터 리턴 값까지 string타입인걸 인지하고 있음.


//기존의 타입 정의 방식대로 한다면....
//1) 함수의 중복 선언 및 사용
// function logText(text: string) {
//     console.log(text);
//     return text;
// }
// function logNum(num: number) {
//     console.log(num);
//     return num;
// }
// logText('hello');
// logNum(20);

//완전히 같은 로직의 코드인데, 타입이 하나 바뀌었다고 동일한 로직의 코드를 타입과 함수의 이름만 바꿔서 중복해서 써야함.
//즉, 타입에 따라 같은 로직의 함수가 중복되므로, 유지보수 측면에서 좋지 않음.

//2) 유니온 타입을 이용한 경우

// function logText(text: string | number) {
//     console.log(text);
//     //문제점1: input 문제. 즉, 서로 다른 타입의 파라미터를 넘기는 문제는 해결되지만,
//     //자동완성을 사용하는 경우, string과 number의 공통된 속성만 사용이 가능... (타입가드를 해야만 함)
//     //공통속성
//     // text.toLocaleString
//     // text.toString
//     // text.valueOf

//     return text;
// }
// logText(20);
// //문제점2: return의 타입이 여전히 string | number인 상태가 된다.
// const aText = logText('hello');
// //number가 들어올 가능성이 존재하므로, string의 메서드를 사용할 수가 없게 된다.
// // aText.split(); //Error

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('hoho'); //문자열 타입이 들어갔고, 문자열 타입이 리턴됨.
str.split(''); //타입이 문자열이므로 문자열 메서드 사용가능.
const flag = logText<boolean>(true); //진위값이 들어갔고, 진위값이 리턴됨.

//인자값(파라미터)와 리턴의 타입을 해당 함수를 호출하는 시점에 정의할 수 있다는 것이 제네릭의 매력!



//인터페이스에 제네릭을 선언하는 방법.
//일반적인 경우
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
// const obj: Dropdown = {valeu: 10, selected: false} //ERROR

//인터페이스에 제네릭 활용하기
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: true }
//에러코드
// const obj2: Dropdown2<number> = { value: 'abc', selected: true } //number타입을 value에 넣어줘야 함. 


//제네릭의 타입 제한 1)
// function logTextLength<T>(text: T): T {
//     //아래와 같이 사용하면 에러가 발생
//     // console.log(text.length); //제네릭에 어떤 타입이 들어올 지 알 수가 없기 때문에, 타입스크립트에서 에러발생.
//     return text;
// }
// logTextLength('hi');

// 위와 같은 부분을 해결하려면 사실 제네릭에 타입 힌트를 주면 되기는 한다. 다만, 배열이 되므로 더 골치 아파질 수도 있음.
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi']); //string 대신 string 배열이 와야 함...리턴값도 배열임...

//제네릭 타입 제한 2)배열 대신 정의된 타입을 이용하기 (상속 이용)
interface LengthType {  
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}
logTextLength('hi');
//위 코드가 통과가 되는건, 문자열은 내부속성으로 length 속성을 이미 가지고 있기 때문이다.
// 따라서 아래 코드는 에러가 남.
// logTextLength(10); //ERROR

//단, length의 속성이 들어가기만 한다면 에러가 나지 않음.
// logTextLength({length: 10});


//제네릭의 타입 제한 3) keyof 활용하기.
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
//keyof를 넣으면,
// ShoppingItem에 있는 key들 중에 한 가지가 바로 제네릭(T)가 될 것이다라는 뜻.
// 그 외의 타입은 허용하지 않게 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
//불허
// getShoppingItemOption("hi"); //Error
// getShoppingItemOption(10); //Error
//허용
getShoppingItemOption("name");
