# Item11 - 잉여 속성 체크의 한계 인지하기

- 객체 리터럴을 변수에 할당하거나, 함수의 매개변수로 전달할 시 **잉여 속성 체크**가 수행된다.
- 타입스크립트의 구조적 할당 가능성 체크와는 **역할이 다른 기능**이다.
- 잉여 속성 체크는 임시 변수로 건너뛸 수 있는 등, **완벽한 방어가 될 수는 없다**는 점을 인지해야한다.

```typescript
interface Person {
    name: string
}

const p1: Person = {
    name: '하워드',
    age: 19 // 잉여 속성이므로 에러 발생!
}

const howard = {
    name: '하워드',
    age: 19
}

const p2: Person = howard; // 객체 릴터럴이 아니므로 가능!
```