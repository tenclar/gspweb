import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormSuperiores from '../../pages/Admin/Superiores/Form';
import Superiores from '../../pages/Admin/Superiores';

const SuperioreRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormSuperiores} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormSuperiores} isPrivate />
      <Route path={`${url}/`} component={Superiores} isPrivate />
    </Switch>
  );
};

export default SuperioreRoutes;
