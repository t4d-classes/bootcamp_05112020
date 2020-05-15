import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ColorForm } from '../color-tool/ColorForm';

import toolPageStyles from './ToolPage.module.css';
import colorToolPageStyles from './ColorToolPage.module.css';


export const ColorToolPage = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState(initialColors.concat());

  const addColor = (color) => {

    setColors(colors.concat({
      ...color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

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
        
        <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
      </section>
    </>
  );

};