import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

import styles from './ColorToolPage.module.css';

export const ColorToolPage = ({ colors }) => {

  // const colors = props.colors;
  // const { colors } = props;

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
    </>
  );

};