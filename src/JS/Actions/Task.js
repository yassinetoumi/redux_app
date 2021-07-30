// Import Constants

import {ADD, DONE, EDIT} from "../Constants/Constats";

export const addTask = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const doneTask = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

export const editTask = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
