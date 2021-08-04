import { GET_STOPWATCH } from '../actionTypes';

const initialState = '';

export default function(state=initialState, action) {
  if (action.type === GET_STOPWATCH) {
    return action.payload.stopwatch;
  }
  return state;
};