import React from "react";

export default function Item51() {
  return (
    <div>
      <h1>의존성 분리를 위해 미러 타입 사용하기</h1>
      <ul>
        <li>필수가 아닌 의존성을 분리할 때는 구조적 타이핑을 사용하면 됨</li>
        <li>
          공개한 라이브러리를 사용하는 자바스크립트 사용자가 @types 의존성을 가지지 않게 해야 함.
          그리고 웹 개발자가 NodeJS 관련된 의존성을 가지지 않게 해야 함
        </li>
      </ul>
    </div>
  );
}
