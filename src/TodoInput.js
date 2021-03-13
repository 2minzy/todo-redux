import React, { useRef } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const inputEl = useRef(null);

  const onClickHandler = () => {
    onAddTodo(inputEl.current.value);
    inputEl.current.value = '';
  };

  return (
    <div style={{ display: 'flex', marginBottom: '16px' }}>
      <input
        type='text'
        style={{ flexGrow: 1, marginRight: '8px' }}
        placeholder='Type todo description'
        ref={inputEl}
      />
      <button onClick={onClickHandler}>ADD</button>
    </div>
  );
};

export default TodoInput;
