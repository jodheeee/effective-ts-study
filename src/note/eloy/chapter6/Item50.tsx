import React from "react";

export default function Item50() {
  return (
    <div>
      <h1>오버로딩 타입보다는 조건부 타입을 사용하기</h1>
      <ul>
        <li>
          오버로딩 타입보다 조건부 타입을 사용하는 것이 좋음 조건부 타입은 추가적인 오버로딩 없이
          유니온 타입을 지원할 수 있음
        </li>
      </ul>
    </div>
  );
}
