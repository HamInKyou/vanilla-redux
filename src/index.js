import { createStore } from "redux";

const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const todoStore = createStore(todoReducer);

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const toDo = $input.value;
  $input.value = "";
  todoStore.dispatch({ type: ADD_TODO });
});
