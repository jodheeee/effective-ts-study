import React from "react";

export default function Item56() {
  return (
    <div>
      <h1>정보를 감추는 목적으로 private 사용하지 않기</h1>
      <ul>
        <li>
          public, protected, private 접근 제어자는 타입 시스템에서만 강제됨. 런타임에는 소용이
          없으며 단언문을 우회할 수 있음. 접근 제어자로 데이터를 감추려고 해서는 안됨
        </li>
        <li>확신히 데이터를 감추고 싶다면 클로저를 사용해야 함</li>
      </ul>
    </div>
  );
}
