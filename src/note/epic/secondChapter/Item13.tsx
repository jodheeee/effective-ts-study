import React from "react";

function Item13() {
  return (
    <div>
      <h1>Item13: Type Alias VS Interface</h1>
      <p>2 named type</p>
      <div>
        <ul>
          <li>type Alias</li>
          <li>interface</li>
        </ul>
      </div>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "2px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <td />
            <td style={{ width: "40%", border: "1px solid #dcdcdc" }}>
              Type Alias
            </td>
            <td style={{ border: "1px solid #dcdcdc" }}>Interface</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #dcdcdc" }}>Common</td>
            <td style={{ border: "1px solid #dcdcdc" }} colSpan={2}>
              1. 상태 차이 없음 2. index signature ([]) 사용 가능 3. function
              정의 가능 4. Generic 가능
            </td>
          </tr>
          <tr>
            <td>Difference</td>
            <td style={{ border: "1px solid #dcdcdc" }} />
            <td style={{ border: "1px solid #dcdcdc" }}>
              1. union 없음: 타입 확장 가능 | 유니온 불가 2. 보강 기법 (agument)
              사용 가능 3. 선언 병합 (declaration merging, 속성 확장) 경우
            </td>
          </tr>
        </tbody>
      </table>
      <p>*property extends 되는 것 원치 않으면: type alias 사용</p>
    </div>
  );
}

export default Item13;
