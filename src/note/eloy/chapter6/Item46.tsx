import React from "react";

export default function Item46() {
  return (
    <div>
      <h1>타입 선언과 관련된 세 가지 버전 이해하기</h1>
      <ul>
        <li>
          @types 의존성과 관련된 세 가지 버전이 있음. 라이브러리 버전, @types 버전, typescript 버전
        </li>
        <li>라이브러리를 업데이트 하는 경우, 해당 @types역시 업데이트 해야 함</li>
        <li>
          타입 선언을 라이브러리에 포함하는 것과 DefinitelyTyped에 공개하는 것 사이의 장단점을
          이해해야 함. 타입스크립트로 작성된 라이브러리라면 타입 선언을 자체적으로 포함하고,
          자바스크립트로 작성된 라이브러리라면 타입 선언을 DefinitelyTyped에 공개하는 것이 좋음
        </li>
      </ul>
    </div>
  );
}
