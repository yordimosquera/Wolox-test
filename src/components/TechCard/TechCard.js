import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultColors } from '../../constants';
const { white, green } = defaultColors;

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  background: ${white};
  font-family: 'Montserrat Regular';
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  .title {
    padding-right: 1rem;
    text-align: right;
    color: ${green};
  }
  .desc {
    padding: 0.5rem 1rem;
    font-size: 12px;
  }
  h2 {
    margin: 0;
    padding: 0 1rem;
  }
  .image {
    align-self: center;
    width: 70%;
    justify-self: center;
  }
`;

const TechCard = ({
  data: { logo, author, license, type, language, year, tech }
}) => {
  return (
    <Card>
      <img className="image" src={logo} />
      <div>
        <p className="title">{license}</p>
        <h2>{tech}</h2>

        <div className="desc">
          {`Is a ${type} technology that use ${language}, it was created by ${author} in ${year}.`}
        </div>
      </div>
    </Card>
  );
};

TechCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default TechCard;
