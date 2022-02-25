import { createStore } from "redux";

const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return { type: ADD_TODO, payload: text };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

//state는 readOnly -> getState 이런걸로 바로 변경할 수 없어!
//오로지 액션을 통해서만 state가 변경되어야해
//깊은 복사 사용 -> 기존거를 업데이트한 걸 리턴하는게 아니라,
//기존거를 업데이트한 별개의 새로운 데이터를 리턴해야해!
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case DELETE_TODO:
      //삭제할 요소를 제외한 새로운 state를 만들어 리턴! (immutable)
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const todoStore = createStore(todoReducer);

//toDo 생성
const dispatchAddToDo = (text) => {
  todoStore.dispatch(addTodo(text));
};
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const toDo = $input.value;
  $input.value = "";
  dispatchAddToDo(toDo);
});

//toDo 렌더링
const dispatchDeleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
};
const paintToDo = () => {
  const toDos = todoStore.getState();
  $ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const $li = document.createElement("li");
    const $btn = document.createElement("button");
    $btn.innerText = "DEL";
    $btn.addEventListener("click", dispatchDeleteTodo);
    $li.id = toDo.id;
    $li.innerText = toDo.text;
    $li.appendChild($btn);
    $ul.appendChild($li);
  });
};

todoStore.subscribe(paintToDo);
todoStore.subscribe(() => {
  console.log(todoStore.getState());
});
