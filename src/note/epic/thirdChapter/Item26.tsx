import React from 'react';

function Item26() {
  return (
    <div>
      <h1>Item26: 타입 추론에 문맥이 어떻게 사용되는지 이해하기</h1>
      <p>문맥과 값 분리</p>
      <p>Tuple 사용시 주의 점</p>
      <div>
        <ul>
          <li>상수 문맥 제공: as const (deeply 상수)</li>
          <li>readonly 구문 추가</li>
        </ul>
      </div>
      <p>obj 주의</p>
      <div>
        <ul>
          <li>타입 선언 추가</li>
          <li>as const 사용</li>
        </ul>
      </div>
      <p>callBack사용시</p>
      <div>
        <ul>
          <li>타입 구문 추가</li>
        </ul>
      </div>
    </div>
  );
}

export default Item26;
