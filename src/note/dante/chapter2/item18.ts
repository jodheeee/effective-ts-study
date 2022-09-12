interface SomeData {
  name: string;
  age: number;
  location: string;
  department: string;
}

const REQUIRES_UPDATE: { [k in keyof SomeData]: boolean } = {
  // error -> department missing
  name: true,
  age: true,
  location: true,
  // account: false, // error - SomeData에 없음
};

const point1 = "매핑된 타입을 사용해 관련 값과 타입을 동기화 한다.";
const point2 =
  "인터페이스에 새로운 속성을 추가할 때, 선택을 강제하도록 매핑된 타입을 고려한다.";
