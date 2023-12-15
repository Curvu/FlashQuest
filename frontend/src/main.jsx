import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import { App } from './App';

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Analytics />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
);
