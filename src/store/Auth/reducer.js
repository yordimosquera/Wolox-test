import {
  LOGIN_ERROR,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESSFUL,
  LOGOUT
} from './types';
import { REQUEST_STATUSES } from '../../constants';

export default (state, action) => {
  const reducer = {
    [LOGIN_SUCCESSFUL]: {
      ...state,
      status: REQUEST_STATUSES.LOGGED_IN,
      token: action.payload
    },
    [LOGIN_IN_PROGRESS]: {
      ...state,
      status: REQUEST_STATUSES.LOADING
    },
    [LOGOUT]: {
      status: REQUEST_STATUSES.LOGGED_OUT,
      token: null,
      ...state
    },
    [LOGIN_ERROR]: {
      status: REQUEST_STATUSES.NOT_LOADED,
      error: action.error,
      ...state
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
