import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddCarAction, createSaveCarAction,
  createDeleteCarAction, createEditCarAction,
  createCancelCarAction
} from '../../actions/carActions';

import { CarToolPage } from '../pages/CarToolPage';

export const CarToolPageContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const dispatchProps = bindActionCreators({
    onAddCar: createAddCarAction,
    onSaveCar: createSaveCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, useDispatch());


  return <CarToolPage {...dispatchProps} cars={cars} editCarId={editCarId} />;
};