import { Route, Redirect } from 'react-router-native';
import React from 'react';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
