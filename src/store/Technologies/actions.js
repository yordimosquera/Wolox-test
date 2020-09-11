import { services } from '../../services/woloxApi';
import {
  FETCH_TECHS_SUCCESS,
  FETCHING_TECHS,
  ERROR_FETCH_TECHS,
  FILTER_TECHS_SUCCESS
} from './types';
import { sortItemsFromArray } from '../../services/utils';

export const fetchTechnologies = async dispatch => {
  try {
    dispatch({
      type: FETCHING_TECHS
    });

    const data = await services.getTechs();
    dispatch({
      type: FETCH_TECHS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR_FETCH_TECHS,
      error
    });
  }
};

export const getTechByKeyword = ({ dispatch, techs, keyword, mode, field }) => {
  dispatch({
    type: FETCHING_TECHS
  });
  let payload;

  if (mode) {
    const data = services.getTechByKeyword(techs, keyword);
    payload = sortItemsFromArray({
      items: data,
      mode,
      key: field
    });
  } else {
    payload = services.getTechByKeyword(techs, keyword);
  }

  dispatch({
    type: FILTER_TECHS_SUCCESS,
    payload
  });
};
