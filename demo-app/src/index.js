import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { calcStore } from './stores/calcStore';
import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction,
} from './actions/calcActions';

import { useForm } from './hooks/useForm';

const CalcTool = ({
                    result, history,
                    onAdd, onSubtract,
                    onMultiply, onDivide,
                    onClear,
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
      {history.map( (entry, i) => <li key={i}>{entry.opName}{entry.opValue}</li>)}
    </ul>
  </form>;

};

const CalcToolContainer = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

  const dispatch = useDispatch();

  const doAdd = value => dispatch(createAddAction(value));
  const doSubtract = value => dispatch(createSubtractAction(value));
  const doMultiply = value => dispatch(createMultiplyAction(value));
  const doDivide = value => dispatch(createDivideAction(value));
  const doClear = () => dispatch(createClearAction());

  return <CalcTool result={result} history={history}
                   onAdd={doAdd} onSubtract={doSubtract}
                   onMultiply={doMultiply} onDivide={doDivide}
                   onClear={doClear} />;
};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);