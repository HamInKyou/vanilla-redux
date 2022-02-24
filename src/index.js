import { createStore } from "redux";

const $plus = document.querySelector("#plus");
const $minus = document.querySelector("#minus");
const $number = document.querySelector("span");

//reducer : state를 변경하는 함수!
//reducer가 리턴하는건 업데이트 완료된 state
const countReducer = (state = 0) => {
  //여기서 state 업데이트하고

  return state; //업데이트된 state 리턴!
};

//createStore = state를 관리하는 공간을 만들어줌
const countStore = createStore(countReducer); //인자로 리듀서 들어가야해

console.log(countStore.getState()); //state를 가져온다!
