/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import AdminLayout from '../pages/_layout/admin';
import AuthLayout from '../pages/_layout/auth';
import GuideLayout from '../pages/_layout/guide';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isGuide?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isGuide = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const signed = user;

  if (!signed && isPrivate) {
    return <Redirect to="/ad/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/ad/painel" />;
  }

  let Layout = signed ? AdminLayout : AuthLayout;
  if (isGuide) {
    Layout = GuideLayout;
  }
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
