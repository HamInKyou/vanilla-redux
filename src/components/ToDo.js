import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, deleteToDo }) {
  return (
    <li>
      {text} <button onClick={deleteToDo}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

//connect함수를 쓰면 컴포넌트로 보내는 props에 위 함수에서 리턴한 것들 props로 추가할 수 있게 해준다!
export default connect(null, mapDispatchToProps)(ToDo);
