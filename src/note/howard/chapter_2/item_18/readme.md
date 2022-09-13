# Item18 - 매핑된 타입을 사용하여 값을 동기화하기

- 매핑된 타입을 이용하여 **새로운 속성이 추가될 때, 선택을 강제**할 수 있다.

```typescript
interface Person {
    name: string;
    age: number;
}

const REQUIRE_UPDATE: { [k in keyof Person]: boolean } = {
    name: true,
    age: true,
};

interface Person {
    address: string;
}

// 선언 병합으로 Person에 addresss가 추가된다.
// 이 때, REQUIRE_UPDATE에 address가 존재하지 않기때문에 에러가 발생한다.
```