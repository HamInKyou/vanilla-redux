import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    payload: text,
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
