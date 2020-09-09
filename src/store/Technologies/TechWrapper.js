import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import context from './context';
import { fetchTechnologies, getTechByKeyword } from './actions';
import { REQUEST_STATUSES } from '../../constants';

const TechWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { techs: [] });
  const {
    status = REQUEST_STATUSES.NOT_LOADED,
    techs = [],
    currentTechs = []
  } = state;

  const getTechs = () => fetchTechnologies(dispatch);
  const filterTechs = ({ keyword, mode, field }) =>
    getTechByKeyword({ dispatch, techs, keyword, mode, field });

  return (
    <context.Provider
      value={{
        status,
        techs,
        getTechs,
        filterTechs,
        currentTechs
      }}
    >
      {children}
    </context.Provider>
  );
};

TechWrapper.propTypes = {
  children: PropTypes.element
};

export default TechWrapper;
