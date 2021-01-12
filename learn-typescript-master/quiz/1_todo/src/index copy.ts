// //Type 별칭을 활용하여 중복을 없애는 방법.
// // type Todo = {
// //   id: number;
// //   title: string;
// //   done: boolean;
// // };
// // let todoItems: Todo[];

// //기존의 방식
// let todoItems1: { id: number; title: string; done: boolean }[];

// // api라고 가정. (본래 axios.get등을 통해 접속해서 값을 받았음.)
// function fetchTodoItems1(): { id: number; title: string; done: boolean }[] {
//   const todos = [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: false },
//     { id: 3, title: '스크립트', done: false },
//   ];
//   return todos;
// }

// // crud methods
// function fetchTodos1(): object[] {
//   const todos = fetchTodoItems();
//   return todos;
// }

// //할 일 추가
// function addTodo1(todo: { id: number; title: string; done: boolean }): void {
//   todoItems.push(todo);
// }
// //할 일 지우기
// function deleteTodo1(index: number): void {
//   todoItems.splice(index, 1);
// }
// //특정 할 일 완료 처리
// function completeTodo1(
//   index: number,
//   todo: { id: number; title: string; done: boolean }
// ): void {
//   todo.done = true;
//   todoItems.splice(index, 1, todo);
// }

// // business logic

// function logFirstTodo1(): object {
//   return todoItems[0];
// }

// //완료된 일만 보여주기
// function showCompleted1(): object[] {
//   return todoItems.filter(item => item.done);
//   //위 리턴의 es2015 표기법.
//   // return todoItems.filter(function (item) {
//   //   if(item.done) {
//   //     return item;
//   //   }
//   // })
// }

// // TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
// function addTwoTodoItems1(): void {
//   // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
//   const item1 = {
//     id: 4,
//     title: 'item 4',
//     done: false,
//   };
//   addTodo1(item1);
//   addTodo1({
//     id: 5,
//     title: '아이템 5',
//     done: false,
//   });
// }

// // NOTE: 유틸 함수
// function log1(): void {
//   console.log(todoItems);
// }

// todoItems = fetchTodoItems1();
// addTwoTodoItems1();
// log1();
