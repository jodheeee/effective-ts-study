import React from "react";

export default function Item35() {
  return (
    <div>
      <h1>데이터가 아닌, API와 명세를 보고 타입 만들기</h1>
      <ul>
        <li>
          코드의 구석 구석까지 타입 안정성을 얻기 위해 API 또는 데이터 형식에 대한 타입 생성을
          고려해야 함
        </li>
        <li>
          데이터에 드러나지 않는 예외적인 경우들이 문제가 될 수 있기 때문에 데이터 보다는 명세로부터
          코드를 생성하는 것이 좋음
        </li>
      </ul>
    </div>
  );
}
