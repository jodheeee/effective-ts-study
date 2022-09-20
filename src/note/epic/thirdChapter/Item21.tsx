import React from 'react';

function Item21() {
  return (
    <div>
      <h1>Item21: 타입 넓히기 (Extend Types)</h1>
      <p>상수(constant) 사용, variable init할 때 type 명시X: 할당 가능한 values 집합 유추</p>
      <p>넓히기 과정을 제어할 수 있는 방법</p>
      <div>
        <ul>
          <li>const</li>
        </ul>
      </div>
      <p>TS 기본 동작 재정의</p>
      <div>
        <ul>
          <li>명시적 타입 구문 제공</li>
          <li>타입체커에 추가적 문맥 제공</li>
          <li>const 사용</li>
        </ul>
      </div>
    </div>
  );
}

export default Item21;
