import React from 'react';
import Button from './components/Button';
import Benefit from './components/Benefit';
import Requirement from './components/Requirement';
import TechCard from './components/TechCard';
import bullet3 from '../public/assets/images/Ic_Bullet_3.svg';
import bullet2 from '../public/assets/images/Ic_Bullet_2.svg';
import bullet1 from '../public/assets/images/Ic_Bullet_1.svg';
import hourBenefitLogo from '../public/assets/images/Ic_Hour.svg';
import deskLogo from '../public/assets/images/Ic_HomeOffice.svg';
import workshopsLogo from '../public/assets/images/Ic_Workshops.svg';
import snacksLogo from '../public/assets/images/Ic_DrinkSnacks.svg';
import remoteLogo from '../public/assets/images/Ic_laptop.svg';
import brainLogo from '../public/assets/images/Ic_brain.svg';
import './App.scss';

const data = {
  tech: 'Node',
  author: 'Yo',
  year: '2009',
  type: 'BE',
  language: 'Js',
  license: 'MIT',
  imageSource: brainLogo
};

const App = () => (
  <div className="app">
    <div className="section">
      <Button text={'Conocer más'} borderColor={'var(--mainBlue)'} />
      <Button text={'Conocer más'} backgroundColor={'var(--mainBlue)'} />
      <Button text={'Conocer más'} textColor={'var(--mainBlue)'} />
    </div>
    <div className="section">
      <Benefit imageSource={hourBenefitLogo} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={deskLogo} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={workshopsLogo} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={snacksLogo} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={remoteLogo} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={brainLogo} text={'Flexibilidad Horaria'} />
    </div>

    <Requirement
      imageSource={bullet1}
      text={
        'Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.'
      }
    />
    <Requirement imageSource={bullet2} text={'Inglés intermedio/avanzado'} />
    <Requirement
      imageSource={bullet3}
      text={'Conocimiento en metodologías ágiles (deseable)'}
    />
    <TechCard data={data} />
  </div>
);

export default App;
