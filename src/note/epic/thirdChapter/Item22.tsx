import React from 'react';

function Item22() {
  return (
    <div>
      <h1>Item22: 타입 좁히기(Narrowing)</h1>
      <p>상수(constant) 사용, variable init할 때 type 명시X: 할당 가능한 values 집합 유추</p>
      <p>타입 좁히는 방법</p>
      <div>
        <ul>
          <li>예외 / 함수 반환</li>
          <li>instanceof</li>
          <li>속성 체크</li>
          <li>Array.isArray같은 내장 함수</li>
          <li>add Tags: Tagged Union | discriminated Union : 사용자 정의 가드</li>
        </ul>
      </div>
    </div>
  );
}

export default Item22;
