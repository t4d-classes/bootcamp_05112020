import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carReducer } from '../reducers/carReducers';

export const carStore = createStore(carReducer, composeWithDevTools());