//Mapped type 기본 문법.
// 기존에 정의된 타입을 새로운 타입으로 변환해주는 문법.
// 자바스크립트의 map함수를 타입에 적용했다고도 할 수 있음.

//기본 문법
// { [ P in K ] : T }
// { [ P in K ] ? : T }
// { readonly [ P in K ] : T }
// { readonly [ P in K ] ? : T }

type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number}
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
    //string 타입이 값으로 들어가면 에러가 남.
}

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for (var key in arr) {
//     console.log(arr[key]);
// }

type Subset<T> = {
    [K in keyof T]?: T[K]
}

interface Person {
    age: number;
    name: string;
}

const ageOnly: Subset<Person> = {age: 23}