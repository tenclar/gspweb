import React from 'react';
import { useRouteMatch, Switch } from 'react-router-dom';
import Route from '../Route';
import FormOrgaos from '../../pages/Admin/Orgaos/Form';
import Orgaos from '../../pages/Admin/Orgaos';

const OrgaosRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormOrgaos} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormOrgaos} isPrivate />
      <Route path={`${url}/`} component={Orgaos} isPrivate />
    </Switch>
  );
};

export default OrgaosRoutes;
