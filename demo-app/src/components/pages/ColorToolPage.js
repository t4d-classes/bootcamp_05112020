import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import toolPageStyles from './ToolPage.module.css';
import colorToolPageStyles from './ColorToolPage.module.css';

import { useForm } from '../../hooks/useForm';


export const ColorToolPage = ({ colors: initialColors }) => {

  const [ colorForm, change, resetColorForm ] = useForm({
    name: '', hexcode: '',
  });

  const [ colors, setColors ] = useState(initialColors.concat());

  const addColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    resetColorForm();

  };

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Color List
        </h3>

        <ul className={colorToolPageStyles.colorList}>
          {colors.map(c => <li key={c.id}>
            {c.name} - {c.hexcode}
          </li>)}
        </ul>
      </section>

      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Color Form
        </h3>
        
        <form>

          <div>
            <label htmlFor="color-name-input">Color Name:</label>
            <input type="text" id="color-name-input"
              name="name" value={colorForm.name} onChange={change} />
          </div>

          <div>
            <label htmlFor="color-hexcode-input">Color Hexcode:</label>
            <input type="text" id="color-hexcode-input"
              name="hexcode" value={colorForm.hexcode} onChange={change} />
          </div>

          <button type="button" onClick={addColor}>Add Color</button>

        </form>
      </section>
    </>
  );

};