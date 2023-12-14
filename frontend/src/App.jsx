import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';

import { Navbar } from 'components/Navbar';
import { Landing } from 'pages/Landing';
import { Shop } from 'pages/Shop';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="*" element={<Landing />} />
          <Route path="/loja" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
