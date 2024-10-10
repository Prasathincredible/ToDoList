import React from "react";

function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
        className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-indigo-500"
      />
      <span
        className={`text-lg ${
          todo.complete ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {todo.name}
      </span>
    </label>
  );
}

export default Todo;
