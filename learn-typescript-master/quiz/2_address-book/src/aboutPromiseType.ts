//동기적인 코드를 사용하면 타입추론이 쉽게 가능함.
// function fetchItems() {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

// let result = fetchItems();
// console.log(result);

//promise 가 기본적으로 제네릭을 받음.
//비동기적인 코드의 경우 unknown이 뜨고 있음.
// function fetchItems(): Promise<string[]> {
//   let items: string[] = ['a', 'b', 'c'];
//   return new Promise(function (resolve) {
//     resolve(items);
//   });
// }
// fetchItems();
