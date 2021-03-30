import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormAvisos from '../../pages/Admin/Avisos/Form';
import Cidades from '../../pages/Admin/Cidades';

const AvisosRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route path={`${url}/novo`} component={FormAvisos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormAvisos} isPrivate />
      <Route path={`${url}/`} component={Cidades} isPrivate />
    </>
  );
};

export default AvisosRoutes;
