const point1: string =
  "string 타입 명시는 필요 없다. 타입 추론을 적극 활용하고 코드를 줄이자.";

interface Point {
  point: string;
}
const point2: Point = {
  piont:
    "객체 리터럴 정의에는 타입을 명시하자. 오타를 잡아주고 잉여 타입 체크를 실시한다.",
  rest: "error -> Point에 정의되지 않음.",
};

const point3 = "함수 반환 타입을 명시하자.";
const point33 = "오류의 위치를 제대로 표현한다.";
const point333 = "함수에 대해 명확하게 표기해 리팩토링에 도움이 된다.";
const point3333 = "명명된 타입을 에디터에서 안내하기 때문에 더 직관적이다.";

function point3333Func(a: Point) {
  return { point: a.point };
}

point3333Func(point2); // function point3333Func(a: Point): { point: string; }

function point3333Func2(a: Point): Point {
  return { point: a.point };
}
point3333Func2(point2); // function point3333Func2(a: Point): Point
