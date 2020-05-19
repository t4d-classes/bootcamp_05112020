import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { Calculator } from '../calc-tool/Calculator';

export const CalcToolPage = (props) => {

  return (
    <>
      <SectionHeader headerText="Calc Tool Tool" />
      
      <ContentSection headerText="Calculator">
        <Calculator {...props} />
      </ContentSection>
    </>
  );

};