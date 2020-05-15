import React from 'react';

import { DataCell } from './misc';
import { useForm } from '../../hooks/useForm';

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {

  const [ carForm, change ] = useForm({
    ...car
  });

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  return (
    <tr>
      <DataCell>{car.id}</DataCell>
      <DataCell>
        <input type="text" id="make-input" name="make"
               value={carForm.make} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="model-input" name="model"
               value={carForm.model} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="number" id="year-input" name="year"
               value={carForm.year} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="text" id="color-input" name="color"
               value={carForm.color} onChange={change} />
      </DataCell>
      <DataCell>
        <input type="number" id="price-input" name="price"
               value={carForm.price} onChange={change} />
      </DataCell>
      <DataCell>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </DataCell>
    </tr>
  );


};