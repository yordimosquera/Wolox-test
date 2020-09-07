import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLogo = styled.img`
  width: 12em;
`;

const MainLogo = ({ route, logo }) => (
  <Link to={route}>
    <StyledLogo src={logo}></StyledLogo>
  </Link>
);

MainLogo.defaultProps = {
  route: '/'
};

MainLogo.propTypes = {
  route: PropTypes.string,
  logo: PropTypes.string.isRequired
};

export default MainLogo;
