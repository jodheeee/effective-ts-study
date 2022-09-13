# Item22 - 타입 좁히기
- **조건문**이나, Array.**isArray**같은 내장함수 혹은 **태그된 유니온** 등등 여러 방법으로 **타입체커의 타입 추론의 범위를 좁힐 수 있다.**
- 특정함수의 반환타입으로 **is** 키워드를 사용하여 타입스크립트의 타입 추론을 좁혀줄 수 있다.
  이것을 **사용자 정의 타입 가드**라 한다.

```tsx
// 사용자 정의 타입 가드

function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el;
}
```