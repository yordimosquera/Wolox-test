import React, { useState, useEffect } from 'react';
import { services } from '../../Services/woloxApi';

const TechList = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    (async () => {
      const newTechs = await services.getTechs();
      setTechs(newTechs);
    })();
  }, []);
  console.log(techs);
  return <div>TechList</div>;
};

export default TechList;
