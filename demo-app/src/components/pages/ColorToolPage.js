import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import styles from './ColorToolPage.module.css';

export const ColorToolPage = ({ colors }) => {

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      <section>
        <h3 className={styles.contentSectionHeader}>
          Color List
        </h3>

        <ul className={styles.colorList}>
          {colors.map(c => <li key={c.id}>
            {c.name} - {c.hexcode}
          </li>)}
        </ul>
      </section>

      <section>
        <h3 className={styles.contentSectionHeader}>
          Color Form
        </h3>
        
        <form>

          <div>
            <label for="color-name-input">Color Name:</label>
            <input type="text" id="color-name-input"
              name="color-name" value="" />
          </div>

          <div>
            <label for="color-hexcode-input">Color Hexcode:</label>
            <input type="text" id="color-hexcode-input"
              name="color-hexcode" value="" />
          </div>

          <button>Add Color</button>

        </form>
      </section>
    </>
  );

};