//타입 호환.

//인터페이스와 클래스

interface frontEnd {
    name: string;
    skill: string;
}
interface WebDev {
    name: string;
}

var developer: frontEnd;
var person: WebDev;
//person(WebDev)은 속성이 name밖에 없음.
//근데, developer는 속성이 name과 skill 두가지 속성을 가지고 있음
// 왼쪽에 있는 타입. 개체가 많은 속성을 가지고 있는 쪽이 구조적으로 더 큰 관계를 가지고 있음.
// 그렇기에 더 작은 쪽을 큰 쪽에 할당할 수 없음.
// developer = person; //에러 (frontEnd의 skill이 없으므로...)
//이렇게 써야 에러가 안남.
person = developer;

// 즉, 구조적으로 더 큰 타입에서는 더 작은 타입을 지원할 수 없음...

//서로 타입이 호환이 가능한 지를 확인할 때에는 interface나 class의 차이를 따지지 않고,
// 그 안의 구조적 속성들과 해당 속성들의 타입의 일치율을 보고 판단한다.

class Person {
    name: string;
    skill: string;
}
//Class Person은 인터페이스 frontEnd와 구조적으로 호환이 가능함. 
person = new Person();



//함수와 제네릭
var add = function(a: number) {
    //...
}
var sum = function(a: number, b: number) {
    //...
}

// add보다 sum이라는 함수의 구조적 크기가 더 크다.
// 즉, add를 포함하고, 추가적으로 어떤 옵션을 더 제공할 수 있는 게 sum함수

// add는 두개의 인자를 받을 수 없어서 에러남.
// add = sum; //에러

//sum은 이미 두개의 인자를 받을 수 있으므로 호환 가능.
sum = add;



//제네릭
interface Empty<T> {
    //...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
//제네릭으로 인해 구조적 차이가 발생하지 않음.
//서로 동일하기에 호환이 됨.
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// 위의 NotEmpty의 경우, 제네릭에 따라 타입이 변동되어, 구조적 차이가 발생.
// 때문에 아래 경우는 호환이 안됨.
//아래 두 예시 모두 에러
// notEmpty1 = notEmpty2; //error
// notEmpty2 = notEmpty1; //error
