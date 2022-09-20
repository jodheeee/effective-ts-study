function Item9() {
  return (
    <div>
      <h1>타입 단언보다는 타입 선언을 사용하기</h1>
      <ul>
        <li>타입 단언(as Type)보다 타입 선언(: Type)을 사용해야 함</li>
        <li>화살표 함수의 반환 타입을 명시하는 방법을 터득해야 함</li>
        <li>
          타입스크립트보다 타입 정보를 더 잘 알고 있는 상황(DOM Element
          등)에서는 타입 단언문과 null 아님 단언문을 사용하면 됨
        </li>
      </ul>
    </div>
  );
}

export default Item9;

// 접미사로 붙은 ! 는 null이 아니라는 단언문으로 사용 가능
const elNull = document.getElementById("foo"); // foo 또는 null
const el = document.getElementById("foo")!; // foo
