import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteEntryAction
} from '../../actions/calcActions';

import { CalcToolPage } from '../pages/CalcToolPage';

export const CalcToolPageContainer = () => {

  const computedProps = useSelector(state => {

    return state.history.reduce( (acc, entry) => {

      switch (entry.opName) {
        case '+':
          return {
            ...acc,
            result: acc.result + entry.opValue,
            addCount: acc.addCount + 1,
          };
        case '-':
          return {
            ...acc,
            result: acc.result - entry.opValue,
            subtractCount: acc.subtractCount + 1,
          };
        case '*':
          return {
            ...acc,
            result: acc.result * entry.opValue,
            multiplyCount: acc.multiplyCount + 1,
          };
        case '/':
          return {
            ...acc,
            result: acc.result / entry.opValue,
            divideCount: acc.divideCount + 1,
          };
        default:
          return acc;
      }
      
    }, {
      result:0,
      addCount:0, subtractCount:0,
      multiplyCount:0, divideCount:0,
    });

  });

  const history = useSelector(state => state.history);

  const dispatchProps = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteEntry: createDeleteEntryAction,
  }, useDispatch());

  return <CalcToolPage {...dispatchProps}
    history={history} {...computedProps} />;
};