import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Admin/Dashboard';

import Categorias from '../pages/Admin/Categorias';
import CategoriasForm from '../pages/Admin/Categorias/Form';

import Servicos from '../pages/Admin/Servicos';
import ServicosForm from '../pages/Admin/Servicos/Form';

import Users from '../pages/Admin/Users';
import UsersForm from '../pages/Admin/Users/Form';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/admin" component={Dashboard} isPrivate />
    <Route
      exact
      path="/admin/cadastro/categorias/"
      component={Categorias}
      isPrivate
    />
    <Route
      exact
      path="/admin/cadastro/categorias/novo"
      component={CategoriasForm}
      isPrivate
    />

    <Route
      exact
      path="/admin/cadastro/servicos"
      component={Servicos}
      isPrivate
    />
    <Route
      exact
      path="/admin/cadastro/servicos/novo"
      component={ServicosForm}
      isPrivate
    />

    <Route exact path="/admin/cadastro/usuarios/" component={Users} isPrivate />
    <Route
      exact
      path="/admin/cadastro/usuarios/novo"
      component={UsersForm}
      isPrivate
    />
    <Route path="/" component={() => <h1>404</h1>} isPrivate />
    <Route path="/" component={() => <h1>404</h1>} />
  </Switch>
);

export default Routes;
