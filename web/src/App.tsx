import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from 'react-router-dom';

import { Routes } from './routes';

import history from './services/history';
import api from './services/api';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ApolloProvider client={api}>
      <Router history={history}>
        <Routes />

        <GlobalStyle />
      </Router>
    </ApolloProvider>
  );
};

export default App;
