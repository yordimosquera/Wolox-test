import React, { useState, useEffect, useContext, Suspense, lazy } from 'react';
import InputText from '../../components/InputText';
import TechContext from '../../store/Technologies/context';
import MainLogo from '../../components/MainLogo';
import woloxLogo from '../../../public/assets/images/logo_full_color.svg';
import { BiSearchAlt2 } from 'react-icons/bi';
import CustomSelect from '../../components/CustomSelect';
import { TECH_TYPES, SORT_MODES, defaultColors } from '../../constants';
import CustomInputRadio from '../../components/CustomInputRadio';
import Button from '../../components/Button';
import './style.scss';
const TechCard = lazy(() => import('../../components/TechCard/TechCard'));
// import ErrorBoundary from '../../components/ErrorBoundary';
const { blue } = defaultColors;

const TechList = () => {
  const [searchOptions, setSearchOptions] = useState({
    keyword: '',
    mode: SORT_MODES.ASCENDANT,
    type: null
  });

  const techContext = useContext(TechContext);
  const { getTechs, filterTechs, currentTechs, error } = techContext;

  const handleChange = (field, value) => {
    setSearchOptions({ ...searchOptions, [field]: value });
    filterTechs({ ...searchOptions, [field]: value, field: 'tech' });
  };

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div className="screenContainer">
      <MainLogo logo={woloxLogo} />
      <div className="filterBar">
        <InputText
          value={searchOptions.keyword}
          handleChange={e => {
            handleChange('keyword', e.target.value);
          }}
          placeHolder={'tech'}
        >
          <BiSearchAlt2 />
        </InputText>
        <CustomSelect
          options={TECH_TYPES}
          handleChange={e => {
            handleChange('type', e.target.value);
          }}
        />
        <div className="modeWrapper">
          <CustomInputRadio
            description={'Asc'}
            name={'mode'}
            value={SORT_MODES.ASCENDANT}
            handleChange={e => {
              handleChange('mode', e.target.value);
            }}
          />
          <CustomInputRadio
            description={'Desc'}
            name={'mode'}
            value={SORT_MODES.DESCENDANT}
            handleChange={e => {
              handleChange('mode', e.target.value);
            }}
          />
        </div>
      </div>

      <Button
        type={'submit'}
        text={'Restablecer'}
        backgroundColor={blue}
        onClick={getTechs}
      />
      {/* <SuspenseList revealOrder="forwards"> */}
      <div className="techWrapper">
        {currentTechs.map((tech, index) => (
          <Suspense fallback={<h1>Loading tech...</h1>} key={index}>
            <TechCard data={tech} />
          </Suspense>
        ))}
      </div>
      {/* </SuspenseList> */}

      <p>{`Techs: ${currentTechs.length}`}</p>
    </div>
  );
};

export default TechList;
