import { useState } from "react";
import { connect } from "react-redux";
import ToDO from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDO key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

//store에 state를 컴포넌트에 props로 전달해주기 위한 함수
function mapStateToProps(state, ownProps) {
  //state는 store에 담겨있는 state
  //ownProps는 Home컴포넌트에 전달되는 Props
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

//connect함수를 쓰면 컴포넌트로 보내는 props에 위 함수에서 리턴한 것들 props로 추가할 수 있게 해준다!
export default connect(mapStateToProps, mapDispatchToProps)(Home);
