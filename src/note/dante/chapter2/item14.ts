interface Options {
  width: number;
  height: number;
}

type OptionsUpdate = Partial<Options>;

export const point1 =
  "타입 선언을 먼저 하고 값을 할당하는 것이 타입이 명확해지고, 타입 변동을 방지할 수 있다.";

interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];
type DancingDuo2<T> = [T, T];
const couple1: DancingDuo<{ first: string; middle: string }> = [
  { first: "Sonny" },
]; // -> Name을 충족하지 않기 때문에 에러
const couple2: DancingDuo2<{ first: string; middle: string }> = [
  { first: "Sonny" },
]; // -> 2가지만 넘어가면 [T, T]가 성립되므로 정상

export const point2 = "타입을 반복하지 않도록 노력하자.";
