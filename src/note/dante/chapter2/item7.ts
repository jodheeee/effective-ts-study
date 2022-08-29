export interface Person {
  name: string;
}

export interface Lifespan {
  birth: Date;
  death?: Date;
}

export type PersonSpan = Person & Lifespan;
export type PersonOrSpan = Person | Lifespan;

const dante: PersonSpan = { name: "dante", birth: new Date(), hobby: "sleep" };
const danteSpan: PersonOrSpan = {
  name: "dante",
  birth: new Date(),
  hobby: "sleep",
};
// Type '{ name: string; birth: Date; hobby: string; }' is not assignable to type 'PersonOrSpan'.
//   Object literal may only specify known properties, and 'hobby' does not exist in type 'PersonOrSpan'.ts(2322)

export const q1 = "PersonOrSpan은 never이어야 하는데, 왜 PersonSpan과 같은가?";

export const point1 = "타입은 값의 집합이다.";
export const point2 = `${point1}이기 때문에, 타입의 연산, 확장은 집합 연산과 유사하다.`;
