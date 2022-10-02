export const obj = {
    a: 1,
    b: 2,
    c: {
        c: 1
    } as any
} // as any

const function1 = (): string => {
    return '4'
}

const function2 = (x: number) => {
    return x
}

const function3 = () => {
    const x = function1()
    const y = function2(x) // Argument of type 'string' is not assignable to parameter of type 'number'.
}

const function4 = () => {
    const x = function1() // as any
    const y = function2(x as any) 
}

export const point = 'any는 항상 좁게 설정되도록 사용하자.'