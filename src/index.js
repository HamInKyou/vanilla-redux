import { createStore } from "redux";

const $plus = document.querySelector("#plus");
const $minus = document.querySelector("#minus");
const $number = document.querySelector("span");

//reducer : state를 변경하는 함수!
//reducer가 리턴하는건 업데이트 완료된 state
//action.type로 어떤 수정을할지 미리 정의하고, type에 따라 다른 업데이트 수행
const countReducer = (state = 0, action) => {
  if (action.type === "PLUS") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

//createStore = state를 관리하는 공간을 만들어줌
const countStore = createStore(countReducer); //인자로 리듀서 들어가야해

//subscribe는 우리가 store 안에 있는 변화들을 알 수 있게 해준다.
//변화를 인지하면 콜백함수 실행하게!
countStore.subscribe(() => {
  $number.innerText = countStore.getState();
});

$plus.addEventListener("click", () => {
  countStore.dispatch({ type: "PLUS" });
});

$minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
