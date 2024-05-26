import React, { useState } from 'react'
import propTypes from 'prop-types'

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  const erase = () => {
    setValue('');
  }

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
      erase();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input className="new-todo"
  placeholder="O que precisa ser feito?"
  value={value}
  onChange={onChange}
  onKeyDown={onKeyDown}/>

  );
}

NewTodo.propTypes = {
  onNewTodo: propTypes.func.isRequired,
}

export default NewTodo;
