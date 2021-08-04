import { GET_TASKNAME } from '../actionTypes';

const initialState = '';

function nTaskRed (state=initialState, action) {
  if (action.type === GET_TASKNAME) {
    return action.payload.taskname;
  }
  return state;
};

export default nTaskRed;