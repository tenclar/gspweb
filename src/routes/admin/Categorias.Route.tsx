import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormCategorias from '../../pages/Admin/Categorias/Form';
import Categorias from '../../pages/Admin/Categorias';

const CategoriaRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormCategorias} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormCategorias} isPrivate />
      <Route path={`${url}/`} component={Categorias} isPrivate />
    </Switch>
  );
};

export default CategoriaRoutes;
