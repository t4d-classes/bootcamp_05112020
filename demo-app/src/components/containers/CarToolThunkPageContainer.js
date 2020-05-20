import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createEditCarAction, createCancelCarAction,
} from '../../actions/carActions';

import { 
  refreshCars, addCar, saveCar, deleteCar,
} from '../../thunks/cars';

import { CarToolPage } from '../pages/CarToolPage';

export const CarToolThunkPageContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const dispatchProps = bindActionCreators({
    onRefreshCars: refreshCars,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, useDispatch());


  return <CarToolPage
    {...dispatchProps}
    cars={cars}
    editCarId={editCarId}
    headerText="Car Tool Thunk" />;
};