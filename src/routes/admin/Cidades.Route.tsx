import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCidades from '../../pages/Admin/Cidades/Form';
import Cidades from '../../pages/Admin/Cidades';

const CidadeRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormCidades} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCidades} isPrivate />
      <Route path={`${url}/`} component={Cidades} isPrivate />
    </Switch>
  );
};

export default CidadeRoutes;
