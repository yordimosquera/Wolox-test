import React from 'react';
import './style.scss';
import Requirement from '../../../../components/Requirement';

import bullet3 from '../../../../../public/assets/images/Ic_Bullet_3.svg';
import bullet2 from '../../../../../public/assets/images/Ic_Bullet_2.svg';
import bullet1 from '../../../../../public/assets/images/Ic_Bullet_1.svg';

const Requirements = () => (
  <div id="requirements" className="requirementsSection">
    <p className="requirement">{'Requerimientos'}</p>
    <div className="requirementsContainer">
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
    </div>
  </div>
);

export default Requirements;
