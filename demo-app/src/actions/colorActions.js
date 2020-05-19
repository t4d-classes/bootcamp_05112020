
export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = (colors) => ({ type: REFRESH_COLORS_DONE_ACTION, colors });
export const createAddColorRequestAction = color => ({ type: ADD_COLOR_REQUEST_ACTION, color });
export const createDeleteColorRequestAction = colorId => ({ type: DELETE_COLOR_REQUEST_ACTION, colorId });

export const refreshColors = () => {

  // this is the function dispatched into the action pipeline,
  // return think will see its a function, invoking it passing
  // in the store's dispatch method
  return dispatch => {

    // this is the request action which is dispatched just before
    // the REST API call is made
    dispatch(createRefreshColorsRequestAction());
    return fetch('http://localhost:3060/colors')
      .then(res => res.json())
      // this is the done action which is dispatched when the response
      // is received from the REST API
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)));

  };

};

export const addColor = color => {

  return dispatch => {

    dispatch(createAddColorRequestAction(color));
    return fetch('http://localhost:3060/colors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(color),
    })
      .then(() => dispatch(refreshColors()));

  };

};

export const deleteColor = colorId => {

  return dispatch => {

    dispatch(createDeleteColorRequestAction(colorId));
    return fetch('http://localhost:3060/colors/' + encodeURIComponent(colorId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshColors()));

  };

};