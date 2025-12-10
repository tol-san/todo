import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({todos, handleDeleteTodo, handleEditeTodo}) => {

  return (
    <ul
      className="
        main
      "
    >
      {todos.map((todo, index) => {
        return (
          <TodoCard key={index} handleDeleteTodo={handleDeleteTodo} handleEditeTodo={handleEditeTodo}  index={index}> 
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
