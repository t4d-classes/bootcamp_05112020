import { createStore } from 'redux';

import { calcReducer } from '../reducers/calcReducers';

export const calcStore = createStore(calcReducer);