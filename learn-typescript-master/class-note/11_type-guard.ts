interface WebDeveloper {
    name: string;
    skill: string;
}

interface Human {
    name: string;
    age: number;
}

function introduce(): WebDeveloper | Human {
    return { name: 'Jani', age: 30, skill: 'typescript'}
}
var jani = introduce();

//유니온 타입 시에는 공통된 속성(name)에만 접근 가능
console.log(jani.name);
//Error
// console.log(jani.skill);

//타입 단언을 사용하여 표현할 수 있음 (WebDeveloper라고 단언했기에 skill에 접근 가능.)
if((jani as WebDeveloper).skill) {
    var skill = (jani as WebDeveloper).skill;
    console.log(skill);
} else if ((jani as Human).age) {
    var age = (jani as Human).age;
    console.log(age);
}
//하지만 위와 같이 사용하면, 코드가 길어지고 보기에 불편함 (가독성 저하)

//타입 가드 사용예시
// function is해당타입  <- 이런 패턴으로 짬.

//타입 가드 정의 (해당 타입인지 true, false로 리턴 됨.)
function isWebDeveloper(target: WebDeveloper | Human): target is WebDeveloper {
    return (target as WebDeveloper).skill !== undefined;
}
//타입가드 사용 예
if(isWebDeveloper(jani)) {
//즉, WebDeveloper라면, (true) skill에 접근 가능
    jani.skill;
} else {
    //WebDeveloper가 아니므로, Human이라고 자동적으로 추론되어, age가 됨. 
    //위에 target에서 유니온 타입으로 2가지만 제시했기에, WebDeveloper가 false라면 Human이 될 수 밖에 없음.
    jani.age;
}