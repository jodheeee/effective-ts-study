import React from "react";

export default function Item11() {
  return (
    <div>
      <h1>잉여 속성 체크의 한계 인지하기</h1>
      <ul>
        <li>객체 리터럴을 변수에 할당하거나 함수에 매개변수로 전달할 때 잉여 속성 체크가 수행됨</li>
        <li>
          잉여 속성 체크는 오류를 찾는 효과적인 방법이지만 타입스크립트 타입 체커가 수행하는
          일반적인 구조적 할당 가능성 체크와 역할이 다름. 할당의 개념을 정확히 알아야 잉여 속성
          체크와 일반적인 구조적 할당 가능성 체크를 구분할 수 있음
        </li>
        <li>
          잉여 속성 체크에는 한계가 있음. 임시 변수를 도입하면 잉여 속성 체크를 건너 뛸 수 있다는
          점을 기억해야 함
        </li>
      </ul>
    </div>
  );
}

interface TestInter {
  a: string;
  b: string;
  darkMode?: boolean;
}
const obj: TestInter = {
  a: "a",
  b: "b",
  // darkmode: "ccc", // error
};

const obj2 = {
  a: "a",
  b: "b",
  darkmode: "adsf",
};

const obj3: TestInter = obj2;

// 잉여 속성 체크를 원하지 않을 경우 인덱스 시그니쳐 사용
interface TestInter2 {
  a: string;
  b: string;
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const obj4: TestInter2 = {
  a: "a",
  b: "b",
  darkmode: "adsf",
};
