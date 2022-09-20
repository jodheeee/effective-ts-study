import React from "react";

function Item14() {
  return (
    <div>
      <h1>
        Item14: 타입 연산(Type operation)과 제너릭(Generic) 사용으로 반복 줄이기
      </h1>
      <div>
        <ul>
          <li>* 반복 줄이는 가장 간단한 방법: naming</li>
          <li>
            Already 존재하는 Type 확장 (extends): &amp; 사용{" "}
            <span>(*특히, 유니온 타입에 속성 추가할 때)</span>
          </li>
          <li>mapping type: a.k.a Pick</li>
        </ul>
      </div>
      <p>Value &rarr; type: 순서 주의 </p>
      <div>
        <ol>
          <li>정의 (define) </li>
          <li>선언 (declare) </li>
        </ol>
      </div>
      <p>&rarr; 1&#41; type 명확 2&#41; unexpected type 변동 방지</p>
      <p>
        Generic Type(Pick, Partial, ReturnType): extends 사용 &rarr; param
        extends into 특정 type{" "}
      </p>
    </div>
  );
}

export default Item14;
