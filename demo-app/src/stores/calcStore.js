import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { calcReducer } from '../reducers/calcReducers';

export const calcStore = createStore(calcReducer, composeWithDevTools());