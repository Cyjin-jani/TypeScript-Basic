//TS 함수

//파라미터에 타입 정의하기
function sums(a:number, b:number) {
    return a + b;
}

//함수의 리턴값에 타입 정의하기
function add(): number {
    //만약 리턴값이 number타입이 아니라면, 에러가 남.
    return 10;
}

//종합적인 타입 정의 방식 (기본)
function sumCal(a:number, b:number): number {
    return a + b;
}
//error가 뜸. (불필요한 파라미터가 들어감을 인지)
// sumCal(10, 20, 30, 40);


//함수의 옵셔널 파라미터
//물음표가 붙으면 필요에 따라서 파라미터를 넘길수도 있고, 그렇지 않게 할 수도 있다.
function greeting(a: string, b?: string, c?: string) {
    console.log(a, b, c);
    
}

greeting('hello world');
greeting('hi', 'ts')
