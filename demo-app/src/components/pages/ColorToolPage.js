import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import styles from './ColorToolPage.module.css';

export const ColorToolPage = (props) => {

  // props.colors.push({ id: 4, name: 'purple', hexcode: '' });


  return (
    <>
      <SectionHeader headerText="Color Tool" />
      <section>
        <h3 className={styles.contentSectionHeader}>
          Color List
        </h3>

        <ul className={styles.colorList}>
          {props.colors.map(c => <li key={c.id}>
            {c.name} - {c.hexcode}
          </li>)}
        </ul>
      </section>
    </>
  );

};