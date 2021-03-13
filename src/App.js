import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialState = [
  {
    id: 0,
    description: 'drink coffee',
    completed: false,
  },
  {
    id: 1,
    description: 'sleep more',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [nextId, setNextId] = useState(2);

  const addTodo = description => {
    const newTodo = {
      id: nextId,
      description,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const removeTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  const toggleTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    //setTodos([...todos.map(todo => todo.id === id ? ({...todo, completed: !todo.completed}) : todo)])
  };

  return (
    <div style={{ margin: 'auto', width: '350px' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        items={todos}
        onRemoveTodo={removeTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
