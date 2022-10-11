import React from "react";

export default function Item33() {
  return (
    <div>
      <h1>string 타입보다 더 구체적인 타입 사용하기</h1>
      <ul>
        <li>
          {`'문자열을 남발하여 선언된'`} 코드를 피해야 함. 모든 문자열을 할당할 수 있는 string 타입
          보다는 더 구체적인 타입을 사용하는 것이 좋음
        </li>
        <li>
          변수의 범위를 보다 정확하게 표현하고 싶다면 string 타입 보다는 문자열 리터럴 타입의
          유니온을 사용하면 됨. 타입 체크를 더 엄격히 할 수 있고, 생산성을 향상시킬 수 있음
        </li>
        <li>
          객체의 속성 이름을 매개변수로 받을 때는 string 보다 <strong>keyof T</strong>를 사용하는
          것이 좋음
        </li>
      </ul>
    </div>
  );
}
