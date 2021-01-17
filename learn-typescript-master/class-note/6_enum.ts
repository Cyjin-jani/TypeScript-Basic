//이넘에 대해서
//숫자형 이넘
// enum SportsWear {
//     Nike,
//     Adidas,
//     Puma
// }

// var myBrand = SportsWear.Nike;
// console.log(myBrand); // 0 

// 만약 숫자를 지정하면 그 숫자로부터 1씩 증가.
enum SportsWear {
    Nike = 10,
    Adidas,
    Puma
}
var myBrand = SportsWear.Nike;
console.log(myBrand); // 10 (별도의 값을 지정하지 않으면 숫자로 지정됨.)

//문자형 이넘
enum Marvel {
    Thor = "토르",
    CaptAmerica = "캡아"
}

var myHero = Marvel.CaptAmerica;
console.log(myHero); //'캡아'


//활용 예시
// function askQA(answer: string) {
//     if(answer === 'yes') {
//         console.log('정답!');
//     }
//     if(answer === 'no') {
//         console.log('오답!');
//     }
// }

// askQA('yes');
// askQA('y');
// askQA('ok');
// askQA('예스');

//Enum의 활용.
enum Answer {
    Yes = 'yes',
    No = 'no'
}

function askQA(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답!');
    }
    if(answer === Answer.No) {
        console.log('오답!');
    }
}

askQA(Answer.Yes);
askQA(Answer.No);