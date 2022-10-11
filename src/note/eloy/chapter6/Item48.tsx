import React from "react";

export default function Item48() {
  return (
    <div>
      <h1>API 주석에 TSDoc 사용하기</h1>
      <ul>
        <li>
          익스포트된 함수, 클래스, 타입에 주석을 달 때는 JSDoc/TSDoc 형태를 사용. JSDoc/TSDoc 형태의
          주석을 달면 편집기가 주석 정보를 표시해 줌
        </li>
        <li>@param, @returns 구문과 문서 서식을 위해 마크다운을 사용할 수 있음</li>
        <li>주석에 타입 정보를 포함하면 안됨</li>
      </ul>
    </div>
  );
}
