import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { CarTable } from '../car-tool/CarTable';
import { CarForm } from '../car-tool/CarForm';

import toolPageStyles from './ToolPage.module.css';

export const CarToolPage = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars);

  const addCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
  };

  const deleteCar = carId => {
    console.log('delete car: ', carId);
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      
      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Car Table
        </h3>

        <CarTable cars={cars} onDeleteCar={deleteCar}  />
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