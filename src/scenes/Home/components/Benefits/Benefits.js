import React from 'react';
import './style.scss';
import Benefit from '../../../../components/Benefit';

import hourBenefitImg from '../../../../../public/assets/images/Ic_Hour.svg';
import homeOfficeImg from '../../../../../public/assets/images/Ic_HomeOffice.svg';
import workshopsImg from '../../../../../public/assets/images/Ic_Workshops.svg';
import snacksImg from '../../../../../public/assets/images/Ic_DrinkSnacks.svg';
import laptopImg from '../../../../../public/assets/images/Ic_laptop.svg';
import brainImg from '../../../../../public/assets/images/Ic_brain.svg';

const Benefits = () => (
  <div id="benefits" className="benefitsContainer">
    <span className="benefitsTitle">
      {'Entre los beneficios que ofrecemos se encuentran'}
      <span className="blue">{';)'}</span>
    </span>
    <div className="section">
      <Benefit imageSource={hourBenefitImg} text={'Flexibilidad Horaria'} />
      <Benefit imageSource={homeOfficeImg} text={'Home office'} />
      <Benefit imageSource={workshopsImg} text={'Capacitaciones y workshops'} />
      <Benefit
        imageSource={snacksImg}
        text={'Snacks, frutas y bebidas gratis'}
      />
      <Benefit imageSource={laptopImg} text={'Semana remota'} />
      <Benefit
        imageSource={brainImg}
        text={'Trabajar en ultimas tecnologías'}
      />
    </div>
    <div className="dividerLine" />
  </div>
);

export default Benefits;
