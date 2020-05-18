import { combineReducers } from 'redux';

import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
} from '../actions/calcActions';

// new state = reducerFn(current state, action)

export const resultReducer = (result = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return result + action.value;
    case SUBTRACT_ACTION:
      return result - action.value;
    case MULTIPLY_ACTION:
      return result * action.value;
    case DIVIDE_ACTION:
      return result / action.value;
    default:
      return result;
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

export const historyReducer = (history = [], action) => {
  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    return history.concat({
      opName: getOperator(action.type),
      opValue: action.value,
    });
  } else {
    return history;
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