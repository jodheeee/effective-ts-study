import React from 'react'

const Item42 = () => {
  return (
    <div>
          <h1>Item42: 모르는 type any {'<'} unknown </h1>
    <p>
        Generic {'<'} unknown
    </p>
    <p> 
        any: 분리되는 순간 퍼짐. unknown: 분리되는 순간 오류 발생. 더 안전함
    </p>
    </div>
  )
}

export default Item42