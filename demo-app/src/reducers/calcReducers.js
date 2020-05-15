import { combineReducers } from 'redux';

import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
} from '../actions/calcActions';

export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    case MULTIPLY_ACTION:
      return state * action.value;
    case DIVIDE_ACTION:
      return state / action.value;
    default:
      return state;
  }
};

export const historyReducer = (state = [], action) => {
  return state.concat({ opName: action.type, opValue: action.value });
};

// export const calcReducer = (state = { }, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const calcReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});