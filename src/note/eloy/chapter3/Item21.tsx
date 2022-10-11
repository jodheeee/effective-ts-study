import React from "react";

export default function Item21() {
  return (
    <div>
      <h1>타입 넓히기</h1>
      <ul>
        <li>타입스크립트 넓히기를 통해 상수의 타입을 추론하는 법을 이해해야 함</li>
        <li>동작에 영향을 줄 수 있는 방법인 const, 타입 구문, 문맥, as const에 익숙해져야 함</li>
      </ul>
    </div>
  );
}

const v1 = {
  x: 1,
  y: 2,
};
const v2 = {
  x: 1 as const,
  y: 2,
};
const v3 = {
  x: 1,
  y: 2,
} as const;
