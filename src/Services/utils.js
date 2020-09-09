import { SORT_MODES, TECH_FIELDS } from '../constants';
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
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
      }
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;

      return 0;
    });
