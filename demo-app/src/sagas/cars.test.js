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

  // below are some comments for the refresh cars and how the iteration process works
  // the code under test hits a yield, control returns to the unit test, where
  // the value returned by the yield can be asseted

  test('Refresh Cars', () => {

    // create the iterator from the generator function
    const iterator = refreshCars();

    // trigger the call to the refresh cars API and
    // expect the correct call functional invocation
    // testing this code: const cars = yield call(refreshCarsAPI);
    expect(iterator.next().value).toEqual(call(refreshCarsAPI));

    // the mock data to return
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

    // iterate to the code on the other side of the yield which
    // dispatches the done action of the cars
    // testing this code: yield put(createRefreshCarsDoneAction(cars));
    expect(iterator.next(cars).value).toEqual(
      put(createRefreshCarsDoneAction(cars)),
    );

    // this process for this unit test is the same for all of the code below

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
