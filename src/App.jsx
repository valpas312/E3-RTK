import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "./redux/reducer";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.reducer.todos);
  console.log(todos)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    todo.length === 0
      ? alert("Please enter a todo")
      : dispatch(
          addTodo([
            todo
          ])
        );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {
        todos.map((todo, index) => {
          return <div key={index}>{todo}</div>
        })
      }
    </>
  );
}

export default App;
