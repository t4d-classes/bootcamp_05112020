import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { CarTable } from '../car-tool/CarTable';
import { CarForm } from '../car-tool/CarForm';

import toolPageStyles from './ToolPage.module.css';

export const CarToolPage = ({
  cars, editCarId,
  onAddCar: addCar, onSaveCar: saveCar,
  onDeleteCar: deleteCar, onEditCar: editCar,
  onCancelCar: cancelCar }) => {

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      
      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Car Table
        </h3>

        <CarTable cars={cars} editCarId={editCarId}
                  onEditCar={editCar} onDeleteCar={deleteCar}
                  onSaveCar={saveCar} onCancelCar={cancelCar} />
      </section>

      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Car Form
        </h3>

        <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      </section>
    </>
  );

};