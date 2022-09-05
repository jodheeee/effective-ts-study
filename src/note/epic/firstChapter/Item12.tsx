import React from "react";

function Item12() {
  return (
    <div>
      <p>Item12: 함수 표현식에 타입 적용하기</p>
      <p>i.e. const .......</p>
      <div>
        <p>TS: 함수 표현식 장점</p>
        <ul>
          <li>재사용성: 불필요한 코드 줄여줌</li>
          <li>
            매개 변수(param) || return value에 type 명시 &lt; 함수 표현식 전체에
            표현: 간결. 안전
          </li>
          <li>다른 함수의 시그니처 참조: typeof fn</li>
        </ul>
      </div>
    </div>
  );
}

export default Item12;
