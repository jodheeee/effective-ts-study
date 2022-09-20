import React from "react";

function Item17() {
  return (
    <div>
      <h1>Item17: readonly</h1>
      <div>
        <ul>
          <li>array 변경 X</li>
          <li>param 변경 X</li>
          <li>
            function 에서 readonly 사용 &rarr; 호출하는 다른 function 도
            readonly
          </li>
          <li>local variable 관련 모든 종류 변경 error 방지</li>
          <li>index signature에 readonly 사용 &rarr; obj property 변경 방지</li>
          <li>readonly: active shallowly</li>
        </ul>
      </div>
    </div>
  );
}

export default Item17;
