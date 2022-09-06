export const point1 = "함수 표현식으로 함수 전체에 타입을 제공한다.";

function fun1(num1: number, num2: number): string {
  return String(num1 + num2);
}

type numberFunc = (n1: number, n2: number) => string;
const fun2: numberFunc = (n1, n2) => String(n1 + n2);

export const point2 = "다른 함수의 시그니처 사용은 typeof fn을 사용한다.";

const fun3: typeof fetch = async () => {
  const res = await fetch("/url");
  if (res.ok) {
    return res;
  }
  throw new Error(String(res.status));
};
