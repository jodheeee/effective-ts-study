const curry = (func: (...args: any[]) => any) => {
    let currentArgs: any[] = []

    const closure = (...args: any[]) => {
        currentArgs = [...currentArgs, ...args]
        if (currentArgs.length >= func.length) {
            return func(...currentArgs)
        }
        return closure
    }

    return closure
}

const sumFunc = (a: number, b:number, c: number) => a + b + c

const curriedSum = curry(sumFunc)
const result = curriedSum(1)(2)