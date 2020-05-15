import React from 'react';

import { HeaderCell } from './misc';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {

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
        {cars.map(car =>
          <CarViewRow key={car.id} car={car} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

};