function Item5() {
  return (
    <div>
      <h1>any 타입 지양하기</h1>
      <ul>
        <li>
          any 타입을 사용하면 타입 체커와 타입스크립트 언어 서비스를 무력화시켜
          버림.
        </li>
        <li>
          any 타입은 진짜 문제점을 감추며, 개발 경험을 나쁘게 하고, 타입
          시스템의 신뢰도를 떨어뜨림. * 최대한 사용을 피하도록 해야 함
        </li>
      </ul>
    </div>
  );
}

export default Item5;
