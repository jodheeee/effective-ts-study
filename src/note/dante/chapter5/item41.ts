export const point1 = '암시적 any와 any[]는 진화할 수 있다.'

const arr = [] // any[]
arr.push(1)
arr // number[]

export const point2 = '다만, 타입을 명시적으로 선언하는 것이 더 안전하다.'
