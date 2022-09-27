import React from "react";

export default function Item16() {
  return (
    <div>
      <h1>number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기</h1>
      <ul>
        <li>
          배열은 객체이므로 키는 숫자가 아니라 문자열임. 인덱스 시그니처로 사용된 number 타입은
          버그를 잡기 위한 순수 타입스크립트 코드임
        </li>
        <li>
          인덱스 시그니처에 number를 사용하기보다 Array나 튜플 또는 ArrayLike 타입을 사용하는 것이
          좋음
        </li>
      </ul>
    </div>
  );
}

function checkAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i < xs.length) {
    return xs[i];
  }
  throw new Error(`배열의 끝을 지나서 ${i}번째에 접근을 시도함`);
}
checkAccess([1, 2, 3, 4, 5], 2);
