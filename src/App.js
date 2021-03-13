import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div style={{ margin: 'auto', width: '350px' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <TodoInput />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
