import {
  GET_USERNAME,
  GET_TASKNAME,
  GET_TASKDESC,
  MANAGE_TASKS
  } from './actionTypes';

  export const updateUsername = username => {
    return {
      type: GET_USERNAME,
      payload: {
        username
      }
  }
};

  export const updateTaskname = taskname => {
    return {
      type: GET_TASKNAME,
      payload: {
        taskname
      }
  }
};

export const updateTaskdesc = taskdesc => {
  return {
    type: GET_TASKDESC,
    payload: {
      taskdesc
    }
  }
};

export const addTask = task => {
  console.log("action",task)
  return {
    type: MANAGE_TASKS,
    payload: {
      task: task.task,
      description: task.description,
      category: task.category,
      notes: task.notes,
      size: task.size
    }
  }
};