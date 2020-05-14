import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';

export const ColorToolPage = () => {

  const colors = [
    { id: 1, name: 'red', hexcode: '#FF0000' },
    { id: 2, name: 'green', hexcode: '#00FF00' },
    { id: 3, name: 'blue', hexcode: '#0000FF' },
  ];

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      <section>
        <h3>Color List</h3>

        <ul>
          {colors.map(c => <li key={c.id}>
            {c.name} - {c.hexcode}
          </li>)}
        </ul>
      </section>
    </>
  );

};