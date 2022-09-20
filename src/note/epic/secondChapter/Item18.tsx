import React from 'react';

function Item18() {
  return (
    <div>
      <h1>Item18: sync value w/ mapped types</h1>
      <p>mapped type: obj1.property ===&gt; obj2.property</p>
      <div>
        <ul>
          <li>conservative / fail close: value 변할 때마다 function: 정확. BUT 자주 calling</li>
          <li>fail open: 불필요하게 function 부르지 않음. BUT 누락될 수 있음</li>
        </ul>
      </div>
    </div>
  );
}

export default Item18;
