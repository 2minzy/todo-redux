import React from 'react';
import { useDispatch } from 'react-redux';

const TodoItem = ({ description, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
      }}
    >
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: { id } })}
      />
      <span style={{ flexGrow: 1 }}>{description}</span>
      <button
        onClick={() => dispatch({ type: 'REMOVE_TODO', payload: { id } })}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
