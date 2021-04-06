import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }


  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
        <Typography style={{ padding: 16, marginBottom: 40 }} variant="h2">React Todo App</Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
