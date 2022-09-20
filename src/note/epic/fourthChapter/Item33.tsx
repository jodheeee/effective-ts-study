import React from 'react'

const Item33 = () => {
  return (
    <div>
    <h1>Item33: string 타입보다 더 구체적인 타입 사용하기 (범위 narrowing)</h1>
    <p>
      string type 남용 코드 = 문자열 남바해 선언되었다 (stringly typed)</p>
      <div>
          <ul>
              <li>타입 정보 유지됨</li>
              <li>타입을 명시적으로 정의, 해당 타입의 의미를 설명하는 주석 추가 가능</li>
              <li>keyof : 세밀하게 객체 속성 체크 가능</li>
          </ul>
      </div>
    <p>
       type signature 개선
    </p>
    <div>
        <ul>
            <li>제너릭 타입 도입</li>
        </ul>
    </div>
    <p>string &lt; keyof T</p>
  </div>
  )
}

export default Item33