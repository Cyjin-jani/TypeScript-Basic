//반복되는 타입들에 한해서 인터페이스를 적용시키면
//중간에 오탈자가 나거나
//다른 사람이 코드를 보더라도 규칙을 금방 알아챌 수 있음.
//동일한 규칙으로 해당 인터페이스를 쓰겠다고 약속을 하는 것.


//인터페이스의 생성
interface User {
    age: number;
    name: string;
}

//변수를 정의하는 인터페이스
//인터페이스로 타입 적용 및 활용하기 (변수에 활용)
var john: User = {
    age: 33,
    name: 'john'
}


//함수의 인자(파라미터)를 정의하는 인터페이스 (함수에 활용)
function getUser(user: User) {
    console.log(user);
}

const loki = {
    name: 'loki',
    age: 1000
}
//여기서 loki를 인자로 넣을 때, 
//위의 함수에서 정의한대로 User 인터페이스 타입이 제대로 지켜지는지 검사.
getUser(loki);


//함수의 구조(스펙)를 정의하는 인터페이스
interface SumFunction {
    (a:number, b:number): number;
}
//sum이라는 건 SumFunction이라는 형태의 함수구조를 가짐.
var sum: SumFunction;
//직접 sum 함수를 정의
sum = function (a, b) {
    return a + b;
}
sum(3, 4);
//미리 설계 단계에서 위와 같이 함수의 구조를 잡아두고 코딩을 진행할 수 있는 장점.
// 아래와 같은 함수의 형태로 코딩할 필요가 없음.
// sum = function (a: number, b: number): number {
//     return a + b;
// }


//es6 문법인 경우 1
const sumFunc: SumFunction = (a, b) => {
    return a + b;  
}
sumFunc(1, 2);

//es6 문법인 경우 2
const sums = (a: number, b: number): number => {
    return a + b;
}
sums(1, 2);



// 인덱싱을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}
//위의 의미: 인덱스는 숫자타입이 쓰이고, 그 배열의 인덱스 결과(리턴)은 string타입이 나온다.

//사용방법
var array: StringArray = ['a', 'b', 'c'];
array[0]; // 'a'
//모든 타입이 string이므로 아래와 같이 number를 넣으려 했을 때 에러가 남.
//array[1] = 10; 



//인터페이스 딕셔너리 패턴
//정규표현식
interface StringRegexDictionary {
    [key: string]: RegExp;
}

// 정규표현식을 가진 객체
var obj: StringRegexDictionary = {
    // rgx: /abc/,
    //아래는 정규표현식이 와야 하는데 일반 string이 왔기에 에러가 남.
    // cssFile: 'css'
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
//아래와 같이 역시 타입에 대한 검사는 배열때 처럼 이루어짐.
//아래 예시의 경우, 정규표현식이 아닌 string값을 넣으려 했다고 에러가 남.
// obj["cssFile"] = 'abc'

//객체의 key들로만 배열을 만드는 경우, 타입스크립트의 추론을 통해 타입 지정이 편리함.
Object.keys(obj).forEach(function(value) {
    //value가 string이라고 추론이 가능해짐. (타입스크립트에서 알려줌.)
})



//인터페이스의 상속(extends)

interface Human {
    name: string;
    age: number;
}

// interface Developer {
//     name: string;
//     age: number;
//     language: string;
// }

//위와 같이 Developer 인터페이스에서도 똑같이 name과 age를 사용하고 있다면, (타입까지 같아야)
//Human 인터페이스에서 정의한 것을 상속받아 사용할 수 있다. (아래 예시)

interface Developer extends Human {
    language: string;
}

//상속받은 인터페이스로 타입을 정의하면 상속받은 인터페이스의 요소까지 사용가능.
var thor: Developer = {
    language: 'ts',
    age: 1000,
    name: 'THOR',
}

