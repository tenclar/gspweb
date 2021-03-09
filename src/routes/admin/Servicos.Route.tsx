import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormServicos from '../../pages/Admin/Servicos/Form';
import Servicos from '../../pages/Admin/Servicos';

const ServicoRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormServicos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormServicos} isPrivate />
      <Route path={`${url}/`} component={Servicos} isPrivate />
    </>
  );
};

export default ServicoRoutes;
