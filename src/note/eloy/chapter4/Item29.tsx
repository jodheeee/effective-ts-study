import React from "react";

export default function Item29() {
  return (
    <div>
      <h1>사용할 때는 너그럽게, 생성할 때는 엄격하게</h1>
      <ul>
        <li>
          보통 매개변수 타입은 반환 타입에 비해 범위가 넓은 경향이 있음. 선택적 속성과 유니온 타입은
          반환 타이봅다 매개변수 타입에 더 일반적
        </li>
        <li>
          매개변수와 반환 타입의 재사용을 위해서 기본 형태(반환 타입)와 느슨한 형태(매개변수 타입)를
          도입하는 것이 좋음
        </li>
      </ul>
    </div>
  );
}
