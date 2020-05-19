import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorReducer } from '../reducers/colorReducers';

export const colorStore = createStore(
  colorReducer,
  // places thunk middleware into the pipeline
  // think will looks for actions which are functions
  composeWithDevTools(applyMiddleware(thunk)),
);