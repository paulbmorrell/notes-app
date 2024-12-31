import React from 'react';
import './styles.css';

const InputField = () => {
  return (
    <form className="input">
        <input type="input" className="input_field" placeholder="Start typing..." />
        <button className="input__submit" type="submit">Add</button>
    </form>
  );
}

export default InputField;
