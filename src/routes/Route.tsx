import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import AdminLayout from '../pages/_layout/admin';
import AuthLayout from '../pages/_layout/auth';
import GuideLayout from '../pages/_layout/guide';
import DashLayout from '../pages/_layout/dash';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isGuide?: boolean;
  isAd?: boolean;
  isDash?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isGuide = false,
  isAd = false,
  isDash = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const signed = user;

  if (!signed && isPrivate) {
    return <Redirect to="/ad" />;
  }

  if (signed && !isPrivate && isAd) {
    return <Redirect to="/ad/painel" />;
  }
  let Layout = signed ? AdminLayout : AuthLayout;
  if (isPrivate) {
    Layout = AdminLayout;
  }
  if (isGuide) {
    Layout = GuideLayout;
  }

  if (isDash)
  {
    Layout = DashLayout;
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
