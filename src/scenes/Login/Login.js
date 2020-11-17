import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import {
  INPUT_TEXT_FIELDS,
  defaultColors,
  LOGIN_ERRORS,
  ROUTES
} from '../../constants';
import AuthContext from '../../store/Auth/context';
import { validateLogin } from '../../services/utils';
import './style.scss';
import MainLogo from '../../components/MainLogo';
import woloxLogo from '../../../public/assets/images/logo_full_color.svg';
import { BiUser } from 'react-icons/bi';

const { OK } = LOGIN_ERRORS;
const { EMAIL, PASSWORD } = INPUT_TEXT_FIELDS;
const { blue } = defaultColors;
const { TECHS } = ROUTES;

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null
  });

  const [validationError, setError] = useState(null);
  const [keepAuth, setKeepAuth] = useState(false);

  const authContext = useContext(AuthContext);
  const { authLogin } = authContext;

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const loginValidation = validateLogin(credentials);
    if (loginValidation === OK) {
      await authLogin({ ...credentials, keepAuth });
      setError(loginValidation);
      history.push(TECHS);
    } else {
      setError(loginValidation);
    }
  };

  return (
    <div className="screenContainer">
      <MainLogo logo={woloxLogo} />
      <form className="loginWrapper" onSubmit={onSubmit}>
        <InputText name={EMAIL} handleChange={onChange} placeHolder={EMAIL}>
          <BiUser />
        </InputText>
        <InputText
          name={PASSWORD}
          handleChange={onChange}
          placeHolder={PASSWORD}
          type="password"
        />
        <Button type={'submit'} text={'Login'} backgroundColor={blue} />
        <label className="checkbox">
          <input
            type="checkbox"
            keepAuth={keepAuth}
            onChange={() => setKeepAuth(!keepAuth)}
          />
          {'Permanecer conectado'}
        </label>
      </form>
      {validationError === OK ? null : <p>{validationError}</p>}
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.func
};

export default Login;
