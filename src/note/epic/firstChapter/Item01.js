import React from "react";

function Item01() {
  return (
    <div>
      <p>Item1 : Relationship between JS and TS</p>
      <div>
        TS: Higher Set of JS ( 상위 집합 ) : ALL JS === Ts // All TS !== JS
        <p>WHY? TS gets extra grammars</p>
      </div>
      <div>
        <p>TS Goal: Type checker</p>
        <ul>
          <li>TS finds out runtime errors beforehand (BUT, not all errors)</li>
          <li>No errors, but not intented way</li>
          <li>
            Ts: "MODELING" JS' runtime
            <p>i.e) const x = 2 + '3'; //정상, string type</p>
          </li>
        </ul>
      </div>
      <p>정적 타입이란? Passive type?</p>
    </div>
  );
}

export default Item01;
