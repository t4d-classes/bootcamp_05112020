

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_ENTRY_ACTION = 'DELETE_ENTRY';

export const createAddAction = value => ({ type: ADD_ACTION, value });
export const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });
export const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, value });
export const createDivideAction = value => ({ type: DIVIDE_ACTION, value });
export const createClearAction = () => ({ type: CLEAR_ACTION });
export const createDeleteEntryAction = (entryIndex) => ({ type: DELETE_ENTRY_ACTION, entryIndex });


