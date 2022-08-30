import React from "react";

function Item02() {
  return (
    <div>
      <p>Item02: TS settings</p>
      <div>
        <ul>
          <li>noImplicitiAny: if variables should have defined types</li>
          <div>
            <ul>
              <li>params: specify types or define type as any</li>
              <li>embrace code readabilties </li>
              <li>increase productivity</li>
              <li>*** could be false: ONLY process of JS `&gt;` TS </li>
            </ul>
          </div>
          <li>
            strictNullChecks: check Null || undefined allowed in every type
          </li>
          <div>
            <ul>
              <li>
                i.e: const x: number = null; `&gt;` const x: number | null =
                null;
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Item02;
