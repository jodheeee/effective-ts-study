import { point2 } from "../chapter1/item4";
export {};

interface SomeObj {
  value: string;
}

const keyObj: SomeObj = {
  value: "keykeykey",
};

const valueObj = {
  keykeykey: "valuevaluevalue",
};

const { value } = keyObj;

const result1 = valueObj[value]; // error

interface KeyObj {
  value: keyof typeof valueObj2;
}

const keyObj2: KeyObj = {
  value: "keykeykey",
};

const valueObj2 = {
  keykeykey: "valuevaluevalue",
};

const { value: value2 } = keyObj2;

const result2 = valueObj[value2];

`${point2}의 경우에 key값으로 쓰는 법`;
// ------------------------------------------

interface IState {
  name: string;
  capital: string;
}

const wyoming: IState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500_000, // error
};

interface IState {
  population: number; // 작성 후 정상
}

// ---> 선언 병합
const point1 = "유니온 타입은 있지만 유니온 인터페이스는 없다.";
const point2 = "복잡한 타입의 확장은 타입과 &을 써야한다.";
const point3 = "인터페이스는 선언 병합이 가능하다.";
const point4 = "프로젝트 내부에서 선언 병합이 발생하는 것은 잘못된 설계다.";
const point5 =
  "선언 병합으로 확장에 유리한 인터페이스를 주로 사용하는 것이 좋다.";
const point6 =
  "그러나 무엇 보다도 프로젝트 내부에서 선택한 방식을 일관되게 유지해야한다.";
