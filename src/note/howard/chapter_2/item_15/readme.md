# Item15 - 동적 데이터에 인덱스 시그니처 사용하기
- **런타임 시 객체의 속성을 알 수 없는 경우** **인덱스 시그니처**를 이용할 수 있다.
- 하지만, 속성의 타입이 명확하거나, 한정적인 경우에는 **가급적 interface, Record, 매핑된 타입 등 명확한 타입을 사용**하는 것이 좋다.
- 인덱스 시그니처를 사용할 시, 안전한 접근을 위해 **값 타입에 undefined 추가**하는 것을 고려해야한다.
  undefined체크를 로직에 추가해야 하는 번거로움이 생길 수 있다.