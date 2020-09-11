import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AuthContext from '../../store/Auth/context';

const PrivateRoute = ({
  component: Component,
  defaultComponent: DefaultComponent,
  ...rest
}) => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  const localToken = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        localToken || token ? (
          <Component {...props} />
        ) : (
          <DefaultComponent {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  defaultComponent: PropTypes.element
};

export default PrivateRoute;
