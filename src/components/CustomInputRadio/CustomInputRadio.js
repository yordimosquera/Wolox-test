import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputRadio = styled.label`
  font-family: 'Montserrat Regular';
  margin-right: 1rem;
`;

const CustomInputRadio = ({ description, name, value, handleChange }) => (
  <StyledInputRadio>
    {description}
    <input value={value} name={name} type="radio" onChange={handleChange} />
  </StyledInputRadio>
);

CustomInputRadio.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default CustomInputRadio;
