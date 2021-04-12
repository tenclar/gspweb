import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormServicos from '../../pages/Admin/Servicos/Form';
import Servicos from '../../pages/Admin/Servicos';

const ServicoRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormServicos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormServicos} isPrivate />
      <Route exact path={`${url}/`} component={Servicos} isPrivate />
    </Switch>
  );
};

export default ServicoRoutes;
