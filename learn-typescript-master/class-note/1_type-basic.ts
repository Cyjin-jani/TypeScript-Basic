//JS 문자열 선언
// var str = 'hello';

//TS 문자열 선언
let str: string = 'hello';
//str이라는 변수는 문자열로 간주를 하겠다고 미리 선언을 함.

//TS 숫자 선언
let num: number = 10;

//TS 배열 선언 (2가지 방식)
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3];

//변수타입에 어긋나는 변수에 대하여 경고를 해줌.
// let heros: Array<string> = ['Capt', 'Thor', 'Hulk', 10]


// TS 튜플
//배열의 특정 순서의 타입까지 적용시킬 수 있다.
//즉, 모든 인덱스의 타입이 정의될 수 있다.
let address: [string, number] = ['gangnam',100];

//TS 객체
let obj: object = {};


//간단한 객체 선언
let personOne: object = {
        name: 'david',
        age: 30
    };

// 객체의 속성에 대한 타입까지 세세히 정해보기.
let personTwo: {name: string, age: number} = {
    name: 'jani',
    age: 40
}


//TS 진위값
let istrue: boolean = true


//ANY
let greet: any = 'hello';
let nums: any = 30;
let array: any = ['hi', 1, false];


//Void
let useless: void = undefined;
let nulls: void = null;

function voidThings() : void {
    console.log('void');
    // return 10
    return undefined
}

//Never
function neverEndingStory(): never {
    while(true) {
        console.log('never ending story');
    }
}