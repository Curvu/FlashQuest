import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';

import { Navbar } from 'components/Navbar';
import { Landing } from './pages/Landing';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
