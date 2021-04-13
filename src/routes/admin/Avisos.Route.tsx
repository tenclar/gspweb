import React from 'react';
import { useRouteMatch, Switch } from 'react-router-dom';
import Route from '../Route';
import FormAvisos from '../../pages/Admin/Avisos/Form';
import Avisos from '../../pages/Admin/Avisos';

const AvisosRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormAvisos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormAvisos} isPrivate />
      <Route path={`${url}/`} component={Avisos} isPrivate />
    </Switch>
  );
};

export default AvisosRoutes;
