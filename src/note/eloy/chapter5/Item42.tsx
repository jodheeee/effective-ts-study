import React from "react";

export default function Item42() {
  return (
    <div>
      <h1>모르는 타입의 값에는 any 대신 unknown을 사용하기</h1>
      <ul>
        <li>
          unknown은 any 대신 사용할 수 있는 안전한 타입. 어떠한 값이 있지만 그 타입을 알지 못하는
          경우 unknown 사용
        </li>
        <li>사용자가 타입 단언문이나 타입 체크를 사용하도록 강제하려면 unknown을 사용</li>
        <li>{}, object, unknown의 차이점을 이해해야 함</li>
      </ul>
    </div>
  );
}
