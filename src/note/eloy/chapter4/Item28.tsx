import React from "react";

export default function Item28() {
  return (
    <div>
      <h1>유효한 상태만 표현하는 타입을 지향하기</h1>
      <ul>
        <li>
          유효한 상태와 무효한 상태를 둘 다 표현하는 타입은 혼란을 초래하기 쉽고 오류를 유발하게 함
        </li>
        <li>
          유효한 상태만 표현하는 타입을 지향해야 함. 코드가 길어지거나 표현하기 어렵지만 결국은
          시간을 절약하고 고통을 줄일 수 있음
        </li>
      </ul>
    </div>
  );
}
