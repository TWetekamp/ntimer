import { GET_TASKDESC } from '../actionTypes';

const initialState = '';

function taskDescRed (state=initialState, action) {
  if (action.type === GET_TASKDESC) {
    return action.payload.taskdesc;
  }
  return state;
};

export default taskDescRed;