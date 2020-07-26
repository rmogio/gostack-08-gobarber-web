import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Router />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
