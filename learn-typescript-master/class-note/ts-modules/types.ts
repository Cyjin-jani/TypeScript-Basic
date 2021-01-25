// 타입스크립트의 타입만 따로 모듈화 시켜서 사용.
// 유지보수 측면에서도 장점을 가지고 있고, 가독성도 높아지기 때문에 분리하여 사용.
export interface Todo {
    title: string;
    checked: boolean;
}