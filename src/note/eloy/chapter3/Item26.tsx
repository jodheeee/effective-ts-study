function Item26() {
  return (
    <div>
      <h1>타입 추론에 문맥이 어떻게 사용되는지 이해하기</h1>
      <ul>
        <li>타입 추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴봐야 함</li>
        <li>
          변수를 뽑아서 별도로 선언했을 때 오류가 발생한다면 타입 선언을
          추가해야 함
        </li>
        <li>
          변수가 정말로 상수라면 상수 단언(as const)을 사용해야 함. 그러나 상수
          단언을 사용하면 정의한 곳이 아니라 사용한 곳에서 오류가 발생하므로
          주의해야 함
        </li>
      </ul>
    </div>
  );
}

export default Item26;

type Language = "JavaScript" | "TypeScript" | "Python";
interface GovernedLanguage {
  language: Language;
  organization: string;
}
function complain(language: GovernedLanguage) {
  //
}
complain({ language: "TypeScript", organization: "Microsoft" });
const ts = {
  language: "TypeScript",
  organization: "Microsoft",
};
// complain(ts);
