import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import FormCidades from '../pages/Admin/Cidades/Form';
import Cidades from '../pages/Admin/Cidades';

const CidadeRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={Cidades} isPrivate />
    <Route path="/novo" component={FormCidades} isPrivate />
    <Route exact path="/editar/:id" component={FormCidades} isPrivate />
  </Switch>
);

export default CidadeRoutes;
