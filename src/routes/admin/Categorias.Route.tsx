import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCategorias from '../../pages/Admin/Categorias/Form';
import Categorias from '../../pages/Admin/Categorias';

const CategoriaRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormCategorias} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCategorias} isPrivate />
      <Route path={`${url}/`} component={Categorias} isPrivate />
    </>
  );
};

export default CategoriaRoutes;
