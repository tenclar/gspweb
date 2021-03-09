import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCidades from '../../pages/Admin/Cidades/Form';
import Cidades from '../../pages/Admin/Cidades';

const CidadeRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormCidades} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCidades} isPrivate />
      <Route path={`${url}/`} component={Cidades} isPrivate />
    </>
  );
};

export default CidadeRoutes;
