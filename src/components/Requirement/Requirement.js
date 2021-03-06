import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRequirement = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat Regular', sans-serif;
  margin-bottom: 30px;
  img {
    margin-right: 13px;
  }
`;

const Requirement = ({ imageSource, text }) => {
  return (
    <StyledRequirement>
      <img alt={text} src={imageSource} />
      <span>{text}</span>
    </StyledRequirement>
  );
};

Requirement.propTypes = {
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.string
};

export default Requirement;
