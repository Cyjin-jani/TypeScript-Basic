//일단, tsconfig.json파일에서, typeRoots라는 속성을 추가, "./node_modules/@types" 뿐 아니라,
// "./내가만든폴더(ex.types)"를 추가한다.
//types라는 폴더를 만들었다고 하면, 그 아래에 라이브러리 이름을 한 (정확히는, import 할 때 그 이름) 폴더를 생성하고,
//그 안에 index.d.ts라는 타입정의를 위한 파일을 만든다. (지금 이 파일)
// declare module 'chart.js' {
//   //.. 내부에 인터페이스 등 직접 타입 정의 가능.
// }
