import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BaseLayout } from '@/layout';
import { HomePage } from '@/module/home/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
