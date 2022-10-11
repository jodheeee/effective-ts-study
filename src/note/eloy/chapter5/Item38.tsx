import React from "react";

export default function Item38() {
  return (
    <div>
      <h1>any 타입은 가능한 한 좁은 범위에서만 사용하기</h1>
      <ul>
        <li>
          의도치 않은 타입 안정성의 손실을 피하기 위해서 any의 사용 범위를 최소한으로 좁혀야 함
        </li>
        <li>
          함수의 반환 타입이 any인 경우 타입 안정성이 나빠집니다. 따라서 any 타입을 반환하면 절대
          안됨
        </li>
        <li>강제로 타입 오류를 제거하려면 any 대신 @ts-ignore 사용하는 것이 좋음</li>
      </ul>
    </div>
  );
}
