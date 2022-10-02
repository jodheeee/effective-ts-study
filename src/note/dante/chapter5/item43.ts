interface Inf {
    a: string;
    b: string;
    c: number;
}

declare interface Inf { // 전역변수의 보강
    d: string;
}

const obj: Inf = {
    a: '1',
    b: '2',
    c: 3,
    d: '1'
}

interface Inf2 extends Document { // extends로 보강
    e: number;
}

(document as Inf2).e = '5' // Type 'string' is not assignable to type 'number'.