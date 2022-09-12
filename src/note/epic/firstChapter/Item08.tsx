import React from "react";

function Item08() {
  return (
    <div>
      <p>Item08: Type : distinguish Type | Value symbols</p>
      <div>
        <p>type + value: 번갈아 나올 수 있음</p>
        <div>
          <ul>
            <li>선언 (:), 단언(as) type</li>
            <li>= value</li>
          </ul>
        </div>
        <div>
          <p>class의 경우</p>
          <ul>
            <li>TS: 형태(속성 + 메서드)</li>
            <li>Value: 생성자 사용</li>
          </ul>
        </div>
        <div>
          <p>typeof</p>
          <ul>
            <li>Ts: return type</li>
            <li>
              Value: JS runtime typeof [string, number, boolean, undefined,
              object, function]
            </li>
          </ul>
        </div>
        <div>
          <p>this</p>
          <ul>
            <li>Ts: polymorphic</li>
            <li>JS</li>
          </ul>
        </div>
        <div>
          <p> &amp;|</p>
          <ul>
            <li>Ts: intersection Union</li>
            <li>value: AND OR</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Item08;
