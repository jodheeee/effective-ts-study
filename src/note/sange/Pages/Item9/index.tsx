import Title from 'note/sange/Components/Title';
import React from 'react';

function Item9() {
  return (
    <section>
      <Title idx={9} title='타입단언과 타입선언' />
    </section>
  );
}

export default Item9;

// 타입 선언 = interface Person {name: string}; / const person : Persosn = {name: 'ji'};
// 타입 선언은 값 뒤에 타입을 명시적으로 붙여 선언된 타입을 명시한다 라고 보면 된다.
// 타입 단언 = const person = {name: 'hui'} as Persion;
// 타입 단언은 값 뒤에 as를 붙여 추론한 타입이 있더라도 as 뒤에 선언한 타입으로 인지하게 만든다.
// 타입 단언을 지양해야하는 이유는 타입을 강제로 지정하여, 오류에 대해 무시하라고 명령 하는 것이다.
// tip: 화살표 함수에서는 타입선언에 추론된 타입이 모호할떄가 있다.
// 그럴떄에는 선언한 변수 또는 상수에 타입 선언과 함께 화살표 함수의 반환 타입에 타입을 명시 해주면 타입 선언이 조금 더 명확해질수있다.
// 그렇다면 타입 단언은 언제 써야할까?
// 타입스크립트가 추론하는 타입보다 개발자가 생각하는 타입이 더 정확할 떄 사용하는 것이 적절하다고 본다.
// 타입스크립트는 DOM 타입에 접근하지 못하기 때문에 DOM 타입 또는 (! - null이 아니라고 확신할떄 사용하는 boolean의 부정문) 연산자 사용 시라고 생각한다.
// 단언문(!)은 컴파일 과정 중 제거되므로 null이 아니라고 확신할 수 있을 때 사용하여야 한다.
// 타입 단언문은 타입들의 관계가 서브타입이 아닐 경우에는 사용할 수가 없다.
// 이를 해결하려면 모든 타입들의 서브타입인 unknown 을 통해서 가능할 수가 있다. 그러나 unknwon을 사용하는 것은 무언가 위험한 동작을 하고있다는 것을 짐작하게 만든다.
