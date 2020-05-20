import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { carReducer } from '../reducers/carReducers';
import { carsSaga } from '../sagas/cars';

const sagaMiddleware = createSagaMiddleware();

export const carStoreSaga = createStore(carReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(carsSaga);