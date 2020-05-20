import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createRefreshCarsRequestAction,
  createAddCarRequestAction,
  createSaveCarRequestAction,
  createDeleteCarRequestAction,
  createEditCarAction,
  createCancelCarAction,
} from '../../actions/carActions';

import { CarToolPage } from '../pages/CarToolPage';

export const CarToolObservablePageContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const dispatchProps = bindActionCreators({
    onRefreshCars: createRefreshCarsRequestAction,
    onAddCar: createAddCarRequestAction,
    onSaveCar: createSaveCarRequestAction,
    onDeleteCar: createDeleteCarRequestAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, useDispatch());


  return <CarToolPage
    {...dispatchProps}
    cars={cars}
    editCarId={editCarId}
    headerText="Car Tool Observable" />;
};