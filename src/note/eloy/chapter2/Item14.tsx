function Item14() {
  return (
    <div>
      <h1>타입 연산과 제너릭 사용으로 반복 줄이기</h1>
      <ul>
        <li>DRY(dont repeat yourself)원칙을 타입에도 최대한 적용해야 함</li>
        <li>
          타입에 이름을 붙여서 반복을 피해야 함. extends를 사용해서 인터페이스
          필드의 반복을 피해야 함
        </li>
        <li>
          타입들 간의 매핑을 위해 타입스크립트가 제공한 도구들을 공부하면 좋음.
          여기에는 keyof, typeof, 인덱싱, 매핑된 타입들이 포함됨
        </li>
        <li>
          제너릭 타입은 타입을 위한 함수와 같음. 타입을 반복하는 대신 제너릭
          타입을 사용하여 타입들 간에 매핑을 하는 것이 좋음. 제너릭 타입을
          제한하려면 extends를 사용하면 됨
        </li>
        <li>
          표준 라이브러리에 정의된 Pick, Partial, ReturnType 같은 제너릭 타입에
          익숙해져야 함
        </li>
      </ul>
    </div>
  );
}

export default Item14;

type State = {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
};
type TopNavState = {
  [K in "userId" | "pageTitle"]: State[K];
};
type TopNavState2 = Pick<State, "userId" | "pageTitle">;

interface SaveAction {
  type: "save";
}
interface LoadAction {
  type: "load";
}
type Action = SaveAction | LoadAction;
type ActionType = Pick<Action, "type">;
