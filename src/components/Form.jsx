import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/reducer";
import { v4 as uuid } from "uuid";

const Form = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      todo: todo
    };

    todo.length === 0
      ? alert("Please enter a todo")
      : (
        dispatch(addTodo(newTodo)),
        setTodo("")
      );
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;