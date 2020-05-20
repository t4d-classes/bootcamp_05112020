import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { ContentSection } from '../blocks/ContentSection';
import { CarTable } from '../car-tool/CarTable';
import { CarForm } from '../car-tool/CarForm';

export const CarToolPage = ({
  cars, editCarId,
  onRefreshCars: refreshCars,
  onAddCar: addCar,
  onSaveCar: saveCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
  headerText,
}) => {

  useEffect(() => {

    refreshCars();

  }, []);

  return (
    <>
      <SectionHeader headerText={headerText} />
      
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