import React from 'react';

import { DataCell } from './misc';

export const CarViewRow = ({ car, onDeleteCar: deleteCar }) => {

  return (
    <tr>
      <DataCell>{car.id}</DataCell>
      <DataCell>{car.make}</DataCell>
      <DataCell>{car.model}</DataCell>
      <DataCell>{car.year}</DataCell>
      <DataCell>{car.color}</DataCell>
      <DataCell>{car.price}</DataCell>
      <DataCell>
        <button type="button" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </DataCell>
    </tr>
  );


};