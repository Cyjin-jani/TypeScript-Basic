//home, office 등이 올 수 있음. 이를 받아주는 타입.
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}
//전화번호부의 규격을 정해둠.
interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

//에러방지를 위한 이넘 타입 활용
enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
//다수의 export 항목이 있으면 아래에 묶어서 한번에 export하는 게 관례.
export { Contact, PhoneType };
