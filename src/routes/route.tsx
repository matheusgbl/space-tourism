import React from 'react';
import { Route as ReactRoute, RouteProps as ReactRouteProps } from 'react-router-dom';

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
