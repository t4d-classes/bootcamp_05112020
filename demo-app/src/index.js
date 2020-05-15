import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { calcStore } from './stores/calcStore';
import { createAddAction, createSubtractAction } from './actions/calcActions';

import { useForm } from './hooks/useForm';

const CalcTool = ({ result, onAdd, onSubtract }) => {

  const [ calcForm, change ] = useForm({ num: 0 });

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
    </div>
  </form>;

};

const CalcToolContainer = () => {

  const result = useSelector(state => state.result);

  const dispatch = useDispatch();

  const doAdd = value => dispatch(createAddAction(value));
  const doSubtract = value => dispatch(createSubtractAction(value));


  return <CalcTool result={result} onAdd={doAdd} onSubtract={doSubtract} />;
};

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);