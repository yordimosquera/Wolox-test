import React, { useState, useEffect, useContext } from 'react';
import TechCard from '../../components/TechCard/TechCard';
import InputText from '../../components/InputText';
import TechContext from '../../store/Technologies/context';

const TechList = () => {
  const [keyword, setKeyword] = useState('');

  const techContext = useContext(TechContext);
  const { getTechs, filterTechs, currentTechs } = techContext;

  const handleChange = e => {
    setKeyword(e);
    filterTechs({ keyword: e });
  };

  useEffect(() => {
    getTechs();
  }, []);
  return (
    <div>
      <InputText
        value={keyword}
        handleChange={e => handleChange(e.target.value)}
      />
      {currentTechs.map((tech, index) => (
        <TechCard data={tech} key={index} />
      ))}
    </div>
  );
};

export default TechList;
