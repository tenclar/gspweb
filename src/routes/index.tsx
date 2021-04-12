import React from 'react';

import { Switch, Route as ReactDOMRoute } from 'react-router-dom';
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
import Route from './Route';
import Error404 from '../pages/common/Error404';
import Guide from '../pages/Guide';
import Search from '../pages/Guide/Search';
import Detail from '../pages/Guide/Detail';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Admin/Dashboard';

import Avisos from '../pages/Admin/Avisos';

import Centrais from '../pages/Admin/Centrais';
import Cidades from '../pages/Admin/Cidades';
import Locais from '../pages/Admin/Locais';
import Orgaos from '../pages/Admin/Orgaos';
import Pracas from '../pages/Admin/Pracas';
import Publicos from '../pages/Admin/Publicos';
import Servicos from '../pages/Admin/Servicos';
import Superiores from '../pages/Admin/Superiores';
import Tags from '../pages/Admin/Tags';
import Temas from '../pages/Admin/Temas';
import Users from '../pages/Admin/Users';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Guide} isGuide />
    <Route exact path="/pesquisa" component={Search} isGuide />
    <Route exact path="/detalhe" component={Detail} isGuide />

    <Route exact path="/ad/" component={SignIn} isAd />
    <Route exact path="/ad/painel" component={Dashboard} isPrivate />

    <Route path="/ad/cadastro/avisos" component={Avisos} isPrivate>
      <AvisosRoute />
    </Route>
    <ReactDOMRoute path="/ad/cadastro/categorias">
      <CategoriasRoute />
    </ReactDOMRoute>
    <ReactDOMRoute path="/ad/cadastro/centrais">
      <CentraisRoute />
    </ReactDOMRoute>

    <Route path="/ad/cadastro/cidades" component={Cidades} isPrivate>
      <CidadesRoute />
    </Route>
    <Route path="/ad/cadastro/superiores" component={Superiores} isPrivate>
      <SuperioresRoute />
    </Route>
    <Route path="/ad/cadastro/locais" component={Locais} isPrivate>
      <LocaisRoute />
    </Route>
    <Route path="/ad/cadastro/orgaos" component={Orgaos} isPrivate>
      <OrgaosRoute />
    </Route>
    <Route path="/ad/cadastro/pracas" component={Pracas} isPrivate>
      <PracasRoute />
    </Route>
    <Route path="/ad/cadastro/publicos" component={Publicos} isPrivate>
      <PublicosRoute />
    </Route>
    <Route path="/ad/cadastro/servicos" component={Servicos} isPrivate>
      <ServicosRoute />
    </Route>
    <Route path="/ad/cadastro/tags" component={Tags} isPrivate>
      <TagsRoute />
    </Route>
    <Route path="/ad/cadastro/temas" component={Temas} isPrivate>
      <TemasRoute />
    </Route>
    <Route path="/ad/cadastro/usuarios" component={Users} isPrivate>
      <UsersRoute />
    </Route>
    <Route exact path="/ad/**" component={Error404} isPrivate />
    <Route path="*" component={Error404} isGuide />
  </Switch>
);

export default Routes;
