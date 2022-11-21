import React from "react";

export default function Item61() {
  return (
    <div>
      <h1>의존성 관계에 따라 모듈 단위로 전환하기</h1>
      <ul>
        <li>마이그레이션의 첫 단계는 서드파티 모듈과 외부 API 호출에 대한 @types를 추가하는 것</li>
        <li>
          의존성 관계도의 아래에서부터 위로 올라가며 마이그레이션을 하면 됨. 첫 번째 모듈은 보통
          유틸리티 모듈. 의존성 관계도를 시각화하여 진행 과정을 추적하는 것이 좋음
        </li>
        <li>
          이상한 설계를 발견하더라도 리펙토링을 하면 안됨. 마이그레이션 작업은 타입스크립트 전환에
          집중해야 하며, 나중의 리펙토링을 위해 목록을 만들어 두는 것이 좋음
        </li>
        <li>
          타입스크립트로 전환하며 발견하게 되는 일반적인 오류들을 놓치지 않아야 함. 타입 정보를
          유지하기 위해 필요에 따라 JSDoc 주석을 활용해야 할 수 있음
        </li>
      </ul>
    </div>
  );
}
