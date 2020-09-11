import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { defaultColors } from '../../constants';
const { white, blue } = defaultColors;

const StyledButton = styled.button`
  background: ${props => props.backgroundColor};
  border: 3px solid;
  font-family: 'Montserrat Medium';
  border-color: ${props => props.borderColor};
  border-radius: 12rem;
  color: ${props => props.textColor};
  cursor: pointer;
  font-size: 0.9em;
  outline: none;
  height: 2.5rem;
  width: 12em;
  &:hover {
  ${({ backgroundColor, borderColor, textColor }) =>
    backgroundColor === 'transparent' && textColor === white
      ? css`
          background: ${borderColor};
        `
      : backgroundColor === 'transparent' && textColor !== white
      ? css`
          background: ${borderColor};
          color: ${white};
        `
      : css`
          background: ${white};
          color: ${borderColor};
        `}
`;

const Button = ({
  text,
  textColor = white,
  backgroundColor = 'transparent',
  borderColor = blue,
  type = null
}) => (
  <StyledButton
    textColor={textColor}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    type={type}
  >
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  type: PropTypes.string
};

export default Button;
