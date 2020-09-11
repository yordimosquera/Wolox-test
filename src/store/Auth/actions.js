import { services } from '../../services/woloxApi';
import {
  LOGIN_ERROR,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESSFUL,
  LOGOUT
} from './types';

export const login = async (dispatch, { email, password, keepAuth }) => {
  try {
    dispatch({
      type: LOGIN_IN_PROGRESS
    });
    const { token } = await services.login({ email, password });
    keepAuth
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token');
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: token
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      error
    });
  }
};

export const logout = async dispatch => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT
  });
};
