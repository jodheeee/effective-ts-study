## item 38. any 타입은 가능한 한 좁은 범위에서만 사용하기

any의 사용 범위는 최소화하여야 하며, 함수의 반환 타입에 any를 사용하는 것은 피해야 한다.
예기치 못한 확장성을 피하기 위해 any 대신 @ts-ignore를 사용하여 강제 타입 오류를 제거하는 방법이 있다.

## item 39. any를 구체적으로 변형해서 사용하기

매개변수가 객체이긴 하지만 값을 알 수 없다면

```
function hasTwelveLetterKey(o: {[key: string]: any}) {
  return Object.keys(o).some(k => k.length === 12);

```

여러 개의 매개변수가 있을 때의 타입

```
const numArgsBad = (...args: any) => args.length;
const numArgsGood = (...args: any[]) => args.length;
```

## item 40. 함수 안으로 타입 단언문 감추기

타입 선언문은 일반적으로 타입을 위험하게 만들어 지양하는 것이 좋지만, 상황에 따라 현실적인 해결책이 될 수 있다.
이러한 경우 제대로 타입이 정의된 함수 안으로 감추는 것이 좋다.

## item 41. any의 진화를 이해하기

일반적인 타입들은 선언 이후에 정제될 수는 있지만(null인지 체크 등), 새로운 값이 추가되도록 확장할 수는 없다.
any는 예외가 존재하며 암시적 any와 any[]타입은 진화할 수 있다.
물론 any를 진화시키는 방식보다 명시적 타입 구문을 사용하는 것이 더욱 안전하다.

## item 42. 모르는 타입의 값에는 any 대신 unknown을 사용하기

unknown은 any와 비슷하지만, any와 달리 사용자가 타입 단언이나 타입 체크를 사용하도록 강제할 수 있다.
{}타입은 null과 undefined를 제외한 모든 값을 포함한다.
object 타입은 모든 비기본형(non-primitive) 타입으로 이루어진다. 여기에 true 또는 12 또는 'foo'가 포함되지 않지만 객체와 배열은 포함된다.
object 또는 {}는 unknown보다 범위가 약간 좁다.

## item 43. 몽키 패치보다는 안전한 타입을 사용하기

window 전역 변수나 DOM에 데이터를 저장하는 것을 지양해야 한다.
내장 타입에 데이터를 저장해야 하는 경우, 보강(augmentation)이나 사용자 정의 인터페이스 단언을 사용해야 한다.

## item 44. 타입 커버리지를 추적하여 타입 안전성 유지하기

noImplicitAny를 설정해도 명시적 any, third-party 라이브러리 타입 선언(@type)을 통해 any가 발생할 수 있다.
npx type-coverage를 통해 백분율로 any 타입의 사용을 확인할 수 있다.
