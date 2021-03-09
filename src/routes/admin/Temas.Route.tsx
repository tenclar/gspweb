import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormTemas from '../../pages/Admin/Temas/Form';
import Temas from '../../pages/Admin/Temas';

const TemaRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormTemas} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormTemas} isPrivate />
      <Route path={`${url}/`} component={Temas} isPrivate />
    </>
  );
};

export default TemaRoutes;
