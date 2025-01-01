import './App.css';
import React, { useState } from 'react';
import { Todo } from './components/model.ts';
import TodoList from './components/TodoList.tsx';
import InputField from './components/InputField.tsx';

const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
    }
    setTodo("");
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Notes</span> 
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
