import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./Component3/ToDoList";
import { v4 as uuidv4 } from "uuid";
import './App.css';

const LOCAL_STORAGE_KEY = 'todoapp.todos';

function App() {
  const todoNameRef = useRef();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
<div className="min-h-screen bg-green-100 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">ToDo App</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} />
    <div className="mt-4">
      <input
        ref={todoNameRef}
        type="text"
        placeholder="Enter new todo"
        className="w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-2"
      />
      <div className="flex justify-between">
        <button
          onClick={handleAddTodo}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
        >
          Add ToDo
        </button>
        <button
          onClick={handleClearTodo}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300"
        >
          Clear Completed
        </button>
      </div>
      <div className="text-gray-600 mt-2">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
