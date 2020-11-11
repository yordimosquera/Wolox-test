import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ error, children }) => {
  console.log(error);
  return error ? <h1>{'Something went wrong!'}</h1> : { children };
};

ErrorBoundary.propTypes = {
  error: PropTypes.bool.isRequired,
  children: PropTypes.children
};

export default ErrorBoundary;
