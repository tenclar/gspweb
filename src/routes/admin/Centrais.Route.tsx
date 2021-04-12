import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCentrais from '../../pages/Admin/Centrais/Form';
import Centrais from '../../pages/Admin/Centrais';

const CentraisRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormCentrais} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCentrais} isPrivate />
      <Route path={`${url}/`} component={Centrais} isPrivate />
    </Switch>
  );
};

export default CentraisRoutes;
