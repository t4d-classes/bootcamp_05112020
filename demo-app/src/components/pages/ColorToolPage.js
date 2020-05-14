import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import toolPageStyles from './ToolPage.module.css';
import colorToolPageStyles from './ColorToolPage.module.css';

export const ColorToolPage = ({ colors }) => {

  const [
    colorForm, // model data, state data
    setColorForm, // function which updates the model/state data, and triggers the re-render
  ] = useState({
    name: '',
    hexcode: '',
  });

  const change = (e) => {
    // setColorForm
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
            <label for="color-name-input">Color Name:</label>
            <input type="text" id="color-name-input"
              name="color-name" value={colorForm.name} onChange={change} />
          </div>

          <div>
            <label for="color-hexcode-input">Color Hexcode:</label>
            <input type="text" id="color-hexcode-input"
              name="color-hexcode" value={colorForm.hexcode} onChange={change} />
          </div>

          <button>Add Color</button>

        </form>
      </section>
    </>
  );

};