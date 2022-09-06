import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NOTION_LINK } from './constant';

function Home() {
  const chapter = [2, 5, 9, 12, 13, 14, 15, 17, 18];

  const goNotionPage = (item: number) => {
    window.open(NOTION_LINK[item], '_blank');
  };

  return (
    <div>
      <h1>이펙티브 타입스크립트</h1>
      <ul>
        {chapter.map((item) => (
          <>
            <li key={item}>
              <button
                type='button'
                onClick={() => goNotionPage(item)}
              >{`item${item} 바로가기`}</button>
            </li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
}

function SangE() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default SangE;
