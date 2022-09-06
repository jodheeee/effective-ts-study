import React from "react";

function Item15() {
  return (
    <div>
      <h1>Item15: 동적 데이터 (Dynamic Data)에 index signature([]) 사용</h1>
      <p>type에 []명시해 mapping 표현</p>
      <p>
        i.e. &#123;[property(key): string(key type)]: string(value type)&#125;
      </p>
      <div>
        문제 점 4가지
        <ol>
          <li>잘못된 키를 포함해 모든 키 허용</li>
          <li>특정 키가 필요하지 않습니다</li>
          <li>키마다 다른 타입을 가질 수 없습니다</li>
          <li>자동 완성 기능이 동작 하지 않음</li>
        </ol>
      </div>
      <p>string type broad &rarr; [] 사용하는데 문제?</p>
      <span>: 대안s</span>
      <div>
        <ul>
          <li>Record</li>
          <li>mapping</li>
        </ul>
      </div>
    </div>
  );
}

export default Item15;
