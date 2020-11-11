import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultColors } from '../../constants';
const { lightBlue, blue } = defaultColors;

const StyledInputText = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  width: auto;
  > label {
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      font-family: 'Montserrat Regular';
      border: none;
      width: 100%;
      height: 2rem;
      font-size: 1rem;
      padding-left: 0.875rem;
      line-height: 147.6%;
      padding-top: 0.825rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.125rem solid ${lightBlue};
    }
    svg {
      position: absolute;
      right: 0.875rem;
      fill: ${blue};
    }
  }
`;

const InputText = ({
  value,
  handleChange,
  name = '',
  placeHolder,
  type = 'text',
  children
}) => (
  <StyledInputText>
    <label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeHolder}
      />
      {children}
    </label>
  </StyledInputText>
);

InputText.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.children
};

export default InputText;
