import React, { useState } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { CarTable } from '../car-tool/CarTable';
import { CarForm } from '../car-tool/CarForm';

import toolPageStyles from './ToolPage.module.css';

export const CarToolPage = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars);
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const replaceCar = car => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  return (
    <>
      <SectionHeader headerText="Color Tool" />
      
      <section>
        <h3 className={toolPageStyles.contentSectionHeader}>
          Car Table
        </h3>

        <CarTable cars={cars} editCarId={editCarId}
                  onEditCar={setEditCarId} onDeleteCar={deleteCar}
                  onSaveCar={replaceCar} onCancelCar={() => setEditCarId(-1)} />
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