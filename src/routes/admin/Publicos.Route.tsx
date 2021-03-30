import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormPublicos from '../../pages/Admin/Publicos/Form';
import Publicos from '../../pages/Admin/Publicos';

const PublicosRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route path={`${url}/novo`} component={FormPublicos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormPublicos} isPrivate />
      <Route path={`${url}/`} component={Publicos} isPrivate />
    </>
  );
};

export default PublicosRoutes;
