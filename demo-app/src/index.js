import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { calcStore } from './stores/calcStore';
import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteEntryAction
} from './actions/calcActions';

import { useForm } from './hooks/useForm';

const CalcTool = ({
                    result, history,
                    onAdd, onSubtract,
                    onMultiply, onDivide,
                    onClear, onDeleteEntry,
                  }) => {

  const [ calcForm, change, resetCalcForm ] = useForm({ num: 0 });

  const clear = () => {
    onClear();
    resetCalcForm();
  };

  return <form>
    <div>
      Result: {result}
    </div>
    <div>
      <input type="number" name="num"
        value={calcForm.num} onChange={change} />
    </div>
    <div>
      <button type="button" onClick={() => onAdd(calcForm.num)}>+</button>
      <button type="button" onClick={() => onSubtract(calcForm.num)}>-</button>
      <button type="button" onClick={() => onMultiply(calcForm.num)}>*</button>
      <button type="button" onClick={() => onDivide(calcForm.num)}>/</button>
      <button type="button" onClick={clear}>Clear</button>
    </div>
    <ul>
      {history.map( (entry, i) => <li key={i}>
        {entry.opName} {entry.opValue}
        <button type="button" onClick={() => onDeleteEntry(i)}>X</button>
      </li>)}
    </ul>
  </form>;

};

const CalcToolContainer = () => {

  const result = useSelector(state => {

    return state.history.reduce( (result, entry) => {
      
      switch (entry.opName) {
        case '+':
          return result + entry.opValue;
        case '-':
          return result - entry.opValue;
        case '*':
          return result * entry.opValue;
        case '/':
          return result / entry.opValue;
        default:
          return result;
      }
      
    }, 0 /* initial value of result */);

  });

  // const result = useSelector(state => {

  //   let result = 0;

  //   state.history.forEach(entry => {

  //     switch (entry.opName) {
  //       case '+':
  //         result += entry.opValue;
  //         break;
  //       case '-':
  //         result -= entry.opValue;
  //         break;
  //       case '*':
  //         result *= entry.opValue;
  //         break;
  //       case '/':
  //         result /= entry.opValue;
  //         break;
  //       default:
  //         break;
  //     }
  //   });

  //   return result;

  // });


  const history = useSelector(state => state.history);

  const dispatch = useDispatch();

  const doAdd = value => dispatch(createAddAction(value));
  const doSubtract = value => dispatch(createSubtractAction(value));
  const doMultiply = value => dispatch(createMultiplyAction(value));
  const doDivide = value => dispatch(createDivideAction(value));
  const doClear = () => dispatch(createClearAction());
  const doCreateDeleteEntryAction = (entryIndex) => dispatch(createDeleteEntryAction(entryIndex));

  return <CalcTool result={result} history={history}
                   onAdd={doAdd} onSubtract={doSubtract}
                   onMultiply={doMultiply} onDivide={doDivide}
                   onClear={doClear} onDeleteEntry={doCreateDeleteEntryAction} />;
};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);