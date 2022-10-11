import React from "react";

export default function Item43() {
  return (
    <div>
      <h1>몽키 패치보다는 안전한 타입을 사용하기</h1>
      <ul>
        <li>전역 변수나 DOM에 데이터를 저장하지 말고, 데이터를 분리하여 사용해야 함</li>
        <li>
          내장 타입에 데이터를 저장해야 하는 경우, 안전한 타입 접근법 중 하나(보강, 사용자 정의
          인터페이스로 단언)을 사용해야 함
        </li>
        <li>보강의 모듈 영역 문제를 이해해야 함</li>
      </ul>
    </div>
  );
}
