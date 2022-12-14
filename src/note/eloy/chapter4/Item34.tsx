import React from "react";

export default function Item34() {
  return (
    <div>
      <h1>부정확한 타입보다는 미완성 타입을 사용하기</h1>
      <ul>
        <li>타입 안정성에서 불쾌한 골짜기는 피해야 함. 타입이 없는 것보다 잘못된 게 더 나쁨.</li>
        <li>
          정확하게 타입을 모델링 할 수 없다면 부정확하게 모델링하지 말아야 함. 또한 any와 unknwon을
          구별해서 사용해야 함
        </li>
        <li>
          타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 함. 정확도
          뿐만 아니라 개발 경험과도 관련됨
        </li>
      </ul>
    </div>
  );
}
