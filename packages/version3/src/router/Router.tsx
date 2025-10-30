import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BaseLayout } from '@/layout';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <div>hello</div>
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
