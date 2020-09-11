import React, { useState, useEffect, useContext } from 'react';
import TechCard from '../../components/TechCard/TechCard';
import InputText from '../../components/InputText';
import TechContext from '../../store/Technologies/context';
import { filterArrayByKey } from '../../services/utils';
import { TECH_TYPES } from '../../constants';

const TechList = () => {
  const [keyword, setKeyword] = useState('');
  const [techType, setTechType] = useState();

  const techContext = useContext(TechContext);
  const { getTechs, filterTechs, currentTechs } = techContext;

  const handleChange = e => {
    setKeyword(e);
    filterTechs({ keyword: e });
  };

  const handleChangeTechType = e => {
    setTechType(e);
  };

  useEffect(() => {
    getTechs();
  }, []);
  console.log(
    filterArrayByKey({ items: currentTechs, key: 'type', value: 'Mobile' })
  );
  console.log(techType);
  return (
    <>
      <InputText
        value={keyword}
        handleChange={e => handleChange(e.target.value)}
      />
      <>
        <input
          type="radio"
          name="techType"
          value={TECH_TYPES.MOBILE}
          onChange={e => handleChangeTechType(e.target.value)}
        />
        <input
          type="radio"
          name="techType"
          value={TECH_TYPES.FRONT_END}
          onChange={e => handleChangeTechType(e.target.value)}
        />
        <input
          type="radio"
          name="techType"
          value={TECH_TYPES.BACK_END}
          onChange={e => handleChangeTechType(e.target.value)}
        />
      </>
      {currentTechs.map((tech, index) => (
        <TechCard data={tech} key={index} />
      ))}
      <p>{`Techs: ${currentTechs.length}`}</p>
    </>
  );
};

export default TechList;
