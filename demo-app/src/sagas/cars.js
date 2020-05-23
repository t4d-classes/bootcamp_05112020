import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import {
  REFRESH_CARS_REQUEST_ACTION,
  ADD_CAR_REQUEST_ACTION,
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  DELETE_CAR_REQUEST_ACTION,
  SAVE_CAR_REQUEST_ACTION,
} from '../actions/carActions';

import { CarsAPI } from '../services/cars-api';

const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

export const refreshCarsAPI = () => carsAPI.refresh();
export const appendCarAPI = (...params) => carsAPI.append(...params);
export const replaceCarAPI = (...params) => carsAPI.replace(...params);
export const removeCarAPI = (...params) => carsAPI.remove(...params);

export function* refreshCars() {
  const cars = yield call(refreshCarsAPI);
  yield put(createRefreshCarsDoneAction(cars));
}

export function* appendCar(action) {
  yield call(appendCarAPI, action.car);
  yield put(createRefreshCarsRequestAction());
}

export function* replaceCar(action) {
  yield call(replaceCarAPI, action.car);
  yield put(createRefreshCarsRequestAction());
}

export function* deleteCar(action) {
  yield call(removeCarAPI, action.carId);
  yield put(createRefreshCarsRequestAction());
}

export function* carsSaga() {
  yield takeLatest(REFRESH_CARS_REQUEST_ACTION, refreshCars);
  yield takeEvery(ADD_CAR_REQUEST_ACTION, appendCar);
  yield takeEvery(SAVE_CAR_REQUEST_ACTION, replaceCar);
  yield takeEvery(DELETE_CAR_REQUEST_ACTION, deleteCar);
}