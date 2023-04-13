import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { MainContainer } from "./components/StyledComponents";

function App() {

  return (
    <MainContainer>
      <Form />
      <ToDoList />
    </MainContainer>
  );
}

export default App;
