import { combineReducers } from "redux";

import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION,
  CANCEL_CAR_ACTION,
} from '../actions/carActions';

export const carsReducer = (cars = [], action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.cars;
  }

  return cars;
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if (action.type === REFRESH_CARS_DONE_ACTION || action.type ===  CANCEL_CAR_ACTION) {
    return -1;
  }

  return editCarId;

};

export const carReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});