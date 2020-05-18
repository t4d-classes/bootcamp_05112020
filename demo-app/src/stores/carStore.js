import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carReducer } from '../reducers/carReducer';

export const carStore = createStore(carReducer, composeWithDevTools());