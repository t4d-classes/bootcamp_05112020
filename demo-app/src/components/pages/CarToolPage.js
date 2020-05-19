import React from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { CarTable } from '../car-tool/CarTable';
import { CarForm } from '../car-tool/CarForm';

export const CarToolPage = ({
  cars, editCarId,
  onAddCar: addCar, onSaveCar: saveCar,
  onDeleteCar: deleteCar, onEditCar: editCar,
  onCancelCar: cancelCar }) => {

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      
      <ContentSection headerText="Car Table">
        <CarTable cars={cars} editCarId={editCarId}
          onEditCar={editCar} onDeleteCar={deleteCar}
          onSaveCar={saveCar} onCancelCar={cancelCar} />
      </ContentSection>

      <ContentSection headerText="Car Form">
        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      </ContentSection>
    </>
  );

};