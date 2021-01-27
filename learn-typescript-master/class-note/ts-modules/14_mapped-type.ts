//Mapped type 기본 문법.

type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number}
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000

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