import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: { description: inputEl.current.value },
    });
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
