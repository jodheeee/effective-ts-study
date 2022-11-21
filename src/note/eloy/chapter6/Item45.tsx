import React from "react";

export default function Item45() {
  return (
    <div>
      <h1>devDependencies에 typescriptdhk @types 추가하기</h1>
      <ul>
        <li>
          타입스크립트를 시스템 레벨로 설치하면 안됨. 타입스크립트를 프로젝트의 devDependencies에
          포함시키고 팀원 모두가 동일한 버전을 사용해야 함
        </li>
        <li>
          @types의존성은 devDependencies에 포함시켜야 함. 런타임에 @types가 필요한 경우라면 별도의
          작업이 필요할 수 있음
        </li>
      </ul>
    </div>
  );
}
