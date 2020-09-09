import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ value, handleChange }) => (
  <input type="text" value={value} onChange={handleChange} />
);

InputText.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default InputText;
