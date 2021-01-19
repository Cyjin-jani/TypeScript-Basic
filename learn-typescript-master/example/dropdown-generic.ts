//유니온 타입을 사용하여 코드를 작성해보기.
// interface Email {
//   value: string;
//   selected: boolean;
// }
// interface ProductNum {
//   value: number;
//   selected: boolean;
// }
// // 유니온 타입으로 구성한 경우,
// //새로운 타입이 들어올 경우를 대비하여 또 새로운 인터페이스 정의가 필요함.
// //(아래는 예시)
// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// const numberOfProducts: ProductNum[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem(item: Email | ProductNum) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem(product);
// })


//제네릭을 사용한 경우
//interface에 제네릭을 사용.
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}
//제네릭을 통해 여러 타입을 하나의 인터페이스로 커버.
const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//제네릭을 사용함으로서 유니온 타입이 필요가 없어짐.
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
})