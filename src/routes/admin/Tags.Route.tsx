import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormTags from '../../pages/Admin/Tags/Form';
import Tags from '../../pages/Admin/Tags';

const TagRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/novo`} component={FormTags} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormTags} isPrivate />
      <Route path={`${url}/`} component={Tags} isPrivate />
    </Switch>
  );
};

export default TagRoutes;
