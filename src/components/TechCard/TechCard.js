import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  font-family: 'Montserrat Regular';
  border: 1px solid;
  border-color: gray;
  border-radius: 1rem;
  width: 500px;
  .one {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .two {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    max-width: 100%;
  }
  .three {
    display: flex;
    justify-content: space-around;
    grid-column: 1/4;
    grid-row: 3 / 4;
  }
  .four {
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-column: 1/4;
    grid-row: 4;
  }
`;

const TechCard = ({
  data: { logo, author, license, type, language, year, tech }
}) => {
  return (
    <Card>
      <div className="one">
        <span>{tech}</span>
        <span>{license}</span>
      </div>

      <img className="two" src={logo} />

      <div className="three">
        <span>
          {'Foundation:  '}
          <strong>{year}</strong>
        </span>
        <span>
          {'Author:  '}
          <strong>{author}</strong>
        </span>
      </div>
      <div className="four">
        <span>
          {'Language:  '}
          <strong>{language}</strong>
        </span>
        <span>
          {'Type:  '}
          <strong>{type}</strong>
        </span>
      </div>
    </Card>
  );
};

TechCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default TechCard;
