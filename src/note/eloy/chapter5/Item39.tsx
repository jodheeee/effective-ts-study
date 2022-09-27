import React from "react";

export default function Item39() {
  return (
    <div>
      <h1>any를 구체적으로 변형해서 사용하기</h1>
      <ul>
        <li>any 사용할 때는 정말로 모든 값이 허용되어야만 하는지 면밀히 검토해야 함</li>
        <li>
          any 보다 더 정확하게 모델링 할 수 있도록 {`any[] 또는 {[id: string]: any} 또는 () => any`}{" "}
          처럼 구체적인 형태를 사용해야 함
        </li>
      </ul>
    </div>
  );
}
