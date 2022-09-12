interface Array<T> {
  [key: number]: T;
}

const keys: Array<number> = [1, 2, 3];
const value = keys["1"]; // 얘는 왜 에러가 안 나지?
const value2 = keys[1];

export const point1 = "어차피 key 값은 string이다.";

function getValue<T>(list: Array<T>, i: string) {
  return list[i]; // error
}

getValue<number>(keys, "1");
