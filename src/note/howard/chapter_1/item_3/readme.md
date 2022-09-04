# Item3 - 코드 생성과 타입이 관계없음을 이해하기
- 타입스크립트 컴파일러가 하는 일은
    - **타입 오류 체크**
    - 타입스크립트를 구버전 자바스크립트로 **트랜스파일**

  2가지 이며, 각 기능은 **독립적**으로 설정 가능하다.

- 따라서 **타입 에러가 있어도 컴파일이 가능**하다.
- 코드 생성은 **타입과 무관**하며, 타입스크립트의 type, interface, type assertion등의 **타입관련 문법들은 런타임시 모두 제거**된다.
- 따라서, **런타임 환경에서 타입스크립트의 타입은 사용 불가**하며, 이를 보완하기 위한 **런타임 환경의 기법**들이 존재한다.
- 일반적으로 **Tagged Union**과 **속성 체크 방법**을 사용하며, **Class**를 이용하여 타입환경과 런타임 환경을 모두 제공하는 방법도 가능하다.

```typescript
// Tagged Union Example

interface Square {
    kind: 'square';
    width: number;
}

interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number;
}

type Shape = Square | Rectangle;

function caculateArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}
```

```typescript
// 속성 체크 방법

interface Square {
    width: number;
}

interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}
```

```typescript
// 클래스

class Square {
    constructor(public width: number) {
    }
}

class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}
```