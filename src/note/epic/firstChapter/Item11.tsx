import React from "react";

function Item11() {
  return (
    <div>
      <p>Item11: 잉여 속성 체크의 한계 인지 </p>
      <p>의도와 다르게 작성된 코드</p>
      <div>
        <p>적용 안될 경우: </p>
        <ul>
          <li>객체 리터럴아닐때</li>
          <li>타입 단언문 사용할때</li>
        </ul>
      </div>
      <p>
        ?: 같이 약한 타입(weak): 값 타입 + 선언 타입: 공통된 속성이 있는지 확인
        필요
      </p>
    </div>
  );
}

export default Item11;
