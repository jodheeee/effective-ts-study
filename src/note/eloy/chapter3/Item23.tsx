function Item23() {
  return (
    <div>
      <h1>한꺼번에 객체 생성하기</h1>
      <ul>
        <li>
          분기문 외에도 여러 종류의 제어 흐름을 살펴보며 타입스크립트가 타입을
          좁히는 과정을 이해해야 함
        </li>
        <li>
          태그된/구별된 유니온과 사용자 정의 타입 가드를 사용하여 타입 좁히기
          과정을 원활하게 만들 수 있음
        </li>
      </ul>
    </div>
  );
}

export default Item23;

function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}
const nameTitle = { name: "Khufu", title: "Pharaoh" };
const hasDates = true;
const pharaoh = addOptional(
  nameTitle,
  hasDates ? { start: -2589, end: -2566 } : null
);
// console.log(pharaoh.start);
