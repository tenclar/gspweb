import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormPublicos from '../../pages/Admin/Publicos/Form';
import Publicos from '../../pages/Admin/Publicos';

const PublicosRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormPublicos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormPublicos} isPrivate />
      <Route path={`${url}/`} component={Publicos} isPrivate />
    </Switch>
  );
};

export default PublicosRoutes;
