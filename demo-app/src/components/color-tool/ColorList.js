import React from 'react';

import colorToolPageStyles from './ColorList.module.css';

export const ColorList = ({ colors, onDeleteColor }) => {

  return (
    <ul className={colorToolPageStyles.colorList}>
      {colors.map(c => <li key={c.id}>
        {c.name} - {c.hexcode}
        <button type="button" onClick={() => onDeleteColor(c.id)}>X</button>
      </li>)}
    </ul>
  );

};