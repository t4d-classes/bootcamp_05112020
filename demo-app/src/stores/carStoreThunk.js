import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carReducer } from '../reducers/carReducers';

export const carStoreThunk = createStore(
  carReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);