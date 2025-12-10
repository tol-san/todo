import React, { useRef, useState, useEffect } from "react";

const TodoInput = ({ handleNewTodo, todoValue, setTodoValue }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todoValue]);
  return (
    <header>
      <input
        ref={inputRef}
        value={todoValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleNewTodo(todoValue);
            setTodoValue("");
          }
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
