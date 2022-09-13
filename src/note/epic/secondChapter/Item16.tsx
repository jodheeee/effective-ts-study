import React from "react";

function Item16() {
  return (
    <div>
      <h1>Item16: number index &lt; Array, Tuple, ArrayLike</h1>
      <div>
        <ul>
          <li>JS: Number !== key &rarr; TS: number = key || !== string key </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>index != important: for -of</li>
          <li>index type = important: forEach</li>
          <li>loop 중간에 멈춰야하면: for -loop</li>
        </ul>
      </div>
      <p>tuple: ArrayLike</p>
    </div>
  );
}

export default Item16;
