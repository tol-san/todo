import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
  
  const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState("");

  function handleNewTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }


  function handleEditeTodo(index) {
    const valueToBeEdit = todos[index]
    setTodoValue(valueToBeEdit)
    handleDeleteTodo(index)
  }
  return (
    <>
      <TodoInput handleNewTodo={handleNewTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditeTodo={handleEditeTodo} todos={todos} />
    </>
  );
}

export default App;
