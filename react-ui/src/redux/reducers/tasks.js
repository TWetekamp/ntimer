import { MANAGE_TASKS } from '../actionTypes';

const initialState = [];

function tasks (state=initialState, action) {
  if (action.type === MANAGE_TASKS) {
    return action.payload.taskname;
  }
  return state;
};

export default tasks;