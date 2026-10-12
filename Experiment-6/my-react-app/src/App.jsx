import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
	<section className="app-shell">
      <div className="row mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="text-center mb-4">TODO App</h3>
                 <AddTodo onAdd={addTodo} />
                 <TodoList todos={todos} onDelete={deleteTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;