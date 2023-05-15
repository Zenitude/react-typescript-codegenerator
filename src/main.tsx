import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import { ContextProvider } from './utils/context/context.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
