import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormSuperiores from '../../pages/Admin/Superiores/Form';
import Superiores from '../../pages/Admin/Superiores';

const SuperioreRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormSuperiores} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormSuperiores} isPrivate />
      <Route path={`${url}/`} component={Superiores} isPrivate />
    </>
  );
};

export default SuperioreRoutes;
