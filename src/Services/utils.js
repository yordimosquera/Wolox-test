import { SORT_MODES, TECH_FIELDS, LOGIN_ERRORS } from '../constants';
const { ASCENDANT } = SORT_MODES;

export const sortItemsFromArray = ({
  items,
  key = TECH_FIELDS.TECH,
  mode = ASCENDANT
}) =>
  items
    .filter(item => key in item)
    .sort((a, b) => {
      if (mode === ASCENDANT) {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });

export const validateLogin = ({ email, password }) => {
  const { EMAIL, PASSWORD, BOTH, OK } = LOGIN_ERRORS;
  const regularExpression = /\S+@\S+\.\S+/;
  const emailValidation = regularExpression.test(email);
  if (!password && !emailValidation) return BOTH;
  if (!password) return PASSWORD;
  if (!emailValidation) return EMAIL;
  return OK;
};

export const filterArrayByKey = ({ items, key, value }) =>
  items.filter(item => item[key] === value);
