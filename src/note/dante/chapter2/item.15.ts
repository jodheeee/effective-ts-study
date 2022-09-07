export const indexSignature =
  "{[key:T]: U} 형식으로 key-value 키/타입 값을 런타임에 할당한다.";

interface IndexST {
  [props: string]: string; // 런타임에서 string의 key값이 들어가고 그 값은 string임을 명시
}

export const point1 =
  "인덱스 시그니처는 너무 광범위하다. 최대한 명확한 타입을 선언하는 것이 좋다.";
