/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import AdminLayout from '../pages/_layout/admin';
import AuthLayout from '../pages/_layout/auth';
// import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { user } = useAuth();
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/admin" />;
  }

  const Layout = signed ? AdminLayout : AuthLayout;
  return (
    <ReactDOMRoute
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default Route;
