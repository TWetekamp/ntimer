import { combineReducers } from "redux";
import username from './username';
import taskname from './ntaskRed';
import taskdesc from './taskDescRed';
import tasks from './tasks';
// import stopwatch from "./stopwatchRed";

export default combineReducers({ username, taskname, taskdesc, tasks });