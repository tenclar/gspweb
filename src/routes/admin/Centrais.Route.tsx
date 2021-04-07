import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCentrais from '../../pages/Admin/Centrais/Form';
import Centrais from '../../pages/Admin/Centrais';

const CentraisRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Route path={`${url}/novo`} component={FormCentrais} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCentrais} isPrivate />
      <Route path={`${url}/`} component={Centrais} isPrivate />
    </>
  );
};

export default CentraisRoutes;
