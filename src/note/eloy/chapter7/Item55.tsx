import React from "react";

export default function Item55() {
  return (
    <div>
      <h1>DOM 계층 구조 이해하기</h1>
      <ul>
        <li>
          자바스크립트를 사용할 때는 신경 쓰지 않았겠지만, DOM에는 타입 계층 구조가 있음. DOM 타입은
          타입스크립트에서 중요한 정보이며, 브라우저 관련 프로젝트에서 타입스크립트를 사용할 때 유용
        </li>
        <li>
          Node, Element, HTMLElement, EventTarget 간의 차이점, 그리고 Event와 MouseEvent의 차이점을
          알아야 함
        </li>
        <li>
          DOM 엘레먼트와 이벤트에는 충분히 구체적인 타입 정보를 사용하거나, 타입스크립트가 추론할 수
          있도록 문맥 정보를 활용해야 함
        </li>
      </ul>
    </div>
  );
}
