import React from 'react';

function Title({ idx, title }: { idx: number; title: string }) {
  return (
    <h1>
      {`[Item${idx}] `} <span>{title}</span>
    </h1>
  );
}

export default Title;
