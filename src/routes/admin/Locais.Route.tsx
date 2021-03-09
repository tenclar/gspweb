import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormLocais from '../../pages/Admin/Locais/Form';
import Locais from '../../pages/Admin/Locais';

const LocaiRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route path={`${url}/novo`} component={FormLocais} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormLocais} isPrivate />
      <Route path={`${url}/`} component={Locais} isPrivate />
    </>
  );
};

export default LocaiRoutes;
