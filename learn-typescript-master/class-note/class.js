// // ES 2015 (ES6) 부터 적용된 개념.

// class Person {
//     //class 로직
//     constructor(name, age) {
//         console.log('생성완료');
//         this.name = name;
//         this.age = age;    
//     }
// }

// var tani = new Person('tani', 30);
// console.log(tani);


// //prototype

// var user = {name: 'capt', age: 100};
// // var admin = {name: 'capt', age: 100, role: 'admin'};

// //중복되는 코드들에 대하여, 줄일 수 있는 방법이 필요. => 상속

// var admin = {};
// admin.__proto__= user;
// console.log(admin.name); //'capt'
// console.log(admin.age); //100

// admin.role = 'admin';
// console.log(admin.role); //'admin'



