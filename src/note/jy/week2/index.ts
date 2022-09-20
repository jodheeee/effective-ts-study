export const item6 = "편집기를 사용하여 타입 시스템 탐색하기";
// 타입스크립트 컴파일러(tsc)
// 타입스크립트 서버(tsserver) - 언어서비스 제공
// 편집기 사용을 통해 타입 시스템 동작과 타입 추론의 개념을 잡을 수 있다.
// go to definition을 통해 타입 선언 파일을 찾아볼 수 있다.

export const item7 = "타입이 값들의 집합이라고 생각하기";
// 타입을 값의 집합으로 생각하고 벤다이어그램으로 이해하면 쉽다.
// A와 B의 인터섹션은 A의 범위와 B의 범위의 인터섹션이다.
// 객체 타입에서는 A & B인 경우 A와 B의 모든 프로퍼티를 가진다.

export const item8 = "타입 공간과 값 공간의 심벌 구분하기";
// 타입인지 값인지 구분하는 방법이 중요하다.
// 모든 값은 타입을 가지지만, 타입은 값을 가지지 않는다.

export const item9 = "타입 단언보다는 타입 선언을 사용하기";
// 타입 단언을 수행하면 타입스크립트가 추론한 타입이 있더라도 단언된 타입으로 간주된다.
// 타입스크립트는 DOM에 접근할 수 없기 때문에 이러한 경우 타입 단언문을 쓰는 것이 타당하다.
document.querySelector("#myButton")?.addEventListener("click", (e) => {
  const button = e.currentTarget as HTMLButtonElement;
});

export const item10 = "객체 래퍼 타입 피하기";
// string 기본형에 charAt 같은 메서드를 사용할 때, 자바스크립트는 기본형을 String 객체로 래핑하고 메서드를 호출하고, 마지막에 래핑한 객체를 버린다.

export const item11 = "잉여 속성 체크의 한계 인지하기";

export const item12 = "함수 표현식에 타입 적용하기";
// 함수 표현식을 사용하면 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 재사용할 수 있다는 장점이 있다.
// 다른 함수의 시그니처를 참조하려면 typeof fn을 사용하면 된다. (e.g. typeof fetch)

export const item13 = "타입과 인터페이스의 차이점 알기";
// 인터페이스는 타입을 확장할 수 있으며, 타입은 인터페이스를 확장할 수 있다.
type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}
interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number };
// 단, 인터페이스는 유니온 타입같은 복잡한 타입을 확장하지는 못한다.
// 대신 선언병합을 통해 '보강'이 가능하다.

export const item14 = "타입 연산과 제너릭 사용으로 반복 줄이기";
// 타입에 이름을 붙여 재사용하고, extends를 사용하여 반복을 피할 수 있다.
// Pick, Partial, Omit, Exclude, Extract, NonNullable, ReturnType 등의 유틸리티 타입을 사용하면 반복을 피할 수 있다.

export const item15 = "동적 데이터에 인덱스 시그니처 사용하기";
// 런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용하고, 가능하다면 정확한 타입을 사용하는 것이 좋다.

export const item16 =
  "number인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기";
// 배열은 객체이므로 키는 문자열이고, 때문에 number를 사용하기보다 Array, 튜플, ArrayLike를 사용하는 것이 좋다.

export const item17 = "변경 관련된 오류 방지를 위해 readonly 사용하기";
// 함수가 매개변수를 수정하지 않는다면 readonly를 사용하여 변경 관련된 오류를 방지할 수 있다.
// readonly는 얕게 동작한다. 객체의 속성이 객체일 경우, 속성의 속성은 readonly가 적용되지 않는다.

export const item18 = "매핑된 타입을 사용하여 값을 동기화하기";
// 매핑된 타입은 한 객체와 다른 객체와 정확히 같은 속성을 가지게 할 때 이상적이고, 인터페이스에 새로운 속성을 추가할 때, 선택을 강제하도록 매핑된 타입을 고려해야 한다.
