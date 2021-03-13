import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, onRemoveTodo, onToggleTodo }) => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {items.map(item => (
        <TodoItem
          key={item.id}
          description={item.description}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
          id={item.id}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
