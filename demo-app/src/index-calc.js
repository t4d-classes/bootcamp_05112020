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
                    addCount, subtractCount,
                    multiplyCount, divideCount,
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
    <table>
      <thead>
        <tr>
          <th>
            +
          </th>
          <th>
            -
          </th>
          <th>
            *
          </th>
          <th>
            /
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {addCount}
          </td>
          <td>
            {subtractCount}
          </td>
          <td>
            {multiplyCount}
          </td>
          <td>
            {divideCount}
          </td>
        </tr>
      </tbody>
    </table>
  </form>;

};

const CalcToolContainer = () => {

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
    } /* initial value of result */);

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

  return <CalcTool history={history} {...computedProps}
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