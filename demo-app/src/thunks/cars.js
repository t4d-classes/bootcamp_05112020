import {
  createRefreshCarsRequestAction, 
  createRefreshCarsDoneAction,
  createAddCarRequestAction,
  createSaveCarRequestAction,
  createDeleteCarRequestAction,
 } from '../actions/carActions';

import { CarsAPI } from '../services/cars-api';

export const refreshCars = () => {

  return async dispatch => {
    const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);
    dispatch(createRefreshCarsRequestAction());
    const cars =  await carsAPI.refresh();
    dispatch(createRefreshCarsDoneAction(cars));
  };

};

export const addCar = car => {

  return async dispatch => {

    const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

    dispatch(createAddCarRequestAction());

    await carsAPI.append(car);
    
    dispatch(refreshCars());
  };

};


export const saveCar = car => {

  return async dispatch => {

    const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

    dispatch(createSaveCarRequestAction());

    await carsAPI.replace(car);
    
    dispatch(refreshCars());
  };

};


export const deleteCar = carId => {

  return async dispatch => {

    const carsAPI = new CarsAPI(process.env.REACT_APP_CARS_REST_API_URL);

    dispatch(createDeleteCarRequestAction());

    await carsAPI.remove(carId);
    
    dispatch(refreshCars());
  };

};