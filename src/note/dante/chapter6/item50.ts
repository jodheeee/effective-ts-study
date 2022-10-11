export const point1 = '오버로딩보다 조건부 타입을 사용하는 것이 추가적인 작업 없이 정확한 타입을 제시할 수 있다.'

type Func1 = <T extends number | string>(x: T) => T extends string ? string : number;
const func1: Func1 = (x) => {
    return x + x
}

const some = func1(1) // some = number
const some2 = func1('1') // some2 = string