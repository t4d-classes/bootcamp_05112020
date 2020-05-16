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

const getOperator = (actionType) => {

  switch (actionType) {
    case ADD_ACTION:
      return '+';
    case SUBTRACT_ACTION:
      return '-';
    case MULTIPLY_ACTION:
      return '*';
    case DIVIDE_ACTION:
      return '/';
    default:
      return '';
  }

};

export const historyReducer = (state = [], action) => {
  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return state.concat({
      opName: getOperator(action.type),
      opValue: action.value,
    });
  } else {
    return state;
  }
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