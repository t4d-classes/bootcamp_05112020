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

export function* refreshCars() {
  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);
  const cars = yield call(() => carsAPI.refresh());
  yield put(createRefreshCarsDoneAction(cars));
}

export function* appendCar(action) {
  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);
  yield call(() => carsAPI.append(action.car));
  yield put(createRefreshCarsRequestAction());
}

export function* replaceCar(action) {
  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);
  yield call(() => carsAPI.replace(action.car));
  yield put(createRefreshCarsRequestAction());
}

export function* deleteCar(action) {
  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);
  yield call(() => carsAPI.remove(action.carId));
  yield put(createRefreshCarsRequestAction());
}

export function* carsSaga() {
  yield takeLatest(REFRESH_CARS_REQUEST_ACTION, refreshCars);
  yield takeEvery(ADD_CAR_REQUEST_ACTION, appendCar);
  yield takeEvery(SAVE_CAR_REQUEST_ACTION, replaceCar);
  yield takeEvery(DELETE_CAR_REQUEST_ACTION, deleteCar);
}