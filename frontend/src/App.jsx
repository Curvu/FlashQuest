import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/Navbar';
import { Landing } from 'pages/Landing';
import { Shop } from 'pages/Shop';
import { Beta } from 'pages/Beta';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />}>
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Landing />
              </>
            }
          />
          <Route
            path="/loja"
            element={
              <>
                <Navbar variant="secondary" />
                <Shop />
              </>
            }
          />
          <Route
            path="/beta"
            element={
              <>
                <Navbar variant="tertiary" />
                <Beta />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
