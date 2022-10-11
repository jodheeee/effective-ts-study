import React from "react";

export default function Item22() {
  return (
    <div>
      <h1>타입 좁히기</h1>
      <ul>
        <li>
          분기문 외에도 여러 종류의 제어 흐름을 살펴보며 타입스크립트가 타입을 좁히는 과정을
          이해해야 함
        </li>
        <li>
          태그된/구별된 유니온과 사용자 정의 타입 가드를 사용하여 타입 좁히기 과정을 원활하게 만들
          수 있음
        </li>
      </ul>
    </div>
  );
}

function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    return el.value;
  }
  return el.textContent;
}
