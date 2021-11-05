import React from 'react';
import { Switch } from 'react-router-dom';

import Crew from '../pages/Crew';
import Destination from '../pages/Destination';
import HomePage from '../pages/HomePage';
import { Route } from './route';

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/destination" component={Destination} />
    <Route exact path="/crew" component={Crew} />
  </Switch>
);
