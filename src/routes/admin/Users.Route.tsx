import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Route from '../Route';
import FormUsers from '../../pages/Admin/Users/Form';
import Users from '../../pages/Admin/Users';

const UserRoutes: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      {JSON.stringify(url)}

      <Route path={`${url}/novo`} component={FormUsers} isPrivate />
      <Route path={`${url}/editar/:id`} component={FormUsers} isPrivate />
      <Route path={`${url}/`} component={Users} isPrivate />
    </>
  );
};

export default UserRoutes;
