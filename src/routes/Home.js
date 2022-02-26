import { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
  console.log(props);
  const [text, setText] = useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

function getCurrentState(state, ownProps) {
  //state는 store에 담겨있는 state
  //ownProps는 Home컴포넌트에 전달되는 Props
  return { state };
}

//connect함수를 쓰면 컴포넌트로 보내는 props에 위 함수에서 리턴한 것들 props로 추가할 수 있게 해준다!
export default connect(getCurrentState)(Home);
