import React from 'react'

const Item41 = () => {
  return (
    <div>
          <h1>Item41: any의 진화 이해</h1>
    <div>
        <ul>
            <li>number / string 등 타입 값을 넣는 순간 타입 any -{'>'} evolve</li>
            <li>조건문 분기에 따라 타입 변할 수 있음</li>
            <li>초깃값: null 인경우</li>
        </ul>
    </div>
    <div>
        <p>any type evlove: noImplicitiAny가 설정된 상태에서 variable type 이 암시적 any 인경우 발생</p>
        <p>암시적 any 변수에 어떤 것도 할당하지 않고 사용: any 오류 발생</p>
        <p>any evolve {'<'} 명시적 type 구문 사용 </p>
    </div>
    </div>
  )
}

export default Item41