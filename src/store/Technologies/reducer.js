import {
  FETCH_TECHS_SUCCESS,
  FETCHING_TECHS,
  ERROR_FETCH_TECHS,
  FILTER_TECHS_SUCCESS
} from './types';
import { REQUEST_STATUSES } from '../../constants';

export default (state, action) => {
  const reducer = {
    [FETCH_TECHS_SUCCESS]: {
      ...state,
      status: REQUEST_STATUSES.LOADED,
      currentTechs: action.payload,
      techs: action.payload
    },
    [FILTER_TECHS_SUCCESS]: {
      ...state,
      status: REQUEST_STATUSES.LOADED,
      currentTechs: action.payload
    },
    [FETCHING_TECHS]: {
      status: REQUEST_STATUSES.LOADING,
      ...state
    },
    [ERROR_FETCH_TECHS]: {
      status: REQUEST_STATUSES.NOT_LOADED,
      error: action.error,
      ...state
    }
  };
  return reducer[action.type] ? reducer[action.type] : state;
};
