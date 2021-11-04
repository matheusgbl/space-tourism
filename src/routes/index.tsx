import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import { Route } from './route';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
);
