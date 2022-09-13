# item4 - 구조적 타이핑에 익숙해지기
- 자바스크립트는 **덕 타이핑** 기반 이다.

> **덕 타이핑(duck typing)**  
<span style="color:gray">만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.</span>  
라는 인용구에서 유래.
<br/>  
어떤 객체의 속성과 함수, 혹은 어떤 함수의 파라미터가 **동일하게 구현** 됐다면 **같은 타입으로 취급**하는 속성
>

- 타입 스크립트는 이를 모델링 하기 위해 **구조적 타이핑**을 사용한다.
- **클래스**도 구조적 타이핑 규직을 따른다.

```typescript
// 구조적 타이핑

interface Person {
    name: string;
    age: number;
}

interface Animal {
    name: string;
    age: number;
}

// Person타입과 Animal타입은 구조적으로 같다.

function getPerson(person: Person) {
    return person;
}

const cat: Animal = {
    name: "밀크",
    age: 8,
};

getPerson(cat);  // 따라서 Person을 파라미터로 받는 함수에 Animal을 넣어도 에러가 나지 않는다.
// 타입스크립트는 구조적으로 같은 타입이면, 타입이 달라도 같다고 판단한다.
```

```typescript
// 클래스의 구조적 타이핑

class Person {
    constructor(public name: string, public age: number) {
    }
}

const person: Person = {name: "홍길동", age: 18};

// new 연산자를 사용하지 않고 객체를 만들어도, Person class가 가진 name,과 age 속성을
// 구현했다면, 이를 Person의 인스턴스로 본다.
```