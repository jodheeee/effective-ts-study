import React from "react";

export default function Item31() {
  return (
    <div>
      <h1>타입 주변에 null 값 배치하기</h1>
      <ul>
        <li>한 값의 null 여부가 다른 값의 null 여부에 암시적으로 관련되도록 설계하면 안됨</li>
        <li>
          API 작성 시에는 반환 타입을 큰 객체로 만들고 반환 전체가 null이거나 null이 아니게 만들어야
          함. 사람과 타입 체커 모두에게 명료한 코드가 될 것임
        </li>
        <li>
          클래스를 만들 때는 필요한 모든 값이 준비되었을 때 생성하여 Null이 존재하지 않도록 하는
          것이 좋음
        </li>
        <li>
          strictNullCheck 설정 시 코드에 많은 오류가 표시되겠지만 null 값과 관련된 문제점을 찾아낼
          수 있기 때문에 반드시 필요
        </li>
      </ul>
    </div>
  );
}
