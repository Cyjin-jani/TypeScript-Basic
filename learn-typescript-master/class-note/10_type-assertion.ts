//타입 단언
// var a;
// var b = a;
// a의 타입이 any이기 때문에 b의 타입도 any...


var a;
a = 10;
a = 'a';
// var b = a;

//위와 같은 경우, 중간에 number에서 string으로 타입이 바뀌었음에도
// b에서는 any로 인식한다. (선언 시 타입이 any였기에)
// 그래서 위와 같은 경우, 개발자는 이미 a의 타입이 무엇인지 알고 있기에
// 타입을 단언할 수 있다.
var b = a as string;

// 타입스크립트에게 개발자 본인이 정한 타입으로 인식해라 라는 것으로 사용한다.
// 주로 DOM API 조작 시에 타입단언을 활용.

//DOM API 조작
// <div id="app">app</div>
var div = document.querySelector('div');
//일단 div가 있는지 확인하는 것이 필요. (HTMLElement이거나 Null일 수 있기 때문.)
//타입에 대한 것을 보장해주어야 함.
if (div) {
    div.innerText
}

// 그렇기에 아래처럼 타입단언의 활용이 가능하다.
let appDiv = document.querySelector('#app') as HTMLDivElement;
//위에서 타입을 단언했기에, 따로 if로 체크해주지 않고 바로 메서드 사용이 가능한 걸 볼 수 있다.
appDiv.innerText
