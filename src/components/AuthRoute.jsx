import React from 'react';

import { Route, Redirect } from 'react-router-dom';

function AuthRoute({
  user, component: Component, path,
}) {
  if (user) {
    return (
      <Route
        path={path}
        component={Component}
      />
    );
  }

  return (
    <Route
      render={(props) => (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      )}
    />
  );
}

export default AuthRoute;
