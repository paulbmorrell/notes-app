import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField.tsx';

const App = () => {

  const [todo, setTodo] = useState<string>("");

  // console.log(todo);

  return (
    <div className="App">
      <span className="heading">Notes</span> 
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
