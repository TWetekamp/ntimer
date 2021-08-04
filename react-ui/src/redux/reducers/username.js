import { GET_USERNAME } from '../actionTypes';

const initialState = '';

function username (state=initialState, action) {
  if (action.type === GET_USERNAME) {
    return action.payload.username;
  }
  return state;
};

export default username;