import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormPracas from '../../pages/Admin/Pracas/Form';
import Pracas from '../../pages/Admin/Pracas';

const PracaRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormPracas} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormPracas} isPrivate />
      <Route path={`${url}/`} component={Pracas} isPrivate />
    </Switch>
  );
};

export default PracaRoutes;
