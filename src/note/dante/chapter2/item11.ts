import { PersonOrSpan } from "./item7";
import { point1 } from "../chapter1/item4";

const danteSpan: PersonOrSpan = {
  name: "dante",
  birth: new Date(),
  hobby: "sleep",
}; // error 잉여속성체크
const obj = {
  name: "dante",
  birth: new Date(),
  hobby: "sleep",
};
const danteSpan2: PersonOrSpan = obj; // correct - point1 할당 가능 검사

export const point2 = "할당 가능 검사와 잉여속성체크는 별도의 과정이다.";

interface WeakPerson {
  name?: string;
  birth?: Date;
}
const obj2 = {
  otherProperty: "hi",
};
const dante: WeakPerson = obj2;

export const point3 =
  "모든 속성이 선택적인 타입에 대해서는 별도의 검사를 수행한다.";
export const point4 = "잉여속성체크는 객체 리터럴에서 이루어질 수 있다.";
