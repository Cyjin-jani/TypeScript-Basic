type myString = string;
const nothing: myString = 'hi';

interface Human {
    name: string;
    age: number;
}

type Person = {
    name: string;
    age: number;
}

var sera: Human = {
    name: 'sera',
    age: 30
}

var vision: Person = {
    name: 'vision',
    age: 1
}
//타입 별칭은 어떤 새로운 타입을 생성하여 사용하는 것이 아니라,
//정의한 타입에 대해 나중에 참고가 용이하도록 별칭을 부여하는 것임.

//타입 별칭의 방법은 상속(extends)이 불가능하다.
//그렇기 때문에 공식 문서에도 인터페이스를 쓰는 것을 권장하고 있다.