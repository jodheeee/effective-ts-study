import React from "react";

export default function Item59() {
  return (
    <div>
      <h1>타입스크립트 도입 전에 @ts-check와 JSDoc으로 시험해 보기</h1>
      <ul>
        <li>파일 상단에 // @ts-check를 추가하면 자바스크립트에서도 타입 체크를 수행할 수 있음</li>
        <li>전역 선언과 서드파티 라이브러리의 타입 선언을 추가하는 방법을 익혀야 함</li>
        <li>JSDoc 주석을 잘 활용하면 자바스크립트 상태에서도 타입 단언과 타입 추론을 할 수 있음</li>
        <li>
          JSDoc 주석은 중간 단계이기 때문에 너무 공들일 필요는 없음. 최종 목표는 .ts로 된
          타입스크립트 코드임을 명심
        </li>
      </ul>
    </div>
  );
}
