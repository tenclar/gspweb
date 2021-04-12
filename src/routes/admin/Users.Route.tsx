import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormUsers from '../../pages/Admin/Users/Form';
import Users from '../../pages/Admin/Users';

const UserRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormUsers} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormUsers} isPrivate />
      <Route path={`${url}/`} component={Users} isPrivate />
    </Switch>
  );
};

export default UserRoutes;
