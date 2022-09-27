import React from "react";

export default function Item13() {
  return (
    <div>
      <h1>타입과 인터페이스의 차이점 알기</h1>
      <ul>
        <li>타입과 인터페이스의 차이점과 비슷한 점을 이해해야 함</li>
        <li>한 타입을 type과 interface 두 가지 문법을 사용해서 작성하는 방법을 터득해야 함</li>
        <li>
          프로젝트에서 어떤 문법을 사용할지 결정할 때 한 가지 일관된 스타일을 확립하고, 보강 기법이
          필요한지 고려해야 함
        </li>
      </ul>
    </div>
  );
}

type A = {
  name: string;
};
type B = {
  age: number;
};

type C = (A | B) | { max: number };

const obj: C = {
  name: "abc",
  age: 123,
};
