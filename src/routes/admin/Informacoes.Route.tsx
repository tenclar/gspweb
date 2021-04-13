import React from 'react';
import { useRouteMatch, Switch } from 'react-router-dom';
import Route from '../Route';
import FormInformacoes from '../../pages/Admin/Informacoes/Form';
import Informacoes from '../../pages/Admin/Informacoes';

const InformacoesRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormInformacoes} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormInformacoes} isPrivate />
      <Route path={`${url}/`} component={Informacoes} isPrivate />
    </Switch>
  );
};

export default InformacoesRoutes;
