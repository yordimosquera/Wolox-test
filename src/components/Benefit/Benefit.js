import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBenefit = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: Montserrat Medium;
  img {
    margin-bottom: 10px;
  }
`;

const Benefit = ({ imageSource, text }) => (
  <StyledBenefit>
    <img alt={text} src={imageSource} />
    <span>{text}</span>
  </StyledBenefit>
);

Benefit.propTypes = {
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.string
};
export default Benefit;
