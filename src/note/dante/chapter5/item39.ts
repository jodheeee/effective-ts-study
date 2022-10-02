export const point = 'any는 가능한 구체적으로 사용하자.'

type a = any[] // array
type b = any[][] // array in array
type c = {[key: string]: any} // object
type d = object

const function1 = (o: c, o2: d) => {
    for (const key in o) {
        o[key]
    }

    for (const key in o2) {
        o2[key] 
        // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
        // No index signature with a parameter of type 'string' was found on type '{}'.ts(7053)
    }
}