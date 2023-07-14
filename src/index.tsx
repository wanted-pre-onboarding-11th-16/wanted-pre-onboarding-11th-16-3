import { Global } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import IssueDetailProvider from '@/context/detailContext';
import IssuesContextProvider from '@/context/IssuesContext';
import globalStyle from '@/style/globalStyle';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IssuesContextProvider>
        <IssueDetailProvider>
          <Global styles={globalStyle} />
          <App />
        </IssueDetailProvider>
      </IssuesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
