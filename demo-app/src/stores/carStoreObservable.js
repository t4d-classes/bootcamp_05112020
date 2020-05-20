import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { carReducer } from '../reducers/carReducers';
import { carsEpics } from '../epics/cars';

const epicMiddleware = createEpicMiddleware();

export const carStoreObservable = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(carsEpics);
