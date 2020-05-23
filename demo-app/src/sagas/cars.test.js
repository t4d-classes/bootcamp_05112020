import { call, put } from 'redux-saga/effects';

import {
  refreshCars,
  appendCar,
  replaceCar,
  deleteCar,
  refreshCarsAPI,
  appendCarAPI,
  replaceCarAPI,
  removeCarAPI,
} from './cars';

import {
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  createAddCarRequestAction,
  createSaveCarRequestAction,
  createDeleteCarRequestAction,
} from '../actions/carActions';

describe('Car Saga', () => {

  test('Refresh Cars', () => {
    const iterator = refreshCars();

    expect(iterator.next().value).toEqual(call(refreshCarsAPI));

    const cars = [
      {
        id: 1,
        make: 'Ford',
        model: 'Fusion Hybrid',
        year: 2019,
        color: 'red',
        price: 100,
      },
    ];

    expect(iterator.next(cars).value).toEqual(
      put(createRefreshCarsDoneAction(cars)),
    );

  });

  test('Append Car', () => {

    const car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = appendCar(createAddCarRequestAction(car));

    expect(iterator.next().value).toEqual(call(appendCarAPI, car));

    car.id = 1;

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Replace Car', () => {

    const car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = replaceCar(createSaveCarRequestAction(car));

    expect(iterator.next().value).toEqual(call(replaceCarAPI, car));

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Delete Car', () => {

    const carId = 1;

    const iterator = deleteCar(createDeleteCarRequestAction(carId));

    expect(iterator.next().value).toEqual(call(removeCarAPI, carId));

    expect(iterator.next().value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

});
