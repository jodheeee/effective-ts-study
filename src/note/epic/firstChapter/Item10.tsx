import React from "react";

function Item10() {
  return (
    <div>
      <p>Item10: 객체 래퍼(Wrapper) 타입 피하기 </p>
      <p>기본형 string : 메서드 없음</p>
      <p>JS String: 객체 타입 정의되어 있음. 매서드 있음</p>
      <div>
        <p>TS: 기본형 || 객체 래퍼 타입 별도로 모델링</p>
        <ul>
          <li>string - String</li>
          <li>number - Number</li>
          <li>boolean - Boolean</li>
          <li>symbol - Symbol</li>
          <li>biginit - BigInit</li>
        </ul>
      </div>
      <div>
        <p>string 사용시 유의:</p>
        <p>WHY?</p>
        <p>string as param 메서드에 String 객체 전달 순간 문제 생김</p>
      </div>
      <p>래퍼 타입(i.e. String) &lt; 기본타입(i.e. string)</p>
    </div>
  );
}

export default Item10;
