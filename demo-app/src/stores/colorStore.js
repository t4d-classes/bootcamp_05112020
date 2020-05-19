import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorReducer } from '../reducers/colorReducers';

export const colorStore = createStore(colorReducer, composeWithDevTools());