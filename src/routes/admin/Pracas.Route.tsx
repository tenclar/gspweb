import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormPracas from '../../pages/Admin/Pracas/Form';
import Pracas from '../../pages/Admin/Pracas';

const PracaRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormPracas} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormPracas} isPrivate />
      <Route path={`${url}/`} component={Pracas} isPrivate />
    </>
  );
};

export default PracaRoutes;
