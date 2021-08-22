import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { reviewContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    let [loggedInUser, setLoggedInUser] = useContext(reviewContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;