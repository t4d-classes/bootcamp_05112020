import React from "react";

import { useForm } from "../../hooks/useForm";

export const Calculator = ({
  result,
  history,
  addCount,
  subtractCount,
  multiplyCount,
  divideCount,
  onAdd,
  onSubtract,
  onMultiply,
  onDivide,
  onClear,
  onDeleteEntry,
}) => {
  const [calcForm, change, resetCalcForm] = useForm({ num: 0 });

  const clear = () => {
    onClear();
    resetCalcForm();
  };

  return (
    <form>
      <div>Result: {result}</div>
      <div>
        <input
          type="number"
          name="num"
          value={calcForm.num}
          onChange={change}
        />
      </div>
      <div>
        <button type="button" onClick={() => onAdd(calcForm.num)}>
          +
        </button>
        <button type="button" onClick={() => onSubtract(calcForm.num)}>
          -
        </button>
        <button type="button" onClick={() => onMultiply(calcForm.num)}>
          *
        </button>
        <button type="button" onClick={() => onDivide(calcForm.num)}>
          /
        </button>
        <button type="button" onClick={clear}>
          Clear
        </button>
      </div>
      <ul>
        {history.map((entry, i) => (
          <li key={i}>
            {entry.opName} {entry.opValue}
            <button type="button" onClick={() => onDeleteEntry(i)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            <th>+</th>
            <th>-</th>
            <th>*</th>
            <th>/</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{addCount}</td>
            <td>{subtractCount}</td>
            <td>{multiplyCount}</td>
            <td>{divideCount}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
