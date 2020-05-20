export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST';
export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';

export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createRefreshCarsRequestAction = () =>
  ({ type: REFRESH_CARS_REQUEST_ACTION });
export const createRefreshCarsDoneAction = cars =>
  ({ type: REFRESH_CARS_DONE_ACTION, cars });

export const createAddCarRequestAction = car =>
  ({ type: ADD_CAR_REQUEST_ACTION, car });
export const createSaveCarRequestAction = car =>
  ({ type: SAVE_CAR_REQUEST_ACTION, car });
export const createDeleteCarRequestAction = carId =>
  ({ type: DELETE_CAR_REQUEST_ACTION, carId });
  
export const createEditCarAction = carId =>
  ({ type: EDIT_CAR_ACTION, carId });
export const createCancelCarAction = () =>
  ({ type: CANCEL_CAR_ACTION });