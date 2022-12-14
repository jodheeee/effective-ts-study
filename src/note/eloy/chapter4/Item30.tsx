import React from "react";

export default function Item30() {
  return (
    <div>
      <h1>문서에 타입 정보를 쓰지 않기</h1>
      <ul>
        <li>
          주석과 변수명에 타입 정보를 적는 것은 피해야 함. 타입 선언이 중복 되는 것으로 끝나면
          대항이지만 최악의 경우는 타입 정보에 모순이 발생하게 됨
        </li>
        <li>타입이 명확하지 않은 경우는 변수명에 단위 정보를 포함하는 것을 고려하는 것이 좋음</li>
      </ul>
    </div>
  );
}
