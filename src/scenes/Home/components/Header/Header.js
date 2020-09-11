import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import MainLogo from '../../../../components/MainLogo';
import { defaultColors } from '../../../../constants';
import woloxLogo from '../../../../../public/assets/images/logo_full_color.svg';
import peopleLogo from '../../../../../public/assets/images/Ic_ilustra_Hero@3x.png';
import './style.scss';

const { blue } = defaultColors;

const Header = () => (
  <div id="header" className="container">
    <div className="headerOptions">
      <MainLogo logo={woloxLogo} />
      <a href="#header">{'Inicio'}</a>
      <a href="#technologies">{'Tecnologías'}</a>
      <a href="#benefits">{'Beneficios'}</a>
      <a href="#requirements">{'Requerimientos'}</a>
      <Link to={'/login'}>
        <Button text={'Ingresar'} textColor={blue} />
      </Link>
    </div>
    <div className="welcomeSection">
      <React.Fragment>
        <p className="welcomeText">
          <span>{'Bienvenido a tu'}</span>
          <span>
            <span className="bold">{'Entrevista Técnica'}</span>
            {' en'}
          </span>
          <span className="main">{'Wolox'}</span>
        </p>
      </React.Fragment>
      <img className="welcomeImage" src={peopleLogo} />
    </div>
  </div>
);

export default Header;
