import React from "react";

function Item09() {
  return (
    <div>
      <p>Item09: 단언(as) &lt; 선언(:) </p>
      <p>why?</p>
      <div>
        <ul>
          <li>
            타입 단언: 강제 타입 지정 =&lt; 타입 체커에게 오류 무시하라고 함
          </li>
          <li>
            safety를 위해: arrow fn 타입 선언: 추론된(inference) 타입
            모호할(vague) 때 있음
          </li>
          <li>
            타입 단언문(assert): 임의의 타입 간 변환할 수 없음. BUT,부분 집합인
            경우 가능
          </li>
          <li>
            (* TS 보다 타입 정보를 더 잘알고 있는 상황: 타입 단언문 + null 아님
            단언문 사용)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Item09;
