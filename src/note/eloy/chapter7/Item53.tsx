import React from "react";

export default function Item53() {
  return (
    <div>
      <h1>타입스크립트 기능보다는 ECMAScript 기능을 사용하기</h1>
      <ul>
        <li>
          일반적으로 타입스크립트 코드에서 모든 타입 정보를 제거하면 자바스크립트가 되지만, 열거형,
          매개변수 속성, 트리플 슬래시 임포트, 데코레이터는 타입 정보를 제거한다고 자바스크립트가
          되지는 않음
        </li>
        <li>
          타입스크립트의 역할을 명확하게 하려면, 열거형, 매개변수 속성, 트리플 슬래시 임포트,
          데코레이터는 사용하지 않는 것이 좋음
        </li>
      </ul>
    </div>
  );
}
