import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Admin/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
