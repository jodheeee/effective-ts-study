export const point1 =
  "컴파일은 타입체크와 무관하다. 심지어 타입에러가 있어도 컴파일은 가능하다.";
export const point2 = "모든 타입은 컴파일된 코드에서 삭제된다.";
export const point3 = `${point2}이기 때문에 컴파일된 코드의 동작과 성능에 영향을 미치지 않는다.`;
export const point4 = `${point2}이기 때문에 런타임에서 타입을 사용할 수 없다.`;
export const point5 = "클래스는 타입과 런타임 값 모두를 제공할 수 있다.";
export const q5 = "그렇다면 왜 클래스 형태로 제공하지 않는지?";
export const qq5 =
  "런타임에서 값이 제공되는 것은 컴파일된 코드에 남는 것이므로 동작과 성능에 영향을 미칠 수 있기 때문에?";
export const qqq5 = "태그된 유니온 / 속성 체크는 정확히 무엇인가?";
export const answerQqq5 =
  "https://ahnheejong.gitbook.io/ts-for-jsdev/06-type-system-deepdive/disjoint-union-type";

interface coke {
  kind: "coke"; // 태그
  sugar: number;
}

interface zeroCoke {
  kind: "zeroCoke"; // 태그
  sugar?: number;
}

type someCoke = coke | zeroCoke; // 태그된 유니온 타입

const checkIsZeroCoke = (someCoke: someCoke): string => {
  switch (someCoke.kind) {
    case "coke":
      return "dont drink";
    case "zeroCoke":
      return "drink";
    // default 구문이 필요 없다.
    // someCoke 타입에 따르면 위 두가지 케이스를 벗어날 수 없기 때문에.
  }
};

const coke1: someCoke = {
  kind: "coke",
  sugar: 150,
};

const coke2: someCoke = {
  kind: "zeroCoke",
};

checkIsZeroCoke(coke1); // type: coke
checkIsZeroCoke(coke2); // type: zeroCoke
