import { createStore } from "redux";

const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//state는 readOnly -> getState 이런걸로 바로 변경할 수 없어!
//오로지 액션을 통해서만 state가 변경되어야해
//깊은 복사 사용 -> 기존거를 업데이트한 걸 리턴하는게 아니라,
//기존거를 업데이트한 별개의 새로운 데이터를 리턴해야해!
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, id: Date.now() }];
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
  todoStore.dispatch({ type: ADD_TODO, payload: toDo });
});

todoStore.subscribe(() => {
  console.log(todoStore.getState());
});
