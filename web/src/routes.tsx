import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
};
