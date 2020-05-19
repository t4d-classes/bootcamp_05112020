import {
  REFRESH_COLORS_DONE_ACTION,
} from '../actions/colorActions';

export const colorReducer = (colors = [], action) => {

  if (action.type === REFRESH_COLORS_DONE_ACTION) {
    return action.colors;
  }

  return colors;

};
