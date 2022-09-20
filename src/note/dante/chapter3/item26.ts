const point1 = "as const는 Deep하게 readonly를 적용한다.";
const array = [1, 2] as const; // readonly [1, 2]
const array2 = [1, 2]; // number[]
