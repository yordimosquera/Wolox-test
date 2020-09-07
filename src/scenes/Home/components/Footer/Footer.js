import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button';
import './style.scss';
import { defaultColors } from '../../../../constants';
import woloxLogo from '../../../../../public/assets/images/Ic_Wolox_Footer.svg';
const { blue } = defaultColors;

const Footer = () => (
  <div className="footerSection">
    <p className="footerText">
      <span className="bold">
        {'Gracias por '}
        <span className="boldBlue">{'completar el ejercicio'}</span>
      </span>
      <span className="regular">{'Te invitamos a ver más información'}</span>
    </p>
    <Link to="/wolox">
      <Button text={'conocer más'} backgroundColor={blue} />
    </Link>
    <img className="logo" src={woloxLogo} />
  </div>
);

export default Footer;
