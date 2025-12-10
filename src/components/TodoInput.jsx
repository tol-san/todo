import React, { useState } from "react";

const TodoInput = ({ handleNewTodo, todoValue, setTodoValue }) => {

  return (
    <header>
      <input
        value={todoValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") { handleNewTodo(todoValue); setTodoValue('')}
          
        }}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleNewTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
