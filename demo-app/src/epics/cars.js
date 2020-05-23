import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map, mergeMap } from 'rxjs/operators';

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
    // take latest
    switchMap(() => carsAPI.refresh()),
    map(cars => createRefreshCarsDoneAction(cars)),
  ); 
};

const addCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(ADD_CAR_REQUEST_ACTION),
    // take every
    mergeMap(({ car }) => carsAPI.append(car)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

const saveCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(SAVE_CAR_REQUEST_ACTION),
    mergeMap(({ car }) => carsAPI.replace(car)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

const deleteCarEpic = action$ => {

  const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

  return action$.pipe(
    ofType(DELETE_CAR_REQUEST_ACTION),
    mergeMap(({ carId }) => carsAPI.remove(carId)),
    map(() => createRefreshCarsRequestAction()),
  ); 
};

export const carsEpics = combineEpics(
  refreshCarsEpic,
  addCarEpic,
  saveCarEpic,
  deleteCarEpic,
);