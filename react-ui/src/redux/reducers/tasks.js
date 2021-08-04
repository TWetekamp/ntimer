import { MANAGE_TASKS } from '../actionTypes';

const initialState = [];

function tasks (state=initialState, action) {
  if (action.type === MANAGE_TASKS) {
    const copy = state.slice()
    copy.push(action.payload.task)
    return copy;
  }
  return state;
};

export default tasks;