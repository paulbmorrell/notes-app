import React from 'react';
import './styles.css';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className="input">
        <input type="input" 
            className="input_field" 
            placeholder="Start typing..." 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input__submit" type="submit">Add</button>
    </form>
  );
};

export default InputField;
