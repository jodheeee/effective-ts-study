import React from "react";

export default function Item60() {
  return (
    <div>
      <h1>allowJs로 타입스크립트와 자바스크립트 같이 사용하기</h1>
      <ul>
        <li>
          점진적 마이그레이션을 위해 자바스크립트와 타입스크립트를 동시에 사용할 수 있게 allowJs
          컴파일러 옵션을 사용
        </li>
        <li>
          대규모 마이그레이션 작업을 시작하기 전에, 테스트와 빌드 체인에 타입스크립트를 적용해야 함
        </li>
      </ul>
    </div>
  );
}
