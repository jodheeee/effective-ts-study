import React from "react";

export default function Item17() {
  return (
    <div>
      <h1>변경 관련된 오류 방지를 위해 readonly 사용하기</h1>
      <ul>
        <li>
          만약 함수가 매개변수를 수정하지 않는다면 readonly로 선언하는 것이 좋음. readonly
          매개변수는 인터페이스를 명확하게 하고 매개변수가 변경되는 것을 방지
        </li>
        <li>
          readonly를 사용하면 변경하면서 발생하는 오류를 방지할 수 있고 변경이 발생하는 코드를 쉽게
          찾을 수 있음
        </li>
        <li>const와 readonly의 차이를 이해해야 함</li>
        <li>readonly는 얕게 동작한다는 것을 명심해야 함</li>
      </ul>
    </div>
  );
}

// readonly 선언된 타입은 readonly가 선언되지 않은 타입에 할당이 불가 (readonly 붙지 않은 타입은 readonly 붙은 타입의 서브 타입)
// 깊은 readonly 타입을 사용하고 싶을 경우 ts-essentials 라이브러리의 DeepReadonly를 사용하면 됨
