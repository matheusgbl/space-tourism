import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

export const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);
