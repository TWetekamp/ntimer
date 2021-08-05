import { MANAGE_TASKS } from '../actionTypes';

const initialState = [];

function tasks (state=initialState, action) {
  if (action.type === MANAGE_TASKS) {
    console.log("reducer",action.payload)
    const newTask = state.slice();
    newTask.push(action.payload);
    return newTask;
  }
  return state;
};

export default tasks;