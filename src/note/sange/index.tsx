import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item2 from './Pages/Item2';
import Item5 from './Pages/Item5';

function SangE() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/item2' element={<Item2 />} />
          <Route path='/item5' element={<Item5 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default SangE;
