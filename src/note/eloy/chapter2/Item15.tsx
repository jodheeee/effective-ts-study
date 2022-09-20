function Item15() {
  return (
    <div>
      <h1>동적 데이터에 인덱스 시그니처 사용하기</h1>
      <ul>
        <li>
          런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를
          사용(예를 들어 CSV 파일 임포트 등)
        </li>
        <li>
          안전한 접근을 위해 인덱스 시그니처의 값 타입에 undefined를 추가하는
          것을 고려해야 함
        </li>
        <li>
          가능하다면 인터페이스, Record, 매핑된 타입 같은 인덱스 시그니처보다
          정확한 타입을 사용하는 것이 좋음
        </li>
      </ul>
    </div>
  );
}

export default Item15;
