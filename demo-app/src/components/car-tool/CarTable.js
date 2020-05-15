import React from 'react';

import { HeaderCell } from './misc';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = (
  {
    cars, editCarId,
    onEditCar: editCar, onDeleteCar: deleteCar,
    onSaveCar: saveCar, onCancelCar: cancelCar,
  }) => {

  return (
    <table>
      <thead>
        <tr>
          <HeaderCell>Id</HeaderCell>
          <HeaderCell>Make</HeaderCell>
          <HeaderCell>Model</HeaderCell>
          <HeaderCell>Year</HeaderCell>
          <HeaderCell>Color</HeaderCell>
          <HeaderCell>Price</HeaderCell>
          <HeaderCell>Action</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => editCarId === car.id
          ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

};