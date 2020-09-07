import React from 'react';
import { Link } from 'react-router-dom';
import techLogo from '../../../../../public/assets/images/Ic_Tecnologys.svg';
import Button from '../../../../components/Button';
import { defaultColors } from '../../../../constants';
import twitterLogo from '../../../../../public/assets/images/twitter.svg';

import './style.scss';

const { blue } = defaultColors;

const BodyContent = () => (
  <>
    <div id="technologies" className="infoWrapper">
      <p className="infoText">
        <span>{'Estamos buscando'}</span>
        <span>{'para incorporar gente'}</span>
        <span>{'increíble para estas'}</span>
        <span>{'tecnologías:'}</span>
      </p>
      <img className="techImg" src={techLogo} />
    </div>
    <div className="woloxersWrapper">
      <div className="backgroundImage">
        <p>
          <span className="mainGreen">{'350 + '}</span>
          <span className="mainBlue">{'Wolox'}</span>
        </p>
        <p className="container_twitter">
          <img alt="twitter logo" className="twitter_logo" src={twitterLogo} />
          <span>{'@wolox'}</span>
        </p>
        <Link to="/twitter">
          <Button text={'Siguenos'} borderColor={blue} />
        </Link>
      </div>
      <div className="workFor">
        <p className="infoText">
          <span>{'Trabajamos para'}</span>
          <span>
            <span className="blue">{'convertir '}</span>
            <span className="green">{'ideas '}</span>
            {'en'}
          </span>
          <span>{'productos.'}</span>
        </p>
      </div>
    </div>
  </>
);

export default BodyContent;
