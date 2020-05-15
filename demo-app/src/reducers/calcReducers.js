
import { ADD_ACTION, SUBTRACT_ACTION } from '../actions/calcActions';

export const calcReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.value,
      };
    default:
      return state;
  }


};