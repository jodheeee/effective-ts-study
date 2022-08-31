import Title from 'note/sange/Components/Title';
import React from 'react';

function Item7() {
  return (
    <section>
      <Title idx={7} title='타입은 값들의 집합' />
    </section>
  );
}

export default Item7;

// 타입을 집합으로 본다면, 조금은 수월하게 해석할 수 있다.
// 타입의 범위 : never - 타입x < unit(literal) - 한가지의 타입 < union - 둘 또는 세가지의 타입 (|)
// 인터섹션(&)이라는 집합도 존재한다. 일반적으로 인터섹션 타입은 각 타입 내의 속성을 모두 포함하는 것을 뜻한다.
// & : 두 타입을 모두 포함하는 타입 | : 두 타입 중 일부를 포함하는 타입
// type 키워드에서는 &(인터섹션타입)으로 서브타입을 표현하지만, interface 키워드에서는 extends 로 표현한다.
// Exclude<number, 0> 일부 타입을 제외하는 키워드
