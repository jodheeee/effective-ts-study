import React from "react";

export default function Item8() {
  return (
    <div>
      <h1>타입 공간과 값 공간의 심벌 구분하기</h1>
      <ul>
        <li>
          타입스크립트 코드를 읽을 때 타입인지 값인지 구분하는 방법을 터득해야 함. 타입스크립트
          플레이그라운드를 활용해 개념을 잡는 것이 좋음
        </li>
        <li>
          모든 값은 타입을 가지지만, 타입이 값을 가지지 않음. type과 interface 같은 키워드는 타입
          공간에만 존재
        </li>
        <li>class나 enum 같은 키워드는 타입과 값 두 가지로 사용도리 수 있음</li>
        <li>
          {`"foo"는 문자열 리터럴이거나, 문자열 리터럴 타입일 수 있음. 차이점을 알고 구별하는 방법을 터득해야 함`}
        </li>
        <li>
          typeof, this 그리고 많은 다른 연산자들과 키워드들은 타입 공간과 값 공간에서 다른 목적으로
          사용될 수 있음
        </li>
      </ul>
    </div>
  );
}

// 예시와 같이 타입 공간과 값 공간이 다르기에 같은 이름으로 선언 가능
interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });
