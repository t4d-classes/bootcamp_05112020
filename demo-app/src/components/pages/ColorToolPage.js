import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { ColorList } from '../color-tool/ColorList';
import { ColorForm } from '../color-tool/ColorForm';

export const ColorToolPage = ({
  colors,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
}) => {

  return (
    <>
      <SectionHeader headerText="Color Tool" />

      <ContentSection headerText="Color List">
        <ColorList colors={colors} onDeleteColor={deleteColor} />
      </ContentSection>

      <ContentSection headerText="Color Form">
        <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
      </ContentSection>
    </>
  );

};