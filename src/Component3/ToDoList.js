import React from "react";
import Todo from "./Todo";

function ToDoList({ todos, toggleTodo }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li key={todo.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
          <Todo todo={todo} toggleTodo={toggleTodo} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
