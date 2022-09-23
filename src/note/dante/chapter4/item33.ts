export const point1 = '타입 선언에 string을 줄이자. string은 너무 넓다.'
export const point2 = '<T, K extends keyof T>와 같이 객체 속성이름을 파라미터로 받자.'

interface Some {
    first: string;
    second: boolean;
    third: number;
}

const someFunc = <T>(a: T, b: keyof T): T[keyof T] => a[b]

const obj1: Some = {first: '1', second: false, third: 4};
const att1 = someFunc<Some>(obj1, 'second') // const att1: string | number | boolean

const someFunc2 = <T, K extends keyof T>(a: T, b: K): T[K] => a[b]

const att2 = someFunc2<Some, 'second'>(obj1, 'second') // const att2: boolean

