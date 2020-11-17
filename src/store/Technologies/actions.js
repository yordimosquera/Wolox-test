import { services } from '../../services/woloxApi';
import {
  FETCH_TECHS_SUCCESS,
  FETCHING_TECHS,
  ERROR_FETCH_TECHS,
  FILTER_TECHS_SUCCESS
} from './types';
import { sortItemsFromArray, filterArrayByKey } from '../../services/utils';
import { TECH_TYPES } from '../../constants';

export const fetchTechnologies = async dispatch => {
  try {
    // throw new Error('noooo');
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

export const getTechByKeyword = ({
  dispatch,
  techs,
  keyword,
  mode,
  field,
  type
}) => {
  dispatch({
    type: FETCHING_TECHS
  });
  let payload, data;

  data = services.getTechByKeyword(techs, keyword);

  if (TECH_TYPES.includes(type)) {
    data = filterArrayByKey({ items: data, key: 'type', value: type });
  }

  payload = sortItemsFromArray({
    items: data,
    mode,
    key: field
  });

  dispatch({
    type: FILTER_TECHS_SUCCESS,
    payload
  });
};
