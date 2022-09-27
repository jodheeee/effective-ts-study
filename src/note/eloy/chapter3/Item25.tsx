import React from "react";

export default function Item25() {
  return (
    <div>
      <h1>비동기 코드에는 콜백 대신 async 사용하기</h1>
      <ul>
        <li>콜백보다는 프로미스를 사용하는 게 코드 작성과 타입 추론 면에서 유리함</li>
        <li>
          가능하면 프로미스를 생성하기보다는 async와 await를 사용하는 것이 좋음. 간결하고 직관적인
          코드를 작성할 수 있고 모든 종류의 오류를 제거할 수 있음
        </li>
        <li>어떤 함수가 프로미스를 반환한다면 async를 선언하는 것이 좋음</li>
      </ul>
    </div>
  );
}
