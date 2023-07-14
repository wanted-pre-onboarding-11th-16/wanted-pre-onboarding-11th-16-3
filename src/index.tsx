import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import IssueDetailProvider from './context/detailContext';
import IssuesContextProvider from './context/IssuesContext';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IssuesContextProvider>
        <IssueDetailProvider>
          <App />
        </IssueDetailProvider>
      </IssuesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
