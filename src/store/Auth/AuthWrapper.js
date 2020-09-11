import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import context from './context';
import { logout, login } from './actions';
import { REQUEST_STATUSES } from '../../constants';

const AuthWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { token: null });
  const { status = REQUEST_STATUSES.NOT_LOADED, token = null } = state;

  const authLogin = ({ email, password, keepAuth }) =>
    login(dispatch, { email, password, keepAuth });
  const authLogout = () => logout(dispatch);

  return (
    <context.Provider
      value={{
        status,
        token,
        authLogin,
        authLogout
      }}
    >
      {children}
    </context.Provider>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.element
};

export default AuthWrapper;
