import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultColors } from '../../constants';
const { lightBlue } = defaultColors;

const StyledSelect = styled.select`
  font-family: 'Montserrat Regular';
  width: 10rem;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  line-height: 147.6%;
  border-bottom: 0.125rem solid ${lightBlue};
`;

const CustomSelect = ({ options, handleChange }) => (
  <StyledSelect name="select" onChange={handleChange}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

CustomSelect.propTypes = {
  handleChange: PropTypes.func,
  options: PropTypes.array
};

export default CustomSelect;
