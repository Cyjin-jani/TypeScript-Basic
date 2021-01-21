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

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
//Promise 자체가 제네릭을 타입으로 받게 끔 되어있음. (비동기로 동작하는 경우에는 필연적인듯..)
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  //타입 추론으로 인해, resolve에는 따로 타입 정의가 필요 없음. (제네릭 타입을 선언하여 사용했기 때문에)
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];
  //클래스의 constructor는 기본적으로 타입 정의가 되지 않도록 되어 있다.
  constructor() {
    //클래스의 내부 속성 메서드 호출.
    this.fetchData();
  }

  fetchData(): void {
    //위에서 Promise에 들어갈 제네릭 타입을 Contact[]라고 명시해 주었기 때문에,
    //아래에서 바로 response가 Contact[] 타입이 들어온다는 것을 알고 있음 (타입추론)
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  //위의 Contact 인터페이스에서 name, address의 타입을 string으로 지정해주었기에, 아래 파라미터 타입들도 똑같이 지정.
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }
  //Home, Office, Studio 등의 phoneType이 올 수 있다.
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  //위와 같이 phoneType을 string으로만 두면, 아래와 같이 오타가 날 경우 에러를 잡기위해 또다른 노력이 들어감.
  // findContactByPhone('ofice')
  // 이넘을 아래와 같이 활용하면 실수(오탈자)로 인한 에러를 줄일 수 있음.
  // findContactByPhone(PhoneType.Office)

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
