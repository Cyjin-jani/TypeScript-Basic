//유틸리티 타입 (제네릭 타입)
interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//     //..
// }


//Product 타입의 일부만 가지고 표현을 해야하는 경우, 해당 타입을 쓰지 못하고, 아래처럼 쓰게 됨.
//위의 Product타입과 사실은 중복되지만, 새로 선언해서 쓰게 됨.
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// function displayProductDetail(shoppingItem: ProductDetail) {
// //..
// }

//유틸리티 Pick 타입

//Pick이라는 유틸리티 타입을 활용해서 아래와 같이 필요한 속성 타입만 뽑아서 사용이 가능.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
//위처럼 선언하면 그대로 사용이 가능함. (즉, 불필요하게 비슷한 종류의 반복되는 타입을 설정해서 사용할 필요가 없음.)

//특정 상품의 상세정보를 나타내는 함수
function displayProductDetail(shoppingItem: ShoppingItem) {
    //....
}

//유틸리티 Omit 타입.
//Pick과 반대로, 쓰고 싶지 않은 속성만 제거하는 타입 형태.
type ShopItem = Omit<Product, 'brand' | 'stock'>
//위의 ShoppingItem과 동일한 속성을 가지는 타입이 된다.


//유틸리티 Partial 타입 사용.

//Partial을 사용하지 않는다면, 어떤 상품의 정보를 업데이트 한다고 가정했을 떄,
// 아래와 같이 모든 속성에 optional을 부여한 타입의 새로운 정의가 필요하다.
// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

//위와 같은 타입을 쓰지 않기 위해서는 간단히 아래와 같이 Partial을 쓰면 된다.
type UpdateProduct = Partial<Product>

//특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {
    //..
}


//유틸리티 타입 Partial 구현해보기.

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

//위의 주석처리된 인터페이스와 동일한 타입.
//#1
// type UserProfileUpdate = {
//     username?: UserProfile['username']
//     email?: UserProfile['email']
//     profilePhotoUrl?: UserProfile['profilePhotoUrl']
// }

//더 줄이기  => 맵드 타입(Mapped Type)이라는 형태로 위 #1 코드를 줄임.
//#2
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

//keyof를 써서 좀 더 줄이기
//#3
//keyof 확인
// type UserProfileKeys = keyof UserProfile

type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

//#4 최종 구현 
//Partial의 형태와 같이 구현됨. (Subset 대신 Partial)
//제네릭을 넣어서 어떤 타입이든 사용할 수 있도록 함.
type Subset<T> = {
    [p in keyof T]?: T[p]
}