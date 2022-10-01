import React from 'react'

const Item49 = () => {
  return (
    <div>
          <h1>Item49: callback에서 this에 대한 티입 제공 </h1>
    <p>
        생성자에서 메서드에 this bind가 best
    </p>
    <p>
        callback {'>'} this 사용경우: this = API 일부가 됨 -{'>'} MUST type 선언에 포함
    </p>
    </div>
  )
}

export default Item49