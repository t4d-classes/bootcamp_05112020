import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import {
  REFRESH_CARS_REQUEST_ACTION,
  ADD_CAR_REQUEST_ACTION,
  SAVE_CAR_REQUEST_ACTION,
  DELETE_CAR_REQUEST_ACTION,
  createRefreshCarsDoneAction,
  createRefreshCarsRequestAction,
} from '../actions/carActions';

import { CarsAPI } from '../services/cars-api';


const refreshCarsEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(REFRESH_CARS_REQUEST_ACTION),
    switchMap(() => carsAPI.refresh()),
    map(cars => createRefreshCarsDoneAction(cars)),
  ); 
};

const addCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(ADD_CAR_REQUEST_ACTION),
    switchMap(({ car }) => carsAPI.append(car)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

const saveCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(SAVE_CAR_REQUEST_ACTION),
    switchMap(({ car }) => carsAPI.replace(car)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

const deleteCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(DELETE_CAR_REQUEST_ACTION),
    switchMap(({ carId }) => carsAPI.remove(carId)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

export const carsEpics = combineEpics(
  refreshCarsEpic,
  addCarEpic,
  saveCarEpic,
  deleteCarEpic,
);