import React from 'react';

function Item19() {
  return (
    <div>
      <h1>Item19: 추론(inferable) 가능한 타입을 사용해 장황한 코드 방지</h1>
      <p>타입 정보가 있는 라이브러리, callback의 param : 자동 추론됨</p>
      <p>타입 명시하고 싶은 경우: obj 정의</p>
      <div>
        <p>return type 명시해야하는 이유</p>
        <ul>
          <li>error 위치 제대로 표시</li>
          <li>function에 대해 명확하게 알 수 있기 때문 (like TDD)</li>
          <li>named type 사용위해: 복잡해질 수록 이점 커짐</li>
        </ul>
      </div>
    </div>
  );
}

export default Item19;
