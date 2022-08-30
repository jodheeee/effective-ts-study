import React from "react";

function Item07() {
  return (
    <div>
      <p>Item07: Type : sets of values</p>
      <div>
        <p>할당(assign) 가능한 값들의 집합(범위: scope): 타입</p>
        <p>never type: 아무런 값도 할당할 수 없음(no value assigned)</p>
        <div>
          <p>포함하는 값 개수에 따라 나눈 타입</p>
          <ul>
            <li>공집합(empty sets): 0</li>
            <li>작은집합 (unit = literal): 1</li>
            <li>합집합 (union type): 2~3</li>
          </ul>
        </div>
        <div>
          <p>extends: Subtype extends MainType</p>
          <p>타입이 값의 집합: 동일한 값의 집합을 가지는 두 타입 = 같다</p>
        </div>
      </div>
    </div>
  );
}

export default Item07;
