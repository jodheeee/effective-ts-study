import React from "react";

export default function Item10() {
  return (
    <div>
      <h1>객체 래퍼 타입 피하기</h1>
      <ul>
        <li>
          기본형 값에 메소드를 제공하기 위해 객체 래퍼 타입이 어떻게 쓰이는지 이해해야 함. 직접
          사용하거나 인스턴스를 생성하는 것은 피해야 함
        </li>
        <li>
          타입스크립트 객체 래퍼 타입은 지양하고, 대신 기본형 타입을 사용해야 함
          {`(String > string, Number > number, Boolean > boolean, Symbol > symbol, BigInt > bigint)`}
        </li>
      </ul>
    </div>
  );
}

// 몽키 패치란 런타임에 어떤 기능을 수정해서 사용하는 기법을 말함(자바스크립트에서는 주로 프로토타입을 변경하는 것에 해당)
