import React from "react";

export default function Item52() {
  return (
    <div>
      <h1>테스팅 타입의 함정에 주의하기</h1>
      <ul>
        <li>
          타입을 테스트할 때는 특히 함수 타입의 동일성과 할당 가능성의 차이점을 알고 있어야 함
        </li>
        <li>
          콜백이 있는 함수를 테스트할 때, 콜백 매개변수의 추론된 타입을 체크해야 함. 또한 this가
          API의 일부라면 역시 테스트해야 함
        </li>
        <li>
          타입 관련된 테스트에서 any를 주의해야 함. 더 염격한 테스트를 위해 dtslint 같은 도구를
          사용하는 것이 좋음
        </li>
      </ul>
    </div>
  );
}
