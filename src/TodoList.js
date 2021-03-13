import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map(item => (
        <TodoItem
          key={item.id}
          description={item.description}
          id={item.id}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
