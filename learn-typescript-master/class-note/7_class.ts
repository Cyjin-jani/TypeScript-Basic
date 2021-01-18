class Person {
    //ts에서는 멤버변수에 미리 사전에 타입 정의를 해야함.
    //변수의 접근 범위를 제한할 수 있다.
    public name: string;
    private age: number;
    readonly log: string; //값을 참조만 가능하고, 바꾸는 것은 불가능.

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}