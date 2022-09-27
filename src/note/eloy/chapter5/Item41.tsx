import React from "react";

export default function Item41() {
  return (
    <div>
      <h1>any의 진화를 이해하기</h1>
      <ul>
        <li>
          일반적인 타입들은 정제되기만 하는 반면, 암시적 any와 any[] 타입은 진화할 수 있음. 이러한
          동작이 발생하는 코드를 인지하고 이해할 수 있어야 함
        </li>
        <li>
          any를 진화시키는 방식보다 명시적 타입 구문을 사용하는 것이 안전한 타입을 유지하는 방법
        </li>
      </ul>
    </div>
  );
}
