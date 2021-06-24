import React from 'react';

import { Switch, Route as ReactDOMRoute } from 'react-router-dom';
import Route from './Route';
import AvisosRoute from './admin/Avisos.Route';
import CategoriasRoute from './admin/Categorias.Route';
import CentraisRoute from './admin/Centrais.Route';
import CidadesRoute from './admin/Cidades.Route';
import LocaisRoute from './admin/Locais.Route';
import OrgaosRoute from './admin/Orgaos.Route';
import PracasRoute from './admin/Pracas.Route';
import PublicosRoute from './admin/Publicos.Route';
import ServicosRoute from './admin/Servicos.Route';
import SuperioresRoute from './admin/Superiores.Route';
import TagsRoute from './admin/Tags.Route';
import TemasRoute from './admin/Temas.Route';
import UsersRoute from './admin/Users.Route';
import InformacoesRoute from './admin/Informacoes.Route';
import Error404 from '../pages/common/Error404';
import Guide from '../pages/Guide';
import Search from '../pages/Guide/Search';
import Detail from '../pages/Guide/Detail';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Admin/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Guide} isGuide />
    <Route exact path="/pesquisa" component={Search} isGuide />
    <Route exact path="/detalhe" component={Detail} isGuide />

    <Route exact path="/ad/" component={SignIn} isAd />

    <Route exact path="/ad/painel" component={Dashboard} isPrivate />

    <ReactDOMRoute path="/ad/cadastro/avisos">
      <AvisosRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/categorias">
      <CategoriasRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/centrais">
      <CentraisRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/cidades">
      <CidadesRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/superiores">
      <SuperioresRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/locais">
      <LocaisRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/orgaos">
      <OrgaosRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/pracas">
      <PracasRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/publicos">
      <PublicosRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/informacoes">
      <InformacoesRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/servicos">
      <ServicosRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/tags">
      <TagsRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/temas">
      <TemasRoute />
    </ReactDOMRoute>

    <ReactDOMRoute path="/ad/cadastro/usuarios">
      <UsersRoute />
    </ReactDOMRoute>

    <Route exact path="/ad/**" component={Error404} isPrivate />
    <Route path="*" component={Error404} isGuide />
  </Switch>
);

export default Routes;
