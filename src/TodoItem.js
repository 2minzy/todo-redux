import React from 'react';

const TodoItem = ({
  description,
  onRemoveTodo,
  onToggleTodo,
  id,
  completed,
}) => {
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
        onChange={() => onToggleTodo(id)}
      />
      <span style={{ flexGrow: 1 }}>{description}</span>
      <button onClick={() => onRemoveTodo(id)}>X</button>
    </li>
  );
};

export default TodoItem;
