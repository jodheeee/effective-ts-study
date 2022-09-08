export const point1 = "타입스크립트는 타입 넓히기를 한다.";
export const point2 =
  "타입 넓히기란 작은 단서를 통해 여러 추론들을 생성하는 것이다.";
export const point3 =
  "let은 값이 변동되므로 const를 사용하는 것이 더 좁은 넓히기가 가능해진다.";

const v = { x: 1 }; // { x: number }
const v2 = { x: 1 } as const; // {readonly x : 1}
