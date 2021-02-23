import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Admin/Dashboard';

import Categorias from '../pages/Admin/Categorias';
import CategoriasForm from '../pages/Admin/Categorias/Form';

import Servicos from '../pages/Admin/Servicos';
import ServicosForm from '../pages/Admin/Servicos/Form';

import Superiores from '../pages/Admin/Superiores';
import SuperioresForm from '../pages/Admin/Superiores/Form';

import Users from '../pages/Admin/Users';
import UsersForm from '../pages/Admin/Users/Form';

import Guide from '../pages/Guide';
import Search from '../pages/Guide/Search';
import Detail from '../pages/Guide/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Guide} isGuide />
    <Route exact path="/pesquisa" component={Search} isGuide />
    <Route exact path="/detalhe" component={Detail} isGuide />

    <Route exact path="/ad/" component={SignIn} />
    <Route exact path="/ad/painel" component={Dashboard} isPrivate />
    <Route
      exact
      path="/ad/cadastro/categorias/"
      component={Categorias}
      isPrivate
    />
    <Route
      exact
      path="/ad/cadastro/categorias/novo"
      component={CategoriasForm}
      isPrivate
    />

    <Route
      exact
      path="/ad/cadastro/categorias/editar/:id"
      component={CategoriasForm}
      isPrivate
    />

    <Route exact path="/ad/cadastro/servicos" component={Servicos} isPrivate />
    <Route
      exact
      path="/ad/cadastro/servicos/novo"
      component={ServicosForm}
      isPrivate
    />

    <Route exact path="/ad/cadastro/usuarios/" component={Users} isPrivate />
    <Route
      exact
      path="/ad/cadastro/usuarios/novo"
      component={UsersForm}
      isPrivate
    />

    <Route
      exact
      path="/ad/cadastro/superiores"
      component={Servicos}
      isPrivate
    />

    <Route
      exact
      path="/ad/cadastro/superiores/novo"
      component={ServicosForm}
      isPrivate
    />

    <Route
      exact
      path="/ad/cadastro/superiores/novo"
      component={UsersForm}
      isPrivate
    />
    <Route path="/" component={() => <h1>404 b</h1>} isGuide />
    <Route path="/**" component={() => <h1>404</h1>} isPrivate />
  </Switch>
);

export default Routes;
