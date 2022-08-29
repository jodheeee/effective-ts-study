import React from "react";

function Item03() {
  return (
    <div>
      <p>Item03: Creating code - Type: no relationship</p>
      <p>Type Erorred Code : compile possible</p>
      <p>Run Time: type check NOT possible</p>
      <div>
        <p>타입 정보 유지하는 방법(Preserving Type Info )</p>
        <ul>
          <li>check property</li>
          <li>explicit way: `&apos;`Tag`&apos;`</li>
          <li>class: ts type `&nbsp;` runtime class</li>
        </ul>
        <p>Type calc NOT Affecting Runtime</p>
        <p>Runtime Type !== Declared Type</p>
        <p>TS`&apos;`s type : No Overloading Function</p>
        <p>TS`&apos;`s Type: Not Affecting Runtime performance</p>
      </div>
    </div>
  );
}

export default Item03;
