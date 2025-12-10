import React from "react";

const TodoCard = ({ handleDeleteTodo, handleEditeTodo, index, children }) => {
  return (
    <li
      className="
        todoItem
      "
    >
      {children}
      <div
        className="
          actionsContainer
        "
      >
        <button onClick={() => handleEditeTodo(index)}>
          <i
            className="
              fa-solid fa-pen-to-square
            "
          ></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i
            className="
              fa-solid fa-trash
            "
          ></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
