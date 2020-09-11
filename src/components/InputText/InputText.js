import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ value, handleChange, name = '' }) => (
  <input type="text" value={value} onChange={handleChange} name={name} />
);

InputText.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string
};

export default InputText;
