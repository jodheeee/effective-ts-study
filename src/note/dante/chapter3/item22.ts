export const point1 = "타입을 구체적으로 추론하는 것은 타입 좁히기이다.";

type Value = number | null;
const value: Value = 3;
if (value) value; // number -> null의 탈락

type Value2 = string | object;
const value2: Value2 = {};
if (value2 instanceof Number) {
  value2; // value2: Number -> any type에서만 instanceof 원시타입에서는 동작 안 함
}

if ("toString" in Number) Number;
if (Array.isArray(value) ? value.length : value) value;

export const point2 =
  "falsy한 값이나 null = object의 경우에는 좁혀지지 않을 수 있다.";

interface Obj {
  type: "Obj";
  value: string;
}
interface Obj2 {
  type: "Obj2";
  value: number;
}
type Obj3 = Obj | Obj2;
function fun(obj: Obj3) {
  switch (obj.type) {
    case "Obj":
      obj.value; // Obj.value: string
      break;
    case "Obj2":
      obj.value; // Obj.value: number
      break;
    default:
      break;
  }
}

function typeGuard(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (typeGuard(el)) {
    return el.value; // el: HTMLInputElement / (property) HTMLInputElement.value: string
  }
}

type InArrayList = number[];
const array = [1, 2, 3, 4, 5];
const inArrayList: InArrayList = [2, 4].map((item) =>
  array.find((arrayMember) => arrayMember === item)
);
//Type '(number | undefined)[]' is not assignable to type 'InArrayList'.
// Type 'number | undefined' is not assignable to type 'number'.
// Type 'undefined' is not assignable to type 'number'.ts(2322)

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const inArrayList2: InArrayList = [2, 4] // PASS
  .map((item) => array.find((arrayMember) => arrayMember === item))
  .filter(isDefined);
