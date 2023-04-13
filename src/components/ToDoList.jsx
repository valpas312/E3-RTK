import { useSelector, useDispatch} from "react-redux";
import { deleteTodo } from "../redux/reducer";

const ToDoList = () => {

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.reducer.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {
        todos.map(Todo => {
          const { todo, id} = Todo;
          return (
            <div key={id}>
              <p>{todo}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          )
        })
      }
    </>
  );
};

export default ToDoList;
