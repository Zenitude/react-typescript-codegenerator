import React from 'react'
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './main.style.ts';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
)
