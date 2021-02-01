## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입혀보기
1. 타입스크립트의 기본 환경 구성. 
   - [X] NPM 초기화
   - [X] 타입스크립트 라이브러리 설치
   - [X] 타입스크립트 설정 파일 생성 및 기본 값 추가
   - [X] 자바스크립트 파일을 타입스크립트 파일로 변환
   - [X] `tsc` 명령어로 타입스크립트 컴파일 하기

2. 명시적인 `any` 선언하기
   - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
   - 가능한 한 구체적인 타입으로 타입 정의

3. 프로젝트 환경 구성.
   - babel, eslint, prettier 등의 환경설정

4. 외부 라이브러리 모듈화
   - JS라이브러리를 TS에서 인식하기 위해 필요한 라이브러리 및 파일들이 있음.
   - 일단 타입 정의가 제공되는 오픈소스 라이브러리를 검색 가능한 아래 사이트에서 해당 라이브러리를 검색한다.
   - https://www.typescriptlang.org/dt/search?search=
   - 있다면, 그냥 그 라이브러리를 받아서 쓰고 (ex. @types/라이브러리명)
   - 없다면, 타입 정의 파일을 직접 만들어줘야 한다.
   - `tsconfig.json` 파일에 `typeRoots` 속성을 추가, 값으로 배열 안에 기본 루트와 함께 원하는 루트를 적는다. 
   - ["./node_modules/@types", "./types"] (첫번째는 필수)
   - 해당 폴더를 생성하고, 그 아래에 라이브러리명으로 폴더를 만든 뒤, 그 안에 `index.d.ts`파일을 만들어 타입을 정의한다.


## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)