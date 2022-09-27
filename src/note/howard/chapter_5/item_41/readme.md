# item41 - any의 진화를 이해하기
- any와 any[] 타입은 코드의 정제를 거치는 과정에서 **진화(evolve)** 한다.

```typescript
let x = null // any
x = 1 // number

let y = [] // any[]
y.push(1) // number[]
y.push('a') // (string|number)[]
```