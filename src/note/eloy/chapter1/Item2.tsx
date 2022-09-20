function Item2() {
  return (
    <div>
      <h1>타입스크립트 설정 이해하기</h1>
      <ul>
        <li>
          타입스크립트 컴파일러는 언어의 핵심 요소에 영향을 미치는 몇 가지
          설정을 포함하고 있음
        </li>
        <li>
          타입스크립트 설정은 커맨드 라인을 이용하기 보다는 tsconfig.json을
          사용하는 것이 좋음
        </li>
        <li>
          자바스크립트 프로젝트를 타입스크립트로 전환하는 것이 아니라면
          noImplicitAny를 설정하는 것이 좋음
        </li>
        <li>
          {`'undefined는 객체가 아닙니다' 같은 런타임 오류를 방지하기 위해 strictNullChecks를 설정하는 것이 좋음`}
        </li>
        <li>타입스크립트에서 엄격한 체크를 하고 싶다면 strict 설정을 고려</li>
      </ul>
    </div>
  );
}

export default Item2;
