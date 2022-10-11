import React from "react";

export default function Item54() {
  return (
    <div>
      <h1>객체를 순회하는 노하우</h1>
      <ul>
        <li>
          객체를 순회할 때, 키가 어떤 타입인지 정확히 파악하고 있다면 let k: keyof T와 for-in 루프를
          사용. 함수의 매개변수로 쓰이는 객체에는 추가적인 키가 존재할 수 있다는 점을 명심
        </li>
        <li>객체를 순회하며 키와 값ㅇ르 얻는 가장 일반적인 방법은 Object.entries를 사용하는 것</li>
      </ul>
    </div>
  );
}
