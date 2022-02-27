import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, id, deleteToDo }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
}

//connect함수를 쓰면 컴포넌트로 보내는 props에 위 함수에서 리턴한 것들 props로 추가할 수 있게 해준다!
export default connect(null, mapDispatchToProps)(ToDo);
