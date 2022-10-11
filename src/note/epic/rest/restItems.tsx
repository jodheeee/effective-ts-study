import React from 'react'

const RestItems = () => {
  return (
    <div>
          <h1>Item53: use more of ECMAScript </h1>
    <p>
        JS based가 중요하다. (JS에 중점을 둔 챕터인 것같아 pass)
    </p>
        <h1>Item54: tips. 객체를 순회하는 노하우</h1>
        <p>
            for.... {'<'} Object.entries
        </p>
        <h1>Item55: DOM 계층 구조 이해하기</h1>
        <p>
           TS practicum 과는 크게 연관이 없는 듯하다. 
        </p>
        <h1>Item56: 정보를 감추는 목적으로 private 사용하지 않기</h1>
        <p>JS - private field 참고</p>
        <h1>Item57: use sourcemap, debug</h1>
        <p>debugger 대체 불가</p>
        <br></br>
        <h1>Item58: use Modern JS</h1>
        <p>ES6+ 문법 사용하는게 제일 좋다</p>
        <h1>Item59: @ts-checker && JSDocs 사용하자</h1>
        <p>ts-config ?ts-checker 사용보다는 config에 option 추가?</p>
        <h1>Item60: AllowJS</h1>
        <p>allowJS 추가해서 ts && JS 동시 작동</p>
        <h1>Item61: dependency 에 따라 module 단위로 전환 하기</h1>
        <p>다른 모듈과 의존하지 않는 모듈부터 최상단으로 (3rd party module: 가장 먼저)</p>
        <p>TS 전환 {'>'} 리팩토링</p>
        <span> 예제! </span>
        <h1>Item62: noImplicitAny 설정</h1>
        <p>타입 체크 엄격하게!: 모든 구성원이 TS에 익숙해질 수록 엄격하게 적용하기</p>
    </div>
  )
}

export default RestItems