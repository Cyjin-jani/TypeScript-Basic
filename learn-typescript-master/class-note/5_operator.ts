//OPERATOR (연산자)

//일반적인 경우
// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100); ERROR

//만약 string 말고 다른 타입을 쓰고 싶은 경우?


//방법1) OR 연산자를 사용하면 된다. 
//즉, 이는 유니온 타입으로, 하나 이상의 타입을 사용하게 되는 경우를 말한다.

function logMessage(value: string | number) {
    console.log(value);
}
logMessage('hello');
logMessage(100);

//아래와 같이도 사용이 가능하다.
var jeremy: string | number | boolean;

function logMessage2(value: string | number) {
    //이렇게 타입의 범위를 특정 타입으로 좁혀나가는 과정을 타입 가드라고 한다. (타입의 필터링)
    if(typeof value === 'number') {
        //number 타입인게 확정적인 경우, 타입스크립트 추론에 의하여 number에서 사용가능한 메소드들 사용가능.
        //value.toLocaleString 등...
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        //string의 메서드들 사용가능
        // value.concat
        // value.toUpperCase 등
        value.toString();
    }
    //위와 같이 타입가드를 통해서 number와 string이 아닌 경우 바로 타입에러를 낼 수도 있다.
    throw new TypeError('value should be string or number');
}
logMessage2('hello');
logMessage2(100);

//유니온 타입의 특징

interface Hero {
    name: string;
    skill: string;
}

interface Avengers {
    name: string;
    age: number;
}


function askSomeone(someone: Hero | Avengers) {
    //유니온 타입을 설정했음에도 모든 속성들을 접근하지 못함.
    //접근할 수 있는 속성은 공통분모인 name뿐.
    // someone.name

    //이유: Hero도 되어야 하고 Avengers도 되어야 하기 때문에,
    //타입 검증이 없이 Hero의 skill이나 Avengers의 age를 사용할 수 없다.
    //때문에 보장된 속성에 대해서만 제공을 한다. (즉, 공통된 속성에만 접근 가능)
    //타입가드를 이용해야 skill이나 age를 사용할 수 있다.
}


// &연산자를 이용한 인터섹션 타입 (실무에서는 잘 안쓰임.)
var hulk: string & number & boolean;
//never라고 나옴... 즉, 위의 경우에는 불가능한 경우이기 때문.

//인터섹션 타입의 정의예시
function askSomeone2(someone: Hero & Avengers) {
    //Hero와 Avengers의 속성을 모두 가지고 있는 타입이라는 뜻이어서,
    //아래와 같이 모든 속성이 사용 가능하다.
    someone.name;
    someone.age;
    someone.skill;
}

//유니온 타입의 예시
askSomeone({ name: 'ironman', skill: 'beam'});
askSomeone({ name: 'captinAmerica', age: 110});

//인터섹션 타입의 예시
// 아래와 같이 쓰면, age가 필요하다고 나옴.
// askSomeone2({ name: 'ironman', skill: 'beam'});
//아래와 같이 사용. 새로운 하나의 타입을 만들게 된다.
askSomeone2({ name: 'ironman', skill: 'beam', age: 52});

