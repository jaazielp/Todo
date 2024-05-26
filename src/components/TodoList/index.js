import React from 'react'
import PropTtypes from 'prop-types'

import { MdDelete } from 'react-icons/md'

import './styles.css'


const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
    {
      todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => onToggle && onToggle(todo)}
          onKeyPress={() =>onToggle && onToggle(todo)}
          role='button'
          tabIndex={0}
          >{todo.title}</span>
          <button
          className='remove'
          type='button'
          onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28}/>
          </button>
        </li>
      ))
    }
   </ul>
  )
}

TodoList.propTypes = {
  todos: PropTtypes.arrayOf(
    PropTtypes.shape({
      id: PropTtypes.number.isRequired,
      title: PropTtypes.string.isRequired,
      checked: PropTtypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTtypes.func.isRequired,
  onRemove: PropTtypes.func.isRequired,
}
export default TodoList
