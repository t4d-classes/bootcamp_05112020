import React from 'react';

import contentSectionStyles from './ContentSection.module.css';

export const ContentSection = ({ headerText, children }) => {

  return (
    <section>
      <h3 className={contentSectionStyles.contentSectionHeader}>
        {headerText}
      </h3>
      {children}
    </section>
  );
}